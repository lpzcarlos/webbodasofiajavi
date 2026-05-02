'use client'

import { useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleStart = () => {
      const audio = audioRef.current
      if (!audio) return
      audio.currentTime = 2
      audio.volume = 0.4
      audio.play().catch(() => { })
    }

    window.addEventListener('startMusic', handleStart)
    return () => window.removeEventListener('startMusic', handleStart)
  }, [])

  return (
    <audio ref={audioRef} src="/cancion.mpeg" loop preload="auto" />
  )
}
