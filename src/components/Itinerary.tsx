"use client";

import { useEffect, useRef } from "react";

const events = [
  { time: "12:00 h", description: "Ceremonia" },
  { time: "13:00 h", description: "Aperitivo" },
  { time: "15:00 h", description: "Banquete" },
  { time: "19:00 h", description: "¡Empieza la fiesta!" },
  { time: "00:00 h", description: "Hasta pronto" },
];

export default function Itinerary() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center">
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-20 font-light text-center">
        El Gran Día
      </h2>
      
      <div 
        ref={containerRef}
        className="relative w-full max-w-lg mx-auto flex flex-col items-center"
      >
        {/* Línea vertical dorada */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold -translate-x-1/2 opacity-50"></div>

        {events.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item relative w-full flex items-center justify-between mb-16 last:mb-0 opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Punto en la línea */}
            <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-terracotta -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_0_4px_var(--base)]"></div>

            {/* Contenido Izquierda / Derecha */}
            <div className={`w-1/2 flex flex-col ${index % 2 === 0 ? "items-end pr-8 md:pr-12 text-right" : "items-start pl-8 md:pl-12 text-left order-last"} `}>
              {index % 2 === 0 ? (
                <>
                  <p className="font-serif text-2xl md:text-3xl text-terracotta font-medium">{item.time}</p>
                  <p className="font-sans text-text-primary text-base md:text-lg mt-2">{item.description}</p>
                </>
              ) : (
                <>
                  <p className="font-sans text-text-primary text-base md:text-lg mb-2">{item.description}</p>
                  <p className="font-serif text-2xl md:text-3xl text-terracotta font-medium">{item.time}</p>
                </>
              )}
            </div>
            
            {/* Espaciador para el lado opuesto */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
