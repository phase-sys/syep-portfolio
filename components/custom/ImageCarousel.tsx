'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Search } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ImageMeta } from '@/lib/data'

type ImageCarouselProps = {
  imageMeta: ImageMeta[]
}

export default function ImageCarousel({ imageMeta }: ImageCarouselProps) {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {imageMeta.map((meta) => (
            <CarouselItem key={meta.id} className="pl-0">
              <Dialog>
                <DialogTrigger asChild>


                  <div className="relative group cursor-pointer w-full h-[60vh] md:h-[85vh] bg-secondary flex items-center justify-center">
                    <Image
                      src={meta.src}
                      alt={meta.alt}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-[1.01]"
                      priority={meta.id === 1}
                    />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-foreground px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <Search size={14} />
                          Examine
                        </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-background/95 border-none p-0">
                  <DialogTitle className="sr-only">Image Detail</DialogTitle>
                  <div
                    onClick={() => window.open(meta.src, '_blank')}
                    className="relative cursor-pointer group w-full h-full flex items-center justify-center p-4 md:p-12"
                  >
                    <Image
                      src={meta.src}
                      alt={meta.alt}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl hover:bg-primary/90 hover:scale-105 transition-all flex items-center gap-2">
                        <ExternalLink size={14} />
                        Open High-Res
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="left-8 h-12 w-12 rounded-full border border-foreground/10 bg-background/50 hover:bg-foreground hover:text-background text-foreground transition-all backdrop-blur-sm" />
            <CarouselNext className="right-8 h-12 w-12 rounded-full border border-foreground/10 bg-background/50 hover:bg-foreground hover:text-background text-foreground transition-all backdrop-blur-sm" />
        </div>
      </Carousel>
    </motion.div>
  )
}
