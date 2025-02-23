'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { ImageMeta } from '@/lib/data'
import { useState } from 'react'

type ImageCarouselProps = {
  imageMeta: ImageMeta[]
}

export default function ImageCarousel({ imageMeta }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<ImageMeta | null>(null)

  return (
    <div className="flex justify-center align-middle mt-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="shadow-2xl rounded-2xl"
      >
        <CarouselContent>
          {imageMeta.map((meta) => (
            <CarouselItem key={meta.id}>
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={meta.src}
                    alt={meta.alt}
                    width={300}
                    height={250}
                    className="rounded-2xl w-full h-full object-scale-down bg-white transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(meta)}
                  />
                </DialogTrigger>
                {selectedImage && selectedImage.id === meta.id && (
                  <DialogContent className="max-w-md flex flex-col items-center">
                    <DialogHeader className="flex items-center">
                      <DialogTitle>{selectedImage.alt}</DialogTitle>
                      <DialogDescription>
                        Click outside to close the preview.
                      </DialogDescription>
                    </DialogHeader>
                    <div
                      onClick={() => window.open(selectedImage.src, '_blank')}
                      className="relative cursor-pointer group"
                    >
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        width={400}
                        height={350}
                        className="rounded-xl object-scale-down transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <span className="text-white text-lg font-semibold">
                          Open in New Tab
                        </span>
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
