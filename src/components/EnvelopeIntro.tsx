'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

type Phase = 'playing' | 'fading' | 'done'

export default function EnvelopeIntro({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('playing')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt autoplay when mounted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  if (phase === 'done') return <>{children}</>

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5EFE0]">

      {/* Landing detrás */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'fading' ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Vídeo */}
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
          autoPlay
          preload="auto"
          onEnded={() => setPhase('fading')}
        />
      </motion.div>

    </div>
  )
}
