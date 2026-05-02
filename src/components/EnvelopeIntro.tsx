'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

type Phase = 'idle' | 'playing' | 'fading' | 'done'

export default function EnvelopeIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    if (phase !== 'idle') return
    window.dispatchEvent(new Event('startMusic'))
    videoRef.current?.play().catch(() => {})
    setPhase('playing')
  }

  if (phase === 'done') return <>{children}</>

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5EFE0]">

      {/* Landing detrás */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
        animate={{ opacity: phase === 'fading' ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Vídeo con poster — sin autoPlay, el sobre se muestra estático */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onAnimationComplete={() => { if (phase === 'fading') setPhase('done') }}
      >
        <video
          ref={videoRef}
          src="/videoanimacion.mp4"
          className="w-full h-full object-cover object-center"
          muted
          playsInline
          preload="auto"
          onEnded={() => setPhase('fading')}
        />

        {/* Imagen del sobre — visible hasta que arranca el vídeo, con tamaño controlado */}
        {phase === 'idle' && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F5EFE0]">
            <img
              src="/sobre.png"
              alt="Sobre de boda"
              className="h-full w-auto max-w-none"
            />
          </div>
        )}
      </motion.div>

      {/* Capa transparente + texto — desaparece al pinchar */}
      <AnimatePresence>
        {phase === 'idle' && (
          <motion.div
            key="overlay"
            className="absolute inset-0 z-20 cursor-pointer"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClick}
          >
            <p
              className="absolute left-1/2 -translate-x-1/2 font-sans text-xs tracking-[0.4em] uppercase whitespace-nowrap"
              style={{ color: '#4A3828', top: '30%' }}
            >
              Pincha para abrir
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
