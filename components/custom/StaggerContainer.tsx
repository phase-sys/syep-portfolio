'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {/* We need to wrap children in motion divs if they aren't motions themselves, or rely on children having variants with same names.
          However, usually specific children need the item variant. 
          To make this generic, we can't easily force variants on children unless we map them.
          But CollectionCard is a separate component.
          Let's just expose a wrapper component or ask the user to wrap items?
          
          Actually, let's just make this a wrapper and assume children handle themselves or we use a MotionDiv wrapper for each child in the parent.
      */}
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
      }
    
      return (
        <motion.div variants={item} className={className}>
          {children}
        </motion.div>
      )
}
