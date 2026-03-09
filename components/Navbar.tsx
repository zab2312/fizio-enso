"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import TopBar from "@/components/TopBar";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHomePage);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Zatvori mobilni izbornik kad se promijeni stranica
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // On non-home pages, always show navbar
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    // On home page, show navbar only after scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navbar after scrolling past hero
      if (scrollPosition > heroHeight * 0.8) {
        setIsVisible(true);
        setIsScrolled(true);
      } else {
        setIsVisible(false);
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 shadow-subtle"
          : isHomePage
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0 shadow-subtle"
      }`}
    >
      <TopBar />
      <nav className="bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors">
            {siteContent.brand.name}
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-sm text-foreground hover:text-accent transition-colors">
                {siteContent.nav.home}
              </Link>
              <Link href="/o-ensu" className="text-sm text-foreground hover:text-accent transition-colors">
                {siteContent.nav.about}
              </Link>
              <Link href="/tretmani" className="text-sm text-foreground hover:text-accent transition-colors">
                {siteContent.nav.services}
              </Link>
              <Link href="/cjenik" className="text-sm text-foreground hover:text-accent transition-colors">
                {siteContent.nav.pricing}
              </Link>
              <Link href="/kontakt" className="text-sm text-foreground hover:text-accent transition-colors">
                {siteContent.nav.contact}
              </Link>
            </div>
            <Link
              href="/kontakt#forma"
              className="shrink-0 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-accent transition-colors"
            >
              Rezerviraj termin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-foreground/10 bg-background/98 backdrop-blur-sm px-6 py-4 space-y-2">
          <Link
            href="/"
            className="block py-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteContent.nav.home}
          </Link>
          <Link
            href="/o-ensu"
            className="block py-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteContent.nav.about}
          </Link>
          <Link
            href="/tretmani"
            className="block py-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteContent.nav.services}
          </Link>
          <Link
            href="/cjenik"
            className="block py-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteContent.nav.pricing}
          </Link>
          <Link
            href="/kontakt"
            className="block py-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteContent.nav.contact}
          </Link>
          <Link
            href="/kontakt#forma"
            className="mt-4 block w-full py-3 px-4 bg-foreground text-background text-center font-medium rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rezerviraj termin
          </Link>
        </div>
      </div>
      </nav>
    </header>
  );
}

