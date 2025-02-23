'use client'

import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white shadow-md py-4 z-50">
      <div className="flex justify-between items-center mx-12 md:mx-36 lg:mx-48 xl:mx-72">
        <Link
          href={'/'}
          className="text-pink-500 hover:text-pink-700 text-lg md:text-xl font-decorative transition-all duration-300 ease-in-out"
        >
          Syepselin
        </Link>
        <Link
          href={'/files/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-pink-500 hover:bg-pink-700 font-bold text-sm font-serif px-4 py-2 rounded-full"
        >
          <FileText size={18} />
        </Link>
      </div>
    </div>
  )
}
