"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 2026-10-03T12:00:00
    const targetDate = new Date("2026-10-03T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 w-full flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="font-serif text-5xl md:text-6xl text-text-primary font-light mb-8">
          3 &middot; Octubre &middot; 2026
        </h2>
        <h3 className="font-serif italic text-text-secondary text-2xl">
          Faltan...
        </h3>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 max-w-3xl w-full">
        <TimeUnit value={timeLeft.days} label="Días" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-16 md:w-24">
      <span className="font-serif text-4xl md:text-6xl text-terracotta mb-2 font-light">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="font-sans text-xs md:text-sm text-text-secondary tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="text-gold font-serif text-2xl md:text-4xl -translate-y-4">
      &middot;
    </div>
  );
}
