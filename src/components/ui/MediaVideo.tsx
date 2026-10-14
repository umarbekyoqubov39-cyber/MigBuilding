import { useEffect, useRef } from 'react'

/** Screens that get `srcSmall` instead of `src`. */
const SMALL_SCREEN = '(max-width: 767px)'

interface Props {
  src: string
  /** Optional lighter copy for phones; the browser picks it when the screen is narrow. */
  srcSmall?: string
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
export function MediaVideo({ src, srcSmall, playing, muted, onMutedChange, label, className }: Props) {
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
      {srcSmall && <source src={srcSmall} type="video/mp4" media={SMALL_SCREEN} />}
      <source src={src} type="video/mp4" />
    </video>
  )
}
