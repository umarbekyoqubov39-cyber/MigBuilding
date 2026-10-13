import { PhoneCall } from 'lucide-react'

import { lead } from '../../data/content'
import { useOpenLead } from './lead-context'

/** Phones: full-width bar fixed to the bottom. Larger screens: pill in the bottom-right corner. */
export function FloatingCta() {
  const openLead = useOpenLead()
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-linear-to-t from-ink-950/90 via-ink-950/60 to-transparent px-4 pt-6 pb-[max(0.875rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:bg-none sm:p-0">
      <button
        type="button"
        onClick={openLead}
        className="bg-gold cta-glow pointer-events-auto flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-base font-extrabold text-ink-950 transition hover:brightness-110 active:scale-[0.98] sm:min-h-12 sm:w-auto sm:px-6 sm:py-3 sm:font-bold"
      >
        <PhoneCall className="size-5" aria-hidden />
        {lead.floatingCta}
      </button>
    </div>
  )
}
