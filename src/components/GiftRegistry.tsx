"use client";

import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "ES52 0182 5322 2300 0404 4640";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <FadeIn>
        <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-8 font-light">
          Con todo nuestro cariño
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="max-w-xl mb-12">
          <p className="font-serif italic text-text-secondary text-xl leading-relaxed">
            El mejor regalo es vuestra presencia. Si aun así queréis contribuir a nuestra nueva vida juntos, aquí os dejamos nuestros datos:
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} className="w-full flex justify-center">
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm px-4 md:px-16 py-10 rounded-2xl shadow-watercolor border border-white/20 w-full max-w-3xl">
        <Heart className="text-terracotta w-6 h-6 mb-6" strokeWidth={1.5} />

        {/* Número de cuenta y botón copiar */}
        <div className="flex flex-col items-center gap-5 w-full">
          {/* El número de cuenta en una sola línea ajustándose dinámicamente según la pantalla */}
          <p className="font-sans text-xs sm:text-base md:text-xl lg:text-2xl tracking-widest font-bold whitespace-nowrap" style={{ color: '#4A3828' }}>
            {accountNumber}
          </p>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-all duration-300 font-sans text-xs tracking-widest uppercase mb-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                ¡Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Nombre del titular */}
        <p className="font-serif text-lg text-text-secondary italic">
          Sofía Cristóbal y Javier Cámara
        </p>
        </div>
      </FadeIn>
    </section>
  );
}
