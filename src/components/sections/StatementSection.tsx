import { statement } from '../../data/content'
import { GoldGlow, GoldHairline } from '../ui/Decor'
import { Reveal } from '../ui/Reveal'

export function StatementSection() {
  return (
    <section
      aria-labelledby="statement-title"
      className="relative isolate overflow-hidden bg-ink-950 px-4 pt-20 pb-4 text-center sm:px-6 md:pt-28"
    >
      <GoldHairline />
      <GoldGlow className="top-4 left-1/2 h-[26rem] w-[56rem] max-w-[200vw] -translate-x-1/2" />
      <Reveal>
        <h2
          id="statement-title"
          className="mx-auto max-w-3xl text-[1.625rem] leading-tight font-extrabold tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl"
        >
          {statement.title}
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-xl leading-snug font-extrabold tracking-[-0.02em] text-balance sm:text-2xl md:mt-4 md:text-4xl">
          <span className="text-gold">{statement.subtitle}</span>
        </p>
        <div aria-hidden className="bg-gold mx-auto mt-8 h-[3px] w-20 rounded-full md:mt-10 md:w-24" />
      </Reveal>
    </section>
  )
}
