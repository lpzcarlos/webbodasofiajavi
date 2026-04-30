import Image from "next/image";

export default function Banquet() {
  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-16 font-light">
        La Celebración
      </h2>
      
      {/* 
        Utilizando banquete.png como placeholder. 
        Dejar preparado para sustituir si es necesario.
      */}
      <div className="relative w-full max-w-4xl aspect-video mb-12 rounded-lg overflow-hidden img-vignette shadow-watercolor bg-text-secondary/10 flex items-center justify-center">
        <Image
          src="/banquete.png"
          alt="Banquete en La Quinta del Jarama"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
           {/* Texto placeholder si no hubiera imagen clara */}
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <h3 className="font-serif text-4xl text-text-primary">
          La Quinta del Jarama
        </h3>
        
        <p className="font-sans text-text-secondary text-sm md:text-base tracking-widest max-w-md">
          Sigüenza, Guadalajara
        </p>
        
        <p className="font-serif text-3xl text-terracotta font-medium my-4">
          15:00 h
        </p>
        
        <a 
          href="https://maps.google.com/?q=La+Quinta+del+Jarama+Sigüenza" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-full bg-terracotta hover:bg-gold text-base transition-colors duration-300 font-sans tracking-widest text-sm uppercase"
        >
          Cómo llegar &rarr;
        </a>
      </div>
    </section>
  );
}
