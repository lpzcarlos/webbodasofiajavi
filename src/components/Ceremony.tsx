import Image from "next/image";

export default function Ceremony() {
  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-16 font-light">
        La Ceremonia
      </h2>
      
      <div className="relative w-full max-w-2xl mb-12 rounded-lg overflow-hidden img-vignette shadow-watercolor">
        <img
          src="/iglesia.png"
          alt="Iglesia de San Nicolás, Guadalajara"
          className="w-full h-auto block"
        />
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <h3 className="font-serif text-4xl text-text-primary">
          Iglesia de San Nicolás
        </h3>
        
        <p className="font-sans text-text-secondary text-sm md:text-base tracking-widest max-w-md">
          Plaza de San Nicolás, Guadalajara
        </p>
        
        <p className="font-serif text-3xl text-terracotta font-medium my-4">
          12:00 h
        </p>
        
        <a 
          href="https://maps.google.com/?q=Iglesia+San+Nicolas+Guadalajara" 
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
