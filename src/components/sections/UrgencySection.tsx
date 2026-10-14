import { Timer } from 'lucide-react'

import { urgency } from '../../data/content'
import { useOpenLead } from '../lead/lead-context'
import { Blueprint, GoldGlow } from '../ui/Decor'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

export function UrgencySection() {
  const openLead = useOpenLead()

  return (
    <Section
      id="imkoniyat"
      tone="dark"
      className="text-center"
      decor={
        <>
          <Blueprint />
          <GoldGlow className="top-1/2 left-1/2 h-[30rem] w-[52rem] max-w-[200vw] -translate-x-1/2 -translate-y-1/2" />
        </>
      }
    >
      <SectionTitle id="imkoniyat" text={urgency.title} className="max-w-[44rem]" />

      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base md:text-lg">{urgency.description}</p>
        <button
          type="button"
          onClick={openLead}
          className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-2xl border border-gold-400/30 bg-ink-850 px-6 py-4 shadow-[0_0_40px_rgba(235,176,42,0.15)] transition hover:border-gold-400/60 hover:shadow-[0_0_50px_rgba(235,176,42,0.25)] active:scale-[0.98] sm:px-8 sm:py-5"
        >
          <Timer className="size-6 shrink-0 text-gold-400 sm:size-7" aria-hidden />
          <span className="text-gold text-lg font-extrabold tracking-tight sm:text-2xl md:text-3xl">{urgency.cta}</span>
        </button>
      </Reveal>
    </Section>
  )
}
