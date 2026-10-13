import { useEffect, useRef } from 'react'

interface Props {
  src: string
  /** Play while true, pause otherwise. */
  playing: boolean
  muted: boolean
  /** Called when the browser blocks playback with sound and the video falls back to muted. */
  onMutedChange?: (muted: boolean) => void
  /** Accessible name. Leave out for purely decorative background video. */
  label?: string
  className?: string
}

/** A looping, inline video whose playback is driven by the parent (e.g. visibility). */
export function MediaVideo({ src, playing, muted, onMutedChange, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = muted
    if (!playing) {
      video.pause()
      return
    }
    // play() rejects when autoplay is blocked. Sound is the usual reason, so retry silently
    // rather than leaving the video frozen; if that fails too, the poster stays visible.
    video.play().catch(() => {
      if (video.muted) return
      video.muted = true
      onMutedChange?.(true)
      video.play().catch(() => {})
    })
  }, [playing, muted, onMutedChange])

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
