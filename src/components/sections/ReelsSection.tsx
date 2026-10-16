import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Play, Volume2, VolumeX } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'

import { reels } from '../../data/content'
import { useInView } from '../../hooks/useInView'
import { cx } from '../../lib/cx'
import { MediaVideo } from '../ui/MediaVideo'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

const roundButton =
  'grid size-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-35'

const frameShape = {
  portrait: 'aspect-[9/16] w-[min(23rem,100%,calc(80svh*9/16))] rounded-[2rem] sm:rounded-[2.25rem]',
  landscape: 'aspect-video w-[min(56rem,100%)] rounded-2xl sm:rounded-[1.75rem]',
}

export default function ReelsSection() {
  const frameRef = useRef<HTMLDivElement>(null)
  const visible = useInView(frameRef, { threshold: 0.6 })
  const reduceMotion = useReducedMotion()
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)
  // With reduced motion the video waits for a tap instead of autoplaying.
  const [userPlay, setUserPlay] = useState(false)

  const current = reels.items[active]
  const last = reels.items.length - 1
  const hasMany = reels.items.length > 1
  const canPlay = !reduceMotion || userPlay

  return (
    <Section id="reels">
      <SectionTitle id="reels" text={reels.title} />

      <Reveal delay={0.1} className="mt-8 flex justify-center md:mt-12">
        <div
          ref={frameRef}
          className={cx(
            'relative overflow-hidden border-[3px] border-black bg-black shadow-[0_25px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/10',
            frameShape[current.orientation],
          )}
        >
          <Swiper
            modules={[Keyboard, A11y]}
            direction="vertical"
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
            allowTouchMove={hasMany}
            touchReleaseOnEdges
            keyboard={{ enabled: hasMany, onlyInViewport: true }}
            a11y={{ prevSlideMessage: 'Oldingi video', nextSlideMessage: 'Keyingi video' }}
            className="size-full"
          >
            {reels.items.map((reel, i) => (
              <SwiperSlide key={reel.src} className="relative">
                {reel.poster && (
                  <ResponsiveImage
                    image={reel.poster}
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
                {Math.abs(i - active) <= 1 && (
                  <MediaVideo
                    // Without a poster, #t=0.1 makes mobile Safari show the first frame.
                    src={reel.poster ? reel.src : `${reel.src}#t=0.1`}
                    playing={visible && i === active && canPlay}
                    muted={muted}
                    onMutedChange={setMuted}
                    label={reel.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
                {reel.caption && (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/85 via-black/40 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 pr-18 sm:p-6 sm:pr-20">
                      <p className="text-[0.6875rem] font-bold tracking-[0.3em] text-white/70 uppercase">
                        {reel.caption.eyebrow}
                      </p>
                      <p className="mt-2 text-base leading-snug font-bold sm:text-lg">{reel.caption.title}</p>
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay controls sit above the slides */}
          {!canPlay && (
            <button
              type="button"
              onClick={() => setUserPlay(true)}
              aria-label="Videoni ijro etish"
              className="absolute inset-0 z-10 grid place-items-center bg-black/30"
            >
              <span className="bg-brand grid size-16 place-items-center rounded-full text-white">
                <Play className="ml-1 size-7" aria-hidden />
              </span>
            </button>
          )}

          <span className="pointer-events-none absolute top-3 left-3 z-10 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm sm:top-5 sm:left-5">
            {reels.badge}
          </span>

          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Ovozni yoqish' : "Ovozni o'chirish"}
            aria-pressed={!muted}
            className={cx(
              roundButton,
              'absolute z-10',
              // Landscape videos usually carry a logo top-right, so the button moves to the bottom corner.
              current.orientation === 'landscape'
                ? 'right-2 bottom-2 sm:right-4 sm:bottom-4'
                : 'top-2 right-2 sm:top-4 sm:right-4',
            )}
          >
            {muted ? <VolumeX className="size-5" aria-hidden /> : <Volume2 className="size-5" aria-hidden />}
          </button>

          {hasMany && (
            <div className="absolute right-3 bottom-4 z-10 flex flex-col gap-2 sm:right-4 sm:bottom-5">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                disabled={active === 0}
                aria-label="Oldingi video"
                className={roundButton}
              >
                <ChevronUp className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                disabled={active === last}
                aria-label="Keyingi video"
                className={roundButton}
              >
                <ChevronDown className="size-5" aria-hidden />
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
