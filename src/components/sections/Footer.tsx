import { MapPin, Phone } from 'lucide-react'

import { company } from '../../data/company'
import { GoldGlow, GoldHairline } from '../ui/Decor'
import { SocialIcon } from '../ui/SocialIcon'

const YEAR = new Date().getFullYear()

const linkClass = 'flex min-h-11 items-center gap-3 transition hover:text-gold-400'

export function Footer() {
  const socials = company.socials.filter((s) => s.href)

  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 px-4 pt-14 pb-28 sm:px-6 md:pb-16">
      <GoldHairline className="max-w-none" />
      <GoldGlow className="-top-48 -left-40 size-[30rem]" />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-3 text-2xl font-extrabold tracking-tight">
            <img
              src={company.logo.src}
              alt=""
              width={56}
              height={56}
              loading="lazy"
              className="size-14 shrink-0 rounded-full ring-2 ring-gold-400/40"
            />
            {company.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/55">{company.description}</p>
        </div>

        <address className="space-y-1 text-sm text-white/70 not-italic">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Aloqa</p>
          <a href={company.phone.href} className={linkClass}>
            <Phone className="size-4 shrink-0 text-gold-400" aria-hidden />
            {company.phone.display}
          </a>
          <a href={company.location.mapUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <MapPin className="size-4 shrink-0 text-gold-400" aria-hidden />
            {company.location.label}
            <span className="sr-only"> (xaritada ochiladi)</span>
          </a>
        </address>

        {socials.length > 0 && (
          <nav aria-label="Ijtimoiy tarmoqlar" className="text-sm text-white/70">
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Ijtimoiy tarmoqlar</p>
            <ul className="space-y-1">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <SocialIcon network={s.label} className="size-4 shrink-0 text-gold-400" />
                    <span>
                      {s.label} <span className="text-white/45">{s.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-xs text-white/40">
        © {YEAR} {company.name}. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  )
}
