'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-20 mt-32 w-full px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start max-w-4xl"
      >
         {subtitle && (
          <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            {subtitle}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tighter leading-tight">
          {title}
        </h2>
        
        <div className="w-24 h-px bg-foreground mt-8 mb-8" />
      </motion.div>
    </div>
  )
}
