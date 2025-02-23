'use client'

import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hidden sm:block">
      <div className="relative h-full min-h-[60vh] md:min-h-[90vh] flex justify-center items-center transition-all duration-500 ease-in-out sm:-mt-12">
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

        <h1 className="absolute text-white text-lg md:text-4xl lg:text-5xl transition-all duration-500 ease-in-out font-decorative">
          Syepselin
        </h1>

        <div
          onClick={scrollToNextSection}
          className="hidden sm:block absolute bottom-0 cursor-pointer justify-center items-center p-2 md:p-4 bg-black opacity-80 hover:opacity-90 rounded-full animate-bounce transition-all duration-500 ease-in-out"
        >
          <FaArrowDown className="text-white text-lg" />
        </div>
      </div>
    </div>
  )
}
