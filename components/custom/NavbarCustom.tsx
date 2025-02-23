'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Navbar from '@/components/custom/Navbar'

export default function NavbarCustom() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={clsx(
        'sticky top-0 transition-all duration-300 ease-in-out z-50',
        {
          'sm:transform sm:-translate-y-full sm:opacity-0': !isScrolled, // Navbar hidden
          'sm:transform sm:translate-y-0 sm:opacity-100': isScrolled, // Navbar visible
        }
      )}
    >
      <Navbar />
    </div>
  )
}
