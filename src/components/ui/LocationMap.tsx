import { ExternalLink, MapPin } from 'lucide-react'

import { company, mapEmbedUrl } from '../../data/company'
import { cx } from '../../lib/cx'

/** Embedded Google Map with the office pin and a link to open it in the maps app. */
export function LocationMap({ className }: { className?: string }) {
  const { location } = company
  return (
    <div className={cx('flex flex-col bg-ink-900', className)}>
      <iframe
        title={`${company.name} manzili xaritada`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="min-h-64 w-full flex-1 border-0"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-white/85">
          <MapPin className="size-4 shrink-0 text-gold-400" aria-hidden />
          {location.label}
        </p>
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-gold-400/40 px-4 text-sm font-semibold text-gold-400 transition hover:bg-gold-400/10"
        >
          Xaritada ochish
          <ExternalLink className="size-4" aria-hidden />
        </a>
      </div>
    </div>
  )
}
