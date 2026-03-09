"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);
  const { hero } = siteContent.home;

  useEffect(() => {
    // Fade in logo after a short delay
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/massage-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback gradient if video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/50 -z-10 pointer-events-none" />
      
      {/* Logo + Text + Buttons Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 pt-12 transition-opacity duration-2000 ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 mb-6 md:mb-8">
          <Image
            src="/info/logo.png"
            alt="Fizio Ensō logo - Fizioterapija i masaže u Zagrebu"
            fill
            className="object-contain drop-shadow-glow"
            priority
          />
        </div>
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg mb-3 tracking-wide">
            {hero.headline}
          </h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md">
            {hero.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/tretmani"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-foreground rounded-lg font-medium shadow-lg hover:bg-white/95 transition-all duration-300"
          >
            {hero.ctaUsluge}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background border-2 border-background rounded-lg font-medium shadow-lg hover:bg-foreground/90 transition-all duration-300"
          >
            {hero.ctaRezervirajte}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

