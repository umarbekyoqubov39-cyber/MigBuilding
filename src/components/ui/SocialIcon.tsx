import { Send } from 'lucide-react'

import type { SocialLink } from '../../types/content'

/** Lucide has no brand icons, so Instagram is drawn here in the same outline style. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

export function SocialIcon({ network, className }: { network: SocialLink['label']; className?: string }) {
  return network === 'Instagram' ? <InstagramIcon className={className} /> : <Send className={className} aria-hidden />
}
