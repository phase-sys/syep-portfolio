'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { ImageMeta } from '@/lib/data'

type ImageCarouselProps = {
  imageMeta: ImageMeta[]
}

export default function ImageCarousel({ imageMeta }: ImageCarouselProps) {
  return (
    <div className="flex justify-center align-middle mt-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="shadow-2xl rounded-2xl"
      >
        <CarouselContent>
          {imageMeta.map((meta) => (
            <CarouselItem key={meta.id}>
              <Image
                src={meta.src}
                alt={meta.alt}
                width={400}
                height={350}
                className="rounded-xl w-full h-full object-scale-down bg-white"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
