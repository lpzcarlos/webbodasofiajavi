'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EnvelopeIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing')

  if (phase === 'done') return <>{children}</>

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">

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
        className="absolute inset-0 z-10 bg-white"
        animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          if (phase === 'fading') setPhase('done')
        }}
      >
        <video
          src="/videoanimacion.mp4"
          className="w-full h-full object-cover object-center bg-white"
          autoPlay
          muted
          playsInline
          onEnded={() => setPhase('fading')}
        />

      </motion.div>

    </div>
  )
}
