'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

type Phase = 'idle' | 'playing' | 'fading' | 'done'

export default function EnvelopeIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    if (phase !== 'idle') return
    // Señal al MusicPlayer (montado en layout) para que arranque desde el segundo 3
    window.dispatchEvent(new Event('startMusic'))
    // Arrancar vídeo
    if (videoRef.current) {
      videoRef.current.play().catch(() => { })
    }
    setPhase('playing')
  }

  if (phase === 'done') return <>{children}</>

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-white cursor-pointer"
      onClick={handleClick}
    >
      {/* Landing detrás */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
        animate={{ opacity: phase === 'fading' ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Vídeo — NO tiene autoPlay, arranca solo al hacer clic */}
      <motion.div
        className="absolute inset-0 z-10 bg-white"
        animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onAnimationComplete={() => { if (phase === 'fading') setPhase('done') }}
      >
        <video
          ref={videoRef}
          src="/videoanimacion.mp4"
          className="w-full h-full object-cover object-center bg-white"
          muted
          playsInline
          preload="auto"
          onEnded={() => setPhase('fading')}
        />

        {/* Texto "Pincha para abrir" — color del resto de la web, desaparece al clicar */}
        <motion.p
          className="absolute top-20 w-full text-center font-sans text-xs tracking-[0.4em] uppercase"
          style={{ color: '#4A3828' }}
          animate={{ opacity: phase === 'idle' ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Pincha para abrir
        </motion.p>
      </motion.div>

    </div>
  )
}
