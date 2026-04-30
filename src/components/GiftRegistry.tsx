import { Heart } from "lucide-react";

export default function GiftRegistry() {
  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-8 font-light">
        Con todo nuestro cariño
      </h2>
      
      <div className="max-w-xl mb-12">
        <p className="font-serif italic text-text-secondary text-xl leading-relaxed">
          El mejor regalo es vuestra presencia. Si aun así queréis contribuir a nuestra nueva vida juntos, aquí os dejamos nuestros datos:
        </p>
      </div>

      <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm px-8 md:px-16 py-10 rounded-2xl shadow-watercolor border border-white/20">
        <Heart className="text-terracotta w-6 h-6 mb-6" strokeWidth={1.5} />
        
        {/* Número de cuenta de ejemplo */}
        <p className="font-sans text-xl md:text-2xl tracking-[0.15em] text-text-primary mb-4 font-light">
          ES12 3456 7890 1234 5678 9012
        </p>
        
        {/* Nombre del titular de ejemplo */}
        <p className="font-serif text-lg text-text-secondary italic">
          Sofía García y Javier Martínez
        </p>
      </div>
    </section>
  );
}
