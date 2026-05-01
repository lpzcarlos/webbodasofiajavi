'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EnvelopeIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing')

  if (phase === 'done') return <>{children}</>

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* Landing detrás — fade in mientras el video desaparece */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
        animate={{ opacity: phase === 'fading' ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Video a pantalla completa */}
      <motion.div
        className="absolute inset-0 z-10 bg-black"
        animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          if (phase === 'fading') setPhase('done')
        }}
      >
        <video
          src="/videocarta.mp4"
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          playsInline
          onEnded={() => setPhase('fading')}
        />
        
        {/* Botón para saltar la intro por si el usuario tiene prisa */}
        <button 
          onClick={() => setPhase('fading')}
          className="absolute bottom-8 right-8 z-20 text-white/50 text-xs md:text-sm font-sans tracking-widest hover:text-white transition-colors uppercase"
        >
          Saltar intro &rarr;
        </button>
      </motion.div>

    </div>
  )
}
