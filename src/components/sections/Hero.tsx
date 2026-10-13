import { ChevronDown, MapPin } from 'lucide-react'
import { m } from 'motion/react'

import { company } from '../../data/company'
import { hero } from '../../data/content'
import { ResponsiveImage } from '../ui/ResponsiveImage'

const lineColors = ['text-gold', 'text-white', 'text-gold'] as const

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[max(600px,100svh)] flex-col items-center overflow-hidden bg-ink-950 px-4 text-center sm:px-6">
      <ResponsiveImage
        image={hero.image}
        sizes="100vw"
        priority
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Darkening layers keep the headline readable on any photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-transparent via-40% to-ink-950"
      />

      <img
        src={company.logo.src}
        alt={company.logo.alt}
        width={72}
        height={72}
        fetchPriority="high"
        className="mt-5 size-16 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-2 ring-white/15 sm:mt-7 sm:size-20"
      />

      <p className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-gold-400/35 bg-black/40 px-4 py-2.5 text-[0.6875rem] font-semibold tracking-wide text-gold-400 uppercase backdrop-blur-sm sm:mt-5 sm:px-6 sm:py-3 sm:text-sm">
        {hero.badge}
        <MapPin className="size-4 shrink-0" aria-hidden />
      </p>

      <div className="flex flex-1 flex-col items-center justify-center py-12">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[clamp(2rem,10vw,5.25rem)] leading-[0.98] font-black tracking-[-0.045em]"
        >
          <span className="sr-only">{company.name}: </span>
          {hero.title.map((line, i) => (
            <span key={line} className="block">
              <span className={lineColors[i]}>{line}</span>
            </span>
          ))}
        </m.h1>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-sm text-white/70 sm:mt-8 sm:text-base"
        >
          {hero.subtitle}
        </m.p>
      </div>

      <a
        href="#video"
        aria-label="Keyingi bo'limga o'tish"
        className="mb-4 hidden size-11 place-items-center rounded-full text-white/70 sm:grid transition hover:text-gold-400 motion-safe:animate-bounce"
      >
        <ChevronDown className="size-6" aria-hidden />
      </a>
    </header>
  )
}
