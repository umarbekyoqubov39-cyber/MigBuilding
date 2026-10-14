import { ArrowRight } from 'lucide-react'

import { strengths } from '../../data/content'
import { useOpenLead } from '../lead/lead-context'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { GoldGlow } from '../ui/Decor'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

export function StrengthsSection() {
  const openLead = useOpenLead()

  return (
    <Section
      id="afzalliklar"
      decor={
        <>
          <GoldGlow className="top-24 -left-64 size-[40rem]" />
          <GoldGlow className="-right-64 bottom-0 size-[40rem]" />
        </>
      }
    >
      <SectionTitle id="afzalliklar" text={strengths.title} className="max-w-[44rem]" />

      <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14">
        {strengths.cards.map((card, i) => (
          <li key={card.title}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <article className="relative h-full rounded-2xl border border-white/8 bg-linear-to-b from-ink-800 to-ink-850 p-4 transition-colors duration-300 hover:border-gold-400/40 sm:p-5">
                <div aria-hidden className="gold-hairline absolute inset-x-8 top-0" />
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-ink-850 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
                  <ResponsiveImage
                    image={card.image}
                    sizes="(min-width: 896px) 400px, (min-width: 640px) 45vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white/95 sm:mt-6 sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55 sm:text-base">{card.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center md:mt-12">
        <button
          type="button"
          onClick={openLead}
          className="bg-gold inline-flex min-h-13 items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-ink-950 transition hover:brightness-110 active:scale-[0.98] sm:px-8 sm:py-4 sm:text-lg"
        >
          {strengths.cta}
          <ArrowRight className="size-5" aria-hidden />
        </button>
      </div>
    </Section>
  )
}
