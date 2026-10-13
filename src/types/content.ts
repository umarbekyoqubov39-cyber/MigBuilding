import type { LucideIcon } from 'lucide-react'

/** An image source. Use `unsplash()` for remote placeholders or `{ src, alt }` for local files. */
export interface Img {
  src: string
  srcSet?: string
  alt: string
  /** Intrinsic size, used to reserve space and avoid layout shift. */
  width?: number
  height?: number
}

/** Heading text where `{ accent }` parts are rendered in the gold gradient. */
export type RichText = Array<string | { accent: string }>

export interface VideoItem {
  /** Direct link to an .mp4/.webm file. Leave empty until the real video is ready. */
  src: string
  poster: Img
  title: string
}

export interface ProblemItem {
  icon: LucideIcon
  text: string
}

export interface FeatureCard {
  title: string
  description: string
  image: Img
}

export interface ReelItem extends VideoItem {
  eyebrow: string
}

export interface SocialLink {
  label: 'Telegram' | 'Instagram'
  /** Shown next to the network name, e.g. @username. */
  handle: string
  /** Leave empty to hide the link. */
  href: string
}
