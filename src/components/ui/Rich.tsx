import { Fragment } from 'react'

import type { RichText } from '../../types/content'

/** Renders heading text, painting `{ accent }` parts in the gold gradient. */
export function Rich({ text }: { text: RichText }) {
  return text.map((part, i) =>
    typeof part === 'string' ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <span key={i} className="text-gold">
        {part.accent}
      </span>
    ),
  )
}
