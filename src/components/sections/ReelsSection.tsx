import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Play, Volume2, VolumeX } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'

import { comingSoon, reels } from '../../data/content'
import { useInView } from '../../hooks/useInView'
import { MediaVideo } from '../ui/MediaVideo'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

const roundButton =
  'grid size-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-35'

export default function ReelsSection() {
  const frameRef = useRef<HTMLDivElement>(null)
  const visible = useInView(frameRef, { threshold: 0.6 })
  const reduceMotion = useReducedMotion()
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)

  const current = reels.items[active]
  const last = reels.items.length - 1

  return (
    <Section id="reels">
      <SectionTitle id="reels" text={reels.title} />

      <Reveal delay={0.1} className="mt-8 flex justify-center md:mt-12">
        <div
          ref={frameRef}
          className="relative aspect-[2/3] w-[min(25rem,100%,calc(78svh*2/3))] overflow-hidden rounded-[2rem] border-[3px] border-black bg-ink-850 shadow-[0_25px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/10 sm:rounded-[2.25rem]"
        >
          <Swiper
            modules={[Keyboard, A11y]}
            direction="vertical"
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
            touchReleaseOnEdges
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ prevSlideMessage: 'Oldingi video', nextSlideMessage: 'Keyingi video' }}
            className="size-full"
          >
            {reels.items.map((reel, i) => (
              <SwiperSlide key={reel.title} className="relative">
                <ResponsiveImage
                  image={reel.poster}
                  sizes="400px"
                  className="absolute inset-0 size-full object-cover"
                />
                {reel.src && Math.abs(i - active) <= 1 && (
                  <MediaVideo
                    src={reel.src}
                    playing={visible && i === active && !reduceMotion}
                    muted={muted}
                    label={reel.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
                {!reel.src && (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="flex flex-col items-center gap-2">
                      <span className="grid size-14 place-items-center rounded-full bg-black/40 backdrop-blur-sm">
                        <Play className="ml-1 size-6" aria-hidden />
                      </span>
                      <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/85">
                        {comingSoon}
                      </span>
                    </span>
                  </div>
                )}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/85 via-black/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 pr-18 sm:p-6 sm:pr-20">
                  <p className="text-[0.6875rem] font-bold tracking-[0.3em] text-white/70 uppercase">{reel.eyebrow}</p>
                  <p className="mt-2 text-base leading-snug font-bold sm:text-lg">{reel.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay controls sit above the slides */}
          <span className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm sm:top-5 sm:left-5">
            {reels.badge}
          </span>

          {current.src && (
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? 'Ovozni yoqish' : "Ovozni o'chirish"}
              aria-pressed={!muted}
              className={`${roundButton} absolute top-3 right-3 z-10 sm:top-4 sm:right-4`}
            >
              {muted ? <VolumeX className="size-5" aria-hidden /> : <Volume2 className="size-5" aria-hidden />}
            </button>
          )}

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
        </div>
      </Reveal>
    </Section>
  )
}
