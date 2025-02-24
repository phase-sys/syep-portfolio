import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Oi } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

const oi = Oi({
  variable: '--font-oi',
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Syepselin',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${oi.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
