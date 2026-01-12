
'use client'

import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('creative-work')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative bg-background px-6">
      <motion.div
         className="flex flex-col items-center justify-center text-center z-10"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-sans text-xs md:text-sm text-primary font-bold tracking-[0.3em] uppercase mb-4">
          Portfolio
        </span>
        <h1 
          className="font-serif text-7xl sm:text-8xl md:text-9xl tracking-tighter text-foreground leading-none"
        >
          Syepselin
        </h1>
        <div className="w-12 h-1 bg-primary mt-8 mb-8" />
        <p className="font-sans text-sm md:text-base text-muted-foreground tracking-widest uppercase max-w-md leading-relaxed">
          Art Direction <span className="text-primary/40 mx-2">•</span> Visual Design <span className="text-primary/40 mx-2">•</span> Curation
        </p>
      </motion.div>

      <motion.div
        onClick={scrollToNextSection}
        className="absolute bottom-12 cursor-pointer flex flex-col items-center gap-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
          Scroll
        </span>
        <FaArrowDown className="text-muted-foreground text-xs group-hover:text-primary transition-colors" />
      </motion.div>
    </div>
  )
}
