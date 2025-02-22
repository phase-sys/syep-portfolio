'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

type Project = {
  id: number
  src: string
  alt: string
}

type ImageCarouselProps = {
  projectData: Project[]
}

export default function ImageCarousel({ projectData }: ImageCarouselProps) {
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
          {projectData.map((project) => (
            <CarouselItem
              key={project.id}
              className="flex justify-center items-center"
            >
              <Image
                src={project.src}
                alt={project.alt}
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
