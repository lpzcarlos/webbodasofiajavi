"use client";

import { useState } from "react";

// Lista de nombres inventados de invitados
const guests = [
  "Alejandro Ruiz",
  "Valentina Torres",
  "Mateo García",
  "Isabella López",
  "Lucas Martínez",
  "Camila Rodríguez",
  "Martín Fernández",
  "Sofía Pérez",
  "Hugo Sánchez",
  "Daniela Gómez"
];

export default function RsvpForm() {
  const [comesWithPlusOne, setComesWithPlusOne] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se debería conectar a backend/Formspree/n8n
    alert("¡Gracias por confirmar tu asistencia! Hemos recibido tu respuesta.");
    e.currentTarget.reset();
    setComesWithPlusOne(false);
  };

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center mb-16">
        <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-6 font-light">
          ¿Vendrás?
        </h2>
        <p className="font-serif italic text-text-secondary text-xl">
          Confírmanos tu asistencia antes del 1 de septiembre de 2026
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-8 bg-white/20 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-watercolor"
      >
        {/* 1. Nombre del invitado */}
        <div className="flex flex-col gap-2">
          <label htmlFor="guestName" className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            Tu Nombre
          </label>
          <select 
            id="guestName" 
            name="guestName" 
            required
            defaultValue=""
            className="w-full bg-transparent border-b border-text-secondary/30 py-3 text-text-primary focus:outline-none focus:border-terracotta transition-colors font-serif text-lg appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecciona tu nombre...</option>
            {/* Aquí se deben añadir los nombres reales en producción */}
            {guests.map((name, i) => (
              <option key={i} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* 2. ¿Vienes acompañado/a? */}
        <div className="flex flex-col gap-4">
          <label className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            ¿Vienes acompañado/a?
          </label>
          <div className="flex gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="plusOne" 
                  value="yes" 
                  className="peer sr-only"
                  onChange={() => setComesWithPlusOne(true)}
                />
                <div className="w-5 h-5 rounded-full border border-text-secondary group-hover:border-terracotta peer-checked:border-terracotta transition-colors flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-terracotta scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="font-serif text-lg text-text-primary">Sí</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="plusOne" 
                  value="no" 
                  defaultChecked
                  className="peer sr-only"
                  onChange={() => setComesWithPlusOne(false)}
                />
                <div className="w-5 h-5 rounded-full border border-text-secondary group-hover:border-terracotta peer-checked:border-terracotta transition-colors flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-terracotta scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="font-serif text-lg text-text-primary">No</span>
            </label>
          </div>
        </div>

        {/* 3. Nombre del acompañante (Condicional) */}
        <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out ${comesWithPlusOne ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
          <label htmlFor="plusOneName" className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            Nombre del acompañante
          </label>
          <input 
            type="text" 
            id="plusOneName" 
            name="plusOneName" 
            placeholder="Escribe su nombre completo"
            required={comesWithPlusOne}
            className="w-full bg-transparent border-b border-text-secondary/30 py-3 text-text-primary focus:outline-none focus:border-terracotta transition-colors font-serif text-lg placeholder:text-text-secondary/50"
          />
        </div>

        {/* 4. ¿Necesitas autobús? */}
        <div className="flex flex-col gap-4">
          <label className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            ¿Necesitas servicio de autobús?
          </label>
          <div className="flex gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="bus" 
                  value="yes" 
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-text-secondary group-hover:border-terracotta peer-checked:border-terracotta transition-colors flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-terracotta scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="font-serif text-lg text-text-primary">Sí</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="bus" 
                  value="no" 
                  defaultChecked
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-text-secondary group-hover:border-terracotta peer-checked:border-terracotta transition-colors flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-terracotta scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="font-serif text-lg text-text-primary">No</span>
            </label>
          </div>
        </div>

        {/* 5. Alergias */}
        <div className="flex flex-col gap-2">
          <label htmlFor="allergies" className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            Alergias o intolerancias
          </label>
          <textarea 
            id="allergies" 
            name="allergies" 
            rows={2}
            placeholder="Escríbenos si tienes alguna alergia o intolerancia alimentaria"
            className="w-full bg-transparent border-b border-text-secondary/30 py-3 text-text-primary focus:outline-none focus:border-terracotta transition-colors font-serif text-lg placeholder:text-text-secondary/50 resize-none"
          ></textarea>
        </div>

        {/* 6. Mensaje */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            Mensaje para los novios
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={3}
            placeholder="Si quieres dejarnos unas palabras..."
            className="w-full bg-transparent border-b border-text-secondary/30 py-3 text-text-primary focus:outline-none focus:border-terracotta transition-colors font-serif text-lg placeholder:text-text-secondary/50 resize-none"
          ></textarea>
        </div>

        {/* Botón Envío */}
        <div className="mt-8 flex justify-center">
          <button 
            type="submit"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-terracotta hover:bg-gold text-base transition-colors duration-300 font-sans tracking-widest text-sm uppercase text-[#F5EFE0] w-full md:w-auto"
          >
            Confirmar asistencia
          </button>
        </div>
      </form>
    </section>
  );
}
