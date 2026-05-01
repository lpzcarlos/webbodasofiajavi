"use client";

import { useState, useEffect } from "react";

export default function EnvelopeIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isHidden) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
  }, [isHidden, mounted]);

  if (!mounted || isHidden) return null;

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      setIsHidden(true);
    }, 2800);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F5EFE0] transition-opacity duration-1000 ease-in-out ${
        isOpen ? "opacity-0 pointer-events-none delay-[1500ms]" : "opacity-100"
      }`}
    >
      <div 
        className={`relative w-[90%] max-w-lg aspect-[4/3] sm:aspect-[3/2] cursor-pointer [perspective:1500px] transition-transform duration-500 hover:scale-105 ${isOpen ? "scale-100" : ""}`}
        onClick={handleClick}
      >
        {/* Envelope Back (Inside) */}
        <div className="absolute inset-0 bg-[#D4C8B1] rounded-md shadow-inner"></div>

        {/* Letter Inside */}
        <div 
          className={`absolute inset-x-4 top-4 bottom-4 bg-[#FFFCF5] rounded-sm shadow-md flex flex-col items-center justify-center text-center p-6 transition-all duration-1000 ease-out ${
            isOpen ? "translate-y-[-50%] sm:translate-y-[-60%] scale-105 shadow-2xl z-40" : "translate-y-0 z-10"
          } delay-500`}
        >
          <div className="border border-[#C9A96E]/40 p-4 w-full h-full flex flex-col items-center justify-center bg-white/50">
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4 font-light">
              Sofía <span className="italic">&</span> Javier
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-secondary tracking-[0.3em] uppercase">
              3 &middot; Octubre &middot; 2026
            </p>
          </div>
        </div>

        {/* Bottom, Left, and Right Flaps */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-[#E8DFCB] [clip-path:polygon(0_0,50.2%_50.2%,0_100%)] rounded-l-md drop-shadow-sm"></div>
          <div className="absolute inset-0 bg-[#E8DFCB] [clip-path:polygon(100%_0,100%_100%,49.8%_50.2%)] rounded-r-md drop-shadow-sm"></div>
          <div className="absolute inset-0 bg-[#EFE9DB] [clip-path:polygon(0_100%,100%_100%,50%_49.8%)] rounded-b-md shadow-[-2px_-2px_10px_rgba(0,0,0,0.05)]"></div>
        </div>

        {/* Top Flap */}
        <div 
          className={`absolute top-0 inset-x-0 h-full origin-top transition-transform duration-700 ease-in-out pointer-events-none ${
            isOpen ? "[transform:rotateX(180deg)] z-0" : "[transform:rotateX(0deg)] z-30"
          }`}
        >
          <div className="w-full h-full bg-[#E1D4BB] [clip-path:polygon(0_0,100%_0,50%_50.5%)] rounded-t-md shadow-[0_4px_10px_rgba(0,0,0,0.1)]"></div>
        </div>

        {/* Wax Seal & Instruction */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Wax Seal Simulation */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#9A4242] shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#F5EFE0] font-serif text-2xl border-2 border-[#813636]">
            <span className="relative z-10 drop-shadow-md">S&J</span>
            <div className="absolute inset-1 border border-white/10 rounded-full"></div>
          </div>
          
          <div className="absolute bottom-8 w-full text-center">
            <p className="inline-block font-sans text-[11px] text-[#9A4242] font-semibold tracking-widest uppercase animate-pulse bg-[#F5EFE0]/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
              Toca para abrir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
