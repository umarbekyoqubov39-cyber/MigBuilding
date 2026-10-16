import type { LucideIcon } from 'lucide-react'

/** An image source. Use `unsplash()` for remote placeholders or `{ src, alt }` for local files. */
export interface Img {
  src: string
  srcSet?: string
  alt: string
  /** Intrinsic size, used to reserve space and avoid layout shift. */
  width?: number
  height?: number
  /**
   * How the image fills a fixed-shape box such as a gallery tile. 'contain' shows it whole
   * (for floor plans and other images with text near the edges); defaults to 'cover'.
   */
  fit?: 'cover' | 'contain'
}

/** Heading text where `{ accent }` parts are rendered in the brand gradient. */
export type RichText = Array<string | { accent: string }>

export interface VideoItem {
  /** Direct link to an .mp4/.webm file. Leave empty until the real video is ready. */
  src: string
  /** Optional lower-resolution copy served to phones instead of `src`. */
  srcSmall?: string
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

export interface ReelItem {
  /** Video file, e.g. '/videos/name.mp4' for a file in public/videos. */
  src: string
  /** Describes the video for screen readers. */
  title: string
  /** Landscape videos get a wide frame; portrait ones the phone-shaped frame. */
  orientation: 'portrait' | 'landscape'
  /** Optional cover image shown until the video starts. */
  poster?: Img
  /** Optional text drawn over the video. Leave out when the video has its own captions. */
  caption?: { eyebrow: string; title: string }
}

export interface SocialLink {
  label: 'Telegram' | 'Instagram'
  /** Shown next to the network name, e.g. @username. */
  handle: string
  /** Leave empty to hide the link. */
  href: string
}
