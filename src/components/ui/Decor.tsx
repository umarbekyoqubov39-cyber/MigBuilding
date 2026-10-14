import { cx } from '../../lib/cx'

/*
 * Decorative gold layers for section backgrounds. Place them inside a `relative isolate
 * overflow-hidden` parent: they sit behind the content and are clipped to it, so they never
 * cause horizontal scrolling.
 */

/** A soft pool of golden light. Pass position and size classes, e.g. "-top-40 left-1/2 size-[40rem]". */
export function GoldGlow({ className }: { className?: string }) {
  return <div aria-hidden className={cx('gold-glow pointer-events-none absolute -z-10 rounded-full', className)} />
}

/** A faint gold construction grid, strongest in the middle. */
export function Blueprint({ className }: { className?: string }) {
  return <div aria-hidden className={cx('blueprint pointer-events-none absolute inset-0 -z-10', className)} />
}

/** A thin gold line along the top edge, separating this band from the one above. */
export function GoldHairline({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cx('gold-hairline pointer-events-none absolute inset-x-0 top-0 mx-auto max-w-5xl', className)}
    />
  )
}
