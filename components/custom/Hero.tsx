'use client'

import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative h-full min-h-[50vh] md:min-h-[90vh] flex justify-center items-center md:p-8 transition-all duration-500 ease-in-out md:-mt-12">
      <div className="inset-0">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>

      <h1 className="absolute text-white text-lg md:text-4xl lg:text-6xl transition-all duration-500 ease-in-out font-display">
        Syepselin
      </h1>

      <div
        onClick={scrollToNextSection}
        className="hidden md:block absolute bottom-0 cursor-pointer justify-center items-center p-2 bg-black opacity-80 hover:opacity-90 rounded-full animate-bounce"
      >
        <FaArrowDown className="text-white text-lg" />
      </div>
    </div>
  )
}
