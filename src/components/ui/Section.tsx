import type { ReactNode } from 'react'

import { cx } from '../../lib/cx'
import type { RichText } from '../../types/content'
import { BrandHairline } from './Decor'
import { Reveal } from './Reveal'
import { Rich } from './Rich'

interface SectionProps {
  id: string
  /** Background band: the design alternates between two near-black tones. */
  tone?: 'light' | 'dark'
  className?: string
  /** Brand background accents (BrandGlow, Blueprint) drawn behind the content. */
  decor?: ReactNode
  /** Thin brand line along the top edge. */
  divider?: boolean
  /** 'compact' uses less vertical padding, for sections meant to fit on one screen. */
  spacing?: 'default' | 'compact'
  children: ReactNode
}

export function Section({
  id,
  tone = 'light',
  className,
  decor,
  divider = true,
  spacing = 'default',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cx(
        'relative isolate scroll-mt-4 overflow-hidden px-4 sm:px-6',
        spacing === 'compact' ? 'py-12' : 'py-20 md:py-28',
        tone === 'light' ? 'bg-ink-900' : 'bg-ink-950',
        className,
      )}
    >
      {divider && <BrandHairline />}
      {decor}
      {children}
    </section>
  )
}

interface TitleProps {
  id: string
  text: RichText
  className?: string
}

export function SectionTitle({ id, text, className }: TitleProps) {
  return (
    <Reveal>
      <h2
        id={`${id}-title`}
        className={cx(
          'mx-auto text-center text-[1.75rem] leading-[1.12] font-extrabold tracking-[-0.03em] text-balance text-white sm:text-4xl md:text-5xl',
          className,
        )}
      >
        <Rich text={text} />
      </h2>
    </Reveal>
  )
}
