import { problems } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

export function ProblemSection() {
  return (
    <Section id="muammo" tone="dark">
      <SectionTitle id="muammo" text={problems.title} className="max-w-[36rem]" />

      <ul className="mx-auto mt-8 max-w-3xl space-y-3 md:mt-10 md:space-y-4">
        {problems.items.map(({ icon: Icon, text }, i) => (
          <li key={text}>
            <Reveal delay={i * 0.08}>
              <div className="flex min-h-14 items-center gap-3 rounded-xl border border-white/8 bg-ink-850 px-4 py-3.5 sm:px-6 sm:py-4">
                <Icon className="size-5 shrink-0 text-red-500" aria-hidden />
                <span className="font-semibold text-white/95 sm:text-lg">{text}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="text-gold mx-auto mt-8 w-fit text-center text-base font-semibold sm:text-xl md:mt-12 md:text-2xl">
          {problems.conclusion}
        </p>
      </Reveal>
    </Section>
  )
}
