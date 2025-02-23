'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import clsx from 'clsx'

export default function Navbar() {
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  return (
    <div
      className={clsx(
        'sticky top-0 bg-white shadow-md py-4 z-10 transition-all duration-300 ease-in-out',
        {
          'md:transform md:-translate-y-full md:opacity-0': !isScrolled, // Navbar hidden
          'md:transform md:translate-y-0 md:opacity-100': isScrolled, // Navbar visible
        }
      )}
    >
      <div className="flex justify-between items-center mx-12 md:mx-36 lg:mx-72">
        <Link
          href={'/'}
          onClick={handleLogoClick}
          className="text-pink-500 text-xl md:text-2xl font-bold font-display hover:text-opacity-60  transition-all duration-300 ease-in-out"
        >
          Syepselin
        </Link>
        <Link
          href={'/files/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-pink-500 hover:bg-opacity-60 font-bold text-sm font-serif px-4 py-2 rounded-full"
        >
          <FileText size={18} />
        </Link>
      </div>
    </div>
  )
}
