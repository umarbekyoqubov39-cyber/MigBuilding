import { useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'

import type { Img } from '../../types/content'
import { Modal } from './Modal'
import { ResponsiveImage } from './ResponsiveImage'

interface Props {
  images: Img[]
  startIndex: number
  onClose: () => void
}

const navButton =
  'absolute top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/85 disabled:opacity-30 sm:size-12'

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const titleId = useId()
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [index, setIndex] = useState(startIndex)

  return (
    <Modal open onClose={onClose} labelledBy={titleId} className="w-[min(72rem,calc(100%-1rem))]">
      <h2 id={titleId} className="sr-only">
        Loyihalar rasmlari
      </h2>
      <div className="relative pt-14">
        <Swiper
          modules={[Keyboard, A11y]}
          initialSlide={startIndex}
          onSwiper={setSwiper}
          onSlideChange={(s) => setIndex(s.activeIndex)}
          keyboard={{ enabled: true }}
          spaceBetween={16}
          a11y={{ prevSlideMessage: 'Oldingi rasm', nextSlideMessage: 'Keyingi rasm' }}
          className="overflow-hidden rounded-xl"
        >
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <ResponsiveImage
                image={image}
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="mx-auto h-auto max-h-[78svh] w-auto max-w-full rounded-xl bg-ink-850 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          disabled={index === 0}
          aria-label="Oldingi rasm"
          className={`${navButton} left-2 mt-7`}
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          disabled={index === images.length - 1}
          aria-label="Keyingi rasm"
          className={`${navButton} right-2 mt-7`}
        >
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-white/70">
        {images[index]?.alt} · {index + 1} / {images.length}
      </p>
    </Modal>
  )
}
