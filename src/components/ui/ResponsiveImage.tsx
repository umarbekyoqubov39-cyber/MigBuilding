import type { Img } from '../../types/content'

interface Props {
  image: Img
  /** The `sizes` attribute: how wide the image renders at each breakpoint. */
  sizes: string
  className?: string
  /** Load immediately with high priority (above-the-fold images only). */
  priority?: boolean
}

export function ResponsiveImage({ image, sizes, className, priority = false }: Props) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'auto' : 'async'}
      className={className}
    />
  )
}
