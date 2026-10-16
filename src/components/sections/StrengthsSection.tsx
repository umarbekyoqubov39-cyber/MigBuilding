import { ArrowRight } from 'lucide-react'

import { strengths } from '../../data/content'
import { useOpenLead } from '../lead/lead-context'
import { BrandGlow } from '../ui/Decor'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

/*
 * Layout: the experience card spans two columns, the six cards fill the rest.
 * Phones: 2 columns and tablets: 3 columns, with the experience card full width. Laptops: 4 columns in two rows,
 * sized so the whole section fits a 1366×768 screen.
 */
const cardShell =
  'group relative isolate h-full overflow-hidden rounded-xl border border-white/8 bg-linear-to-b from-ink-800 to-ink-850 transition-colors duration-300 hover:border-brand-400/40'

export function StrengthsSection() {
  const openLead = useOpenLead()
  const { experience } = strengths

  return (
    <Section
      id="afzalliklar"
      spacing="compact"
      decor={
        <>
          <BrandGlow className="top-24 -left-64 size-[40rem]" />
          <BrandGlow className="-right-64 bottom-0 size-[40rem]" />
        </>
      }
    >
      <SectionTitle id="afzalliklar" text={strengths.title} className="max-w-4xl" />

      <ul className="mx-auto mt-7 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:mt-8 lg:grid-cols-4 lg:gap-4">
        <li className="col-span-2 md:col-span-3 lg:col-span-2">
          <Reveal className="h-full">
            <article className={`${cardShell} flex min-h-40 items-end sm:min-h-48 lg:min-h-0`}>
              <ResponsiveImage
                image={experience.image}
                sizes="(min-width: 1152px) 570px, (min-width: 768px) 66vw, 100vw"
                className="absolute inset-0 -z-10 size-full object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Darkens the photo towards the text side so the copy stays readable */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950/95 via-ink-950/75 to-ink-950/10"
              />
              <div aria-hidden className="brand-hairline absolute inset-x-8 top-0" />
              <div className="max-w-sm p-4 sm:p-6">
                <h3 className="flex items-end gap-3">
                  <span className="text-brand text-6xl leading-[0.8] font-black tracking-tight sm:text-7xl">
                    {experience.value}
                  </span>
                  <span className="pb-1 text-lg leading-tight font-extrabold tracking-tight uppercase sm:text-xl">
                    {experience.title}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{experience.description}</p>
              </div>
            </article>
          </Reveal>
        </li>

        {strengths.cards.map((card, i) => (
          <li key={card.title}>
            <Reveal delay={(i % 4) * 0.06} className="h-full">
              <article className={`${cardShell} flex flex-col`}>
                <div aria-hidden className="brand-hairline absolute inset-x-6 top-0 z-10" />
                <div className="aspect-video overflow-hidden bg-ink-850 md:aspect-2/1">
                  <ResponsiveImage
                    image={card.image}
                    sizes="(min-width: 1152px) 276px, (min-width: 1024px) 24vw, (min-width: 768px) 32vw, 50vw"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4 lg:p-3.5">
                  <h3 className="text-sm leading-snug font-bold tracking-tight text-white/95 sm:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm md:text-xs xl:text-sm">
                    {card.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex justify-center lg:mt-6">
        <button
          type="button"
          onClick={openLead}
          className="bg-brand inline-flex min-h-12 items-center gap-2 rounded-full px-7 py-3 text-base font-bold text-white shadow-[0_8px_30px_rgba(47,107,192,0.35)] transition hover:brightness-110 active:scale-[0.98] sm:px-8"
        >
          {strengths.cta}
          <ArrowRight className="size-5" aria-hidden />
        </button>
      </div>
    </Section>
  )
}
