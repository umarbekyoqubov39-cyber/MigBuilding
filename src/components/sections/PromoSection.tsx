import { promo } from '../../data/content'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { GoldGlow, GoldHairline } from '../ui/Decor'
import { Reveal } from '../ui/Reveal'
import { Rich } from '../ui/Rich'

export function PromoSection() {
  return (
    <section
      aria-labelledby="promo-title"
      className="relative isolate overflow-hidden bg-ink-900 px-4 py-16 text-center sm:px-6 md:py-24"
    >
      <GoldHairline />
      <GoldGlow className="top-8 left-1/2 h-[34rem] w-[60rem] max-w-[200vw] -translate-x-1/2" />
      <Reveal>
        <div className="mx-auto aspect-[16/10] w-full max-w-[40rem] [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent),linear-gradient(to_bottom,black_55%,transparent)]">
          <ResponsiveImage
            image={promo.image}
            sizes="(min-width: 672px) 640px, 100vw"
            className="size-full object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p
          aria-hidden
          className="mx-auto -mt-4 w-fit bg-linear-to-b from-gold-300 to-[#8a6a2c] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:-mt-6 md:text-6xl"
        >
          {promo.highlight}
        </p>
        <h2
          id="promo-title"
          className="mx-auto mt-2 max-w-3xl text-[1.75rem] leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl"
        >
          <Rich text={promo.title} />
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base md:mt-4 md:text-lg">
          {promo.description}
        </p>
      </Reveal>
    </section>
  )
}
