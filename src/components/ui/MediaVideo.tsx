import { useEffect, useRef } from 'react'

interface Props {
  src: string
  /** Play while true, pause otherwise. */
  playing: boolean
  muted: boolean
  /** Accessible name. Leave out for purely decorative background video. */
  label?: string
  className?: string
}

/** A looping, inline video whose playback is driven by the parent (e.g. visibility). */
export function MediaVideo({ src, playing, muted, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // play() rejects when autoplay is blocked; the poster stays visible in that case.
    if (playing) video.play().catch(() => {})
    else video.pause()
  }, [playing])

  return (
    <video
      ref={ref}
      muted={muted}
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
    >
      <source src={src} />
    </video>
  )
}
