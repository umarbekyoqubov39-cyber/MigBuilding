import { useRef, useState } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'
import { useReducedMotion } from 'motion/react'

import { comingSoon, featureVideo } from '../../data/content'
import { useInView } from '../../hooks/useInView'
import { MediaVideo } from '../ui/MediaVideo'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function VideoSection() {
  const { video } = featureVideo
  const frameRef = useRef<HTMLDivElement>(null)
  const nearViewport = useInView(frameRef, { rootMargin: '300px', once: true })
  const visible = useInView(frameRef, { threshold: 0.5 })
  const reduceMotion = useReducedMotion()
  const [muted, setMuted] = useState(true)
  const [userPlay, setUserPlay] = useState(false)

  const hasVideo = video.src !== ''
  const playing = visible && (!reduceMotion || userPlay)

  return (
    <Section id="video">
      <Reveal>
        <h2
          id="video-title"
          className="text-gold mx-auto w-fit text-center text-[1.75rem] leading-tight font-extrabold tracking-[-0.04em] uppercase sm:text-4xl md:text-5xl"
        >
          {featureVideo.title}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-6 max-w-4xl md:mt-8">
        <div className="rounded-[1.25rem] bg-ink-800 p-2 shadow-[0_0_45px_rgba(235,176,42,0.35)] ring-1 ring-gold-400/25 sm:rounded-[1.75rem] sm:p-4">
          <div ref={frameRef} className="relative aspect-video overflow-hidden rounded-xl bg-black sm:rounded-2xl">
            <ResponsiveImage
              image={video.poster}
              sizes="(min-width: 896px) 864px, 100vw"
              className="absolute inset-0 size-full object-cover"
            />

            {hasVideo && nearViewport && (
              <MediaVideo
                src={video.src}
                playing={playing}
                muted={muted}
                label={video.title}
                className="absolute inset-0 size-full object-cover"
              />
            )}

            {hasVideo && reduceMotion && !userPlay && (
              <button
                type="button"
                onClick={() => setUserPlay(true)}
                aria-label="Videoni ijro etish"
                className="absolute inset-0 grid place-items-center bg-black/30"
              >
                <span className="bg-gold grid size-16 place-items-center rounded-full text-ink-950">
                  <Play className="ml-1 size-7" aria-hidden />
                </span>
              </button>
            )}

            {hasVideo ? (
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                aria-pressed={!muted}
                className="absolute top-2 right-2 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-black/70 px-3 text-xs font-semibold text-white backdrop-blur-sm sm:top-4 sm:right-4 sm:text-sm"
              >
                {muted ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
                {muted ? 'Ovoz uchun bosing' : "Ovozni o'chirish"}
              </button>
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-black/35">
                <div className="flex flex-col items-center gap-3">
                  <span className="grid size-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm sm:size-18">
                    <Play className="ml-1 size-6 sm:size-8" aria-hidden />
                  </span>
                  <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/85 sm:text-sm">
                    {comingSoon}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="text-gold mx-auto mt-6 w-fit text-center text-base font-semibold sm:text-xl md:mt-8 md:text-2xl">
          {featureVideo.caption}
        </p>
      </Reveal>
    </Section>
  )
}
