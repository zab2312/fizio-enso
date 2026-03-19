"use client";

import { useRef } from "react";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { hero } = siteContent.home;

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
      
      {/* Tamniji overlay za bolju čitljivost teksta */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" aria-hidden />
      
      {/* Text + Buttons Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-12">
        <p className="text-white/95 text-base sm:text-lg md:text-xl mb-0 drop-shadow-md italic">
          dobrodošli u
        </p>
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4 md:mb-5 tracking-wide">
            <span className="inline-block text-8xl sm:text-9xl md:text-[7rem] lg:text-[10rem] drop-shadow-glow">{hero.headline}</span>
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md text-balance normal-case">
            {hero.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-lg font-medium shadow-lg hover:bg-foreground/90 transition-all duration-300"
          >
            {hero.ctaRezervirajte}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/tretmani"
            className="text-sm sm:text-base font-medium text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            {hero.ctaUsluge}
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm text-white/90 normal-case">
            📍 Maksimir, Zagreb — lako dostupno tramvajem
          </p>
        </div>
      </div>
    </div>
  );
}

