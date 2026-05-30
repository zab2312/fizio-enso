"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
  updatedAt: string;
};

const COOKIE_CONSENT_KEY = "cookie_consent_v1";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
  updatedAt: "",
};

function persistPreferences(preferences: CookiePreferences) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: preferences }));
}

function readPreferences(): CookiePreferences {
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!raw) return defaultPreferences;

  try {
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decided: Boolean(parsed.decided),
      updatedAt: parsed.updatedAt ?? "",
    };
  } catch {
    return defaultPreferences;
  }
}

export default function CookieConsentManager() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);
    const saved = readPreferences();
    setPreferences(saved);
    setShowBanner(!saved.decided);

    const openSettings = () => setShowSettings(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const saveAndClose = (nextPreferences: CookiePreferences) => {
    setPreferences(nextPreferences);
    persistPreferences(nextPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () =>
    saveAndClose({
      necessary: true,
      analytics: true,
      marketing: true,
      decided: true,
      updatedAt: new Date().toISOString(),
    });

  const rejectOptional = () =>
    saveAndClose({
      necessary: true,
      analytics: false,
      marketing: false,
      decided: true,
      updatedAt: new Date().toISOString(),
    });

  const modalTitle = useMemo(() => (showSettings ? "Postavke kolačića" : ""), [showSettings]);

  if (!mounted) return null;

  return (
    <>
      {(showBanner || showSettings) && (
        <div className="fixed inset-0 z-[60] bg-black/25" onClick={() => setShowSettings(false)} />
      )}

      {showBanner && (
        <div className="fixed bottom-4 left-4 right-4 z-[70] md:left-6 md:right-6 lg:left-8 lg:right-8">
          <div className="mx-auto max-w-5xl rounded-xl border border-foreground/10 bg-background p-5 shadow-card">
            <p className="font-serif text-lg text-foreground mb-2">Privatnost i kolačići</p>
            <p className="text-sm text-accent leading-relaxed">
              Koristimo nužne kolačiće za rad stranice. Analitičke i marketinške kolačiće koristimo samo uz vaš
              pristanak. Više informacija pročitajte u{" "}
              <Link href="/cookie-policy" className="underline hover:text-foreground">
                Politici kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="underline hover:text-foreground">
                Politici privatnosti
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-foreground px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Postavke
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-lg border border-foreground/30 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
              >
                Odbij neobavezne
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-accent transition-colors"
              >
                Prihvati sve
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-xl bg-background p-6 shadow-card border border-foreground/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl text-foreground">{modalTitle}</h2>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-accent hover:text-foreground transition-colors"
                aria-label="Zatvori postavke kolačića"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-foreground/10 p-4">
                <p className="font-medium text-foreground">Nužni kolačići</p>
                <p className="text-sm text-accent mt-1">Uvijek uključeni, potrebni za osnovni rad stranice.</p>
              </div>

              <label className="flex items-start justify-between gap-4 rounded-lg border border-foreground/10 p-4">
                <div>
                  <p className="font-medium text-foreground">Analitički kolačići</p>
                  <p className="text-sm text-accent mt-1">Pomažu razumjeti kako se stranica koristi.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                  className="mt-1 h-4 w-4 accent-foreground"
                />
              </label>

              <label className="flex items-start justify-between gap-4 rounded-lg border border-foreground/10 p-4">
                <div>
                  <p className="font-medium text-foreground">Marketinški kolačići</p>
                  <p className="text-sm text-accent mt-1">Koriste se za prikaz relevantnijeg sadržaja i oglasa.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                  className="mt-1 h-4 w-4 accent-foreground"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() =>
                  saveAndClose({
                    ...preferences,
                    necessary: true,
                    decided: true,
                    updatedAt: new Date().toISOString(),
                  })
                }
                className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-accent transition-colors"
              >
                Spremi postavke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
