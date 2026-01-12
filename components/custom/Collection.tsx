'use client'

import { ICollection } from '@/lib/data'
import ImageCarousel from '@/components/custom/ImageCarousel'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type CollectionProps = {
  collection: ICollection
}

export default function Collection({ collection }: CollectionProps) {
  return (
    <div className="pt-8 pb-12 min-h-screen bg-background text-foreground">
      <div className="mb-12 px-6 md:px-12">
        <Link 
          href={collection.href === '/nstp' ? '/#featured-projects' : '/#creative-work'} 
          className="inline-flex items-center gap-2 group text-xs font-sans font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Collections</span>
        </Link>
      </div>
      
      {/* Title & Description Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 mb-24"
      >
        <span className="text-[10px] md:text-xsd font-bold tracking-[0.3em] text-primary uppercase mb-6 block">
          Project Detail
        </span>
        <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl mb-8 text-foreground leading-none tracking-tight">
          {collection.title}
        </h1>
        <div className="w-12 h-px bg-foreground mb-12" />
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {collection.description}
        </p>
      </motion.div>

      {/* Full Width Image Section */}
      <div className="w-full max-w-[100vw] px-0 md:px-4 mb-12">
           <ImageCarousel imageMeta={collection.collectionData} />
      </div>
    </div>
  )
}
