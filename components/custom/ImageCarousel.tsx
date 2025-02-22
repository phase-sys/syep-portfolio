// 'use-client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'
// import { useRef } from 'react'

type Project = {
  id: number
  src: string
  alt: string
}

type ImageCarouselProps = {
  projectData: Project[]
}

export default function ImageCarousel({ projectData }: ImageCarouselProps) {
  // const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div className="mt-4 mx-12">
      <Carousel
      // plugins={[plugin.current]}
      // className="w-full max-w-xs"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
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
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}
