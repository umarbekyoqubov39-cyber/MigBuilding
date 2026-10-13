import type { Img } from '../types/content'

const DEFAULT_WIDTHS = [480, 768, 1080, 1440]

/**
 * Builds a responsive, cropped image from an Unsplash photo id
 * (the part after `photo-` in an images.unsplash.com URL).
 */
export function unsplash(
  id: string,
  alt: string,
  { ratio = 4 / 3, widths = DEFAULT_WIDTHS }: { ratio?: number; widths?: number[] } = {},
): Img {
  const url = (w: number) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}&h=${Math.round(w / ratio)}`

  const largest = widths[widths.length - 1]
  return {
    src: url(widths[Math.min(1, widths.length - 1)]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(', '),
    alt,
    width: largest,
    height: Math.round(largest / ratio),
  }
}
