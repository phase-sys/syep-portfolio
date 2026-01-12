'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ICollection, ImageMeta } from '@/lib/data'

interface CollectionProps extends Omit<ICollection, 'collectionData'> {
  collectionData: ImageMeta
}

export default function CollectionCard({
  href,
  title,
  description,
  collectionData,
}: CollectionProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        whileHover={{ y: -5 }}
        className="w-full"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary">
          <Image
            src={collectionData.src}
            alt={collectionData.alt}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        
        <div className="mt-5 px-1">
          <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground font-sans mt-2 line-clamp-2 leading-relaxed max-w-md">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-foreground/60 group-hover:text-primary transition-colors">
            <span>View Collection</span>
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
