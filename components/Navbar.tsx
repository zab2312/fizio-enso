"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHomePage);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 bg-background/95 backdrop-blur-sm shadow-subtle"
          : isHomePage
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0 bg-background/95 backdrop-blur-sm shadow-subtle"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors">
            {siteContent.brand.name}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.home}
            </Link>
            <Link href="/o-ensu" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.about}
            </Link>
            <Link href="/tretmani" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.services}
            </Link>
            <Link href="/prostor-oprema" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.space}
            </Link>
            <Link href="/cjenik" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.pricing}
            </Link>
            <Link href="/kontakt" className="text-sm text-foreground hover:text-accent transition-colors">
              {siteContent.nav.contact}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

