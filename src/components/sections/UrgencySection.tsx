import { Timer } from 'lucide-react'

import { urgency } from '../../data/content'
import { useOpenLead } from '../lead/lead-context'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

export function UrgencySection() {
  const openLead = useOpenLead()

  return (
    <Section id="imkoniyat" tone="dark" className="text-center">
      <SectionTitle id="imkoniyat" text={urgency.title} className="max-w-[44rem]" />

      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base md:text-lg">{urgency.description}</p>
        <button
          type="button"
          onClick={openLead}
          className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-ink-850 px-6 py-4 transition hover:border-gold-400/40 active:scale-[0.98] sm:px-8 sm:py-5"
        >
          <Timer className="size-6 shrink-0 text-gold-400 sm:size-7" aria-hidden />
          <span className="text-gold text-lg font-extrabold tracking-tight sm:text-2xl md:text-3xl">{urgency.cta}</span>
        </button>
      </Reveal>
    </Section>
  )
}
