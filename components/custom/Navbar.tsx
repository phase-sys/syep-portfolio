'use client'

import { useState, useEffect } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [{ href: '/resume', icon: <FileText size={18} /> }]

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

  return (
    <div
      className={clsx(
        'sticky top-0 bg-white shadow-md flex justify-between items-center px-12 py-4 z-50 md:z-10 transition-all duration-300 ease-in-out ',
        {
          'md:transform md:-translate-y-full md:opacity-0': !isScrolled, // Navbar hidden
          'md:transform md:translate-y-0 md:opacity-100': isScrolled, // Navbar visible
        }
      )}
    >
      <Link
        className="text-pink-500 text-xl md:text-2xl font-bold font-display hover:text-pink-700 transition-all duration-300 ease-in-out"
        href={'/'}
      >
        Syepselin
        {/* <span className="block md:hidden">Syepselin</span>
        <span className="hidden md:block">Chefeceline Anne Dimaano</span> */}
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-2">
            {navLinks.map(({ href, icon }) => (
              <Link
                key={href}
                href={href === '/resume' ? '/files/resume.pdf' : href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="text-white bg-pink-500 hover:bg-opacity-60 font-bold text-sm  font-serif px-4 py-2 rounded-full">
                  {icon}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
