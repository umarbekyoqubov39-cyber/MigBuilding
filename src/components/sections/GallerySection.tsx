import { lazy, Suspense, useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { gallery } from '../../data/content'
import { cx } from '../../lib/cx'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { Section, SectionTitle } from '../ui/Section'

// Swiper is only needed once a photo is opened.
const Lightbox = lazy(() => import('../ui/Lightbox'))

export function GallerySection() {
  const [expanded, setExpanded] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const hasMore = gallery.images.length > gallery.initialCount
  const visible = expanded ? gallery.images : gallery.images.slice(0, gallery.initialCount)
  // Even counts that don't fill rows of three (2, 4) read better as a 2-column grid on desktop.
  const twoColumns = visible.length % 3 !== 0 && visible.length % 2 === 0

  return (
    <Section id="loyihalar" tone="dark" className="pt-16 md:pt-24">
      <SectionTitle id="loyihalar" text={gallery.title} />

      <ul
        id="gallery-grid"
        className={cx(
          'mx-auto mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:mt-12 md:gap-4',
          twoColumns ? 'max-w-4xl' : 'max-w-6xl md:grid-cols-3',
        )}
      >
        {visible.map((image, i) => (
          <li key={image.src}>
            <Reveal delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Rasmni kattalashtirish: ${image.alt}`}
                className={cx(
                  'group block aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl',
                  // Plans have a light background of their own, so a white tile frames them cleanly.
                  image.fit === 'contain' ? 'bg-white p-1.5' : 'bg-ink-850',
                )}
              >
                <ResponsiveImage
                  image={image}
                  sizes={twoColumns ? '(min-width: 896px) 440px, 50vw' : '(min-width: 1152px) 372px, (min-width: 768px) 32vw, 50vw'}
                  className={cx(
                    'size-full transition duration-500 group-hover:scale-105',
                    image.fit === 'contain' ? 'object-contain' : 'object-cover',
                  )}
                />
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-6 flex justify-center md:mt-8">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls="gallery-grid"
            className="inline-flex min-h-11 items-center gap-1.5 px-4 text-base font-bold text-gold-400 transition hover:text-gold-300 md:text-xl"
          >
            {expanded ? gallery.showLess : gallery.showAll}
            <ChevronDown className={cx('size-5 transition', expanded && 'rotate-180')} aria-hidden />
          </button>
        </div>
      )}

      {openIndex !== null && (
        <Suspense fallback={null}>
          <Lightbox images={gallery.images} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
        </Suspense>
      )}
    </Section>
  )
}
