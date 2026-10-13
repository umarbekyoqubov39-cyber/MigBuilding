import type { ReactNode } from 'react'
import { m } from 'motion/react'

interface Props {
  children: ReactNode
  className?: string
  /** Seconds to wait before animating, for staggering siblings. */
  delay?: number
}

/** Fades content up once when it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}
