'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.volume = 0.4
      audio.play().catch(() => { })
      setIsPlaying(true)
    }
  }

  return (
    <>
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#F5EFE0] text-text-primary shadow-lg border border-gold/30 hover:bg-[#eae3d2] transition-all duration-300 flex items-center justify-center"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-text-primary" />
        )}
      </button>
      <audio ref={audioRef} src="/cancion.m4a" loop preload="auto" />
    </>
  )
}
