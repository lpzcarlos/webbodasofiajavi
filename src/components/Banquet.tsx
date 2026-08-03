import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Banquet() {
  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <FadeIn>
        <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-16 font-light">
          La Celebración
        </h2>
      </FadeIn>

      {/* 
        Utilizando banquete.png como placeholder. 
        Dejar preparado para sustituir si es necesario.
      */}
      <FadeIn delay={0.2}>
        <div className="relative w-full max-w-2xl mb-12 rounded-lg overflow-hidden img-vignette shadow-watercolor">
          <img
            src="/banquete.jpeg"
            alt="Banquete en La Quinta del Jarama"
            className="w-full h-auto block"
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center space-y-4">
        <FadeIn delay={0.3}>
          <h3 className="font-serif text-4xl text-text-primary">
            Monte de Cutamilla
          </h3>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-serif text-text-primary text-xl md:text-2xl tracking-wide max-w-md">
            Sigüenza, Guadalajara
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="font-serif text-3xl text-terracotta font-medium my-4">
            15:00 h
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <a
            href="https://maps.google.com/?q=Monte+de+Cutamilla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-terracotta hover:bg-gold text-base transition-colors duration-300 font-sans tracking-widest text-sm uppercase text-white font-medium w-full md:w-auto"
          >
            Cómo llegar &rarr;
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
