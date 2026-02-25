"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);

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
        {/* Placeholder: Replace with actual massage video */}
        <source src="/videos/massage-hero.mp4" type="video/mp4" />
        {/* Fallback if video doesn't load */}
      </video>
      
      {/* Fallback gradient if video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-10" />
      
      {/* Logo Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-2000 ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image
            src="/info/logo.png"
            alt="Fizio Ensō logo - Fizioterapija i masaže u Zagrebu"
            fill
            className="object-contain drop-shadow-glow"
            priority
          />
        </div>
      </div>
    </div>
  );
}

