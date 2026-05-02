"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pareja.png"
          alt="Sofía y Javier en la Torre Eiffel"
          fill
          priority
          className="object-cover object-center md:object-bottom"
        />
        {/* Subtle cream overlay */}
        <div className="absolute inset-0 bg-[#F5EFE0]/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5EFE0]/10 to-[#F5EFE0]"></div>
      </div>

      {/* Spacer top — empuja el contenido hacia abajo */}
      <div className="flex-1" />

      {/* Content — centrado en la parte inferior */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 pb-4 transition-all duration-1000 transform ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-text-primary font-light tracking-tight mb-2 md:mb-4">
          Sofía <span className="font-italic">&</span> Javier
        </h1>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-text-primary font-light mb-4">
          3 &middot; Octubre &middot; 2026
        </h2>
      </div>

      {/* Scroll indicator — siempre al fondo, nunca sobre el texto */}
      <div className="relative z-10 pb-6 flex justify-center animate-bounce">
        <ChevronDown className="text-text-primary/60 w-8 h-8 font-light" strokeWidth={1} />
      </div>
    </section>
  );
}
