'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export type ImageMeta = {
  id: number
  src: string
  alt: string
}

type ImageCarouselProps = {
  imageMeta: ImageMeta[]
}

export default function ImageCarousel({ imageMeta }: ImageCarouselProps) {
  return (
    <div className="flex justify-center align-middle mt-4 mx-12">
      <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {imageMeta.map((meta) => (
            <CarouselItem
              key={meta.id}
              className="flex justify-center items-center"
            >
              <Image
                src={meta.src}
                alt={meta.alt}
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
