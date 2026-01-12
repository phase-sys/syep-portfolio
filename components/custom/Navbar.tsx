'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      
      if (pathname === '/') {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        router.push(`/${href}`)
      }
    }
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-sm border-b ${scrolled ? 'border-border' : 'border-transparent'}`}>
      <Link
        href={'/'}
        onClick={handleHomeClick}
        className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight hover:text-primary transition-colors"
      >
        Syepselin
      </Link>
      
      <div className="flex items-center gap-6 md:gap-8">
        <Link
          href="#reach-out"
          onClick={(e) => handleLinkClick(e, '#reach-out')}
          className="text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest hidden md:block"
        >
          Contact
        </Link>
        <Link
          href={'/files/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors uppercase tracking-widest border-b border-primary/0 hover:border-primary/100"
        >
          Resume
        </Link>
      </div>
    </nav>
  )
}
