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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Obtener las alergias (son múltiples checkboxes)
    const allergies = formData.getAll('allergies');
    
    const data = {
      name: formData.get('guestName'),
      plusOne: formData.get('plusOne'),
      plusOneName: formData.get('plusOneName'),
      bus: formData.get('bus'),
      allergies: allergies,
      otherAllergies: formData.get('otherAllergies'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("¡Gracias por confirmar tu asistencia! Hemos recibido tu respuesta.");
        form.reset();
        setComesWithPlusOne(false);
      } else {
        alert("Hubo un error guardando tus datos. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Revisa tu internet e inténtalo de nuevo.");
    }
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
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="plusOne" 
                value="yes" 
                className="peer sr-only"
                onChange={() => setComesWithPlusOne(true)}
              />
              <div className="text-center py-2 px-4 rounded-xl border border-text-secondary/30 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-[#F5EFE0] text-text-primary transition-all duration-300">
                <span className="font-serif text-base">Sí</span>
              </div>
            </label>
            
            <label className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="plusOne" 
                value="no" 
                defaultChecked
                className="peer sr-only"
                onChange={() => setComesWithPlusOne(false)}
              />
              <div className="text-center py-2 px-4 rounded-xl border border-text-secondary/30 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-[#F5EFE0] text-text-primary transition-all duration-300">
                <span className="font-serif text-base">No</span>
              </div>
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
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="bus" 
                value="yes" 
                className="peer sr-only"
              />
              <div className="text-center py-2 px-4 rounded-xl border border-text-secondary/30 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-[#F5EFE0] text-text-primary transition-all duration-300">
                <span className="font-serif text-base">Sí</span>
              </div>
            </label>
            
            <label className="flex-1 cursor-pointer">
              <input 
                type="radio" 
                name="bus" 
                value="no" 
                defaultChecked
                className="peer sr-only"
              />
              <div className="text-center py-2 px-4 rounded-xl border border-text-secondary/30 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-[#F5EFE0] text-text-primary transition-all duration-300">
                <span className="font-serif text-base">No</span>
              </div>
            </label>
          </div>
        </div>

        {/* 5. Alergias */}
        <div className="flex flex-col gap-4">
          <label className="font-sans text-sm tracking-widest uppercase text-text-secondary">
            Alergias o menú especial
          </label>
          <div className="grid grid-cols-2 gap-4">
            {["Gluten", "Lácteos", "Frutos secos", "Vegana"].map((allergy) => (
              <label key={allergy} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    name="allergies" 
                    value={allergy} 
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded border border-text-secondary group-hover:border-terracotta peer-checked:border-terracotta peer-checked:bg-terracotta transition-colors flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#F5EFE0] scale-0 peer-checked:scale-100 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <span className="font-serif text-lg text-text-primary">{allergy}</span>
              </label>
            ))}
          </div>
          <input 
            type="text" 
            name="otherAllergies" 
            placeholder="¿Alguna otra? Escríbela aquí..."
            className="w-full bg-transparent border-b border-text-secondary/30 py-3 text-text-primary focus:outline-none focus:border-terracotta transition-colors font-serif text-lg placeholder:text-text-secondary/50 mt-2"
          />
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
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-terracotta hover:bg-gold text-base transition-colors duration-300 font-sans tracking-widest text-sm uppercase text-white font-medium w-full md:w-auto"
          >
            Confirmar asistencia
          </button>
        </div>
      </form>
    </section>
  );
}
