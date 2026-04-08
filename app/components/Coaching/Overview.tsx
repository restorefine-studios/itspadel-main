import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface OverviewProps {
  data: {
    label: string
    headline: string[]
    paragraph1: string
    paragraph2: string
    cta: string
    badgeTitle: string
    badgeSubtitle: string
    image: string
  }
}

const Overview = ({ data }: OverviewProps) => {
  return (
    <section className="bg-black py-20 px-8 md:px-16 lg:px-32 relative text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Label */}
          <div className="mb-4 animate-fade-in-0">
            <span 
              className="inline-block text-[#009FF3] font-bison font-bold tracking-[0.2em] uppercase text-sm md:text-lg" 
              style={{ transform: 'skewX(-15deg)' }}
            >
              {data.label}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-bison font-bold uppercase leading-[0.85] flex flex-col items-start mb-8 animate-fade-in-1 pl-4">
            {data.headline.map((line, idx) => (
              <span 
                key={idx} 
                className="inline-block text-white text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] tracking-tight"
                style={{ transform: 'skewX(-18deg)' }}
              >
                {line}
              </span>
            ))}
          </h2>

          {/* Cyan Line */}
          <div className="w-32 h-[6px] bg-[#009FF3] mb-10 animate-fade-in-1"></div>

          {/* Paragraph 1 */}
          <p className="font-inter text-gray-200 text-lg md:text-xl font-light tracking-tight max-w-xl mb-6 animate-fade-in-2">
            {data.paragraph1}
          </p>

          {/* Paragraph 2 with border */}
          <div className="border-l-2 border-gray-600 pl-4 py-2 mb-10 animate-fade-in-3">
            <p className="font-inter text-gray-400 text-sm md:text-md font-medium tracking-tight max-w-xl">
              {data.paragraph2}
            </p>
          </div>

          {/* CTA */}
          <div className="animate-fade-in-4 pl-2">
            <Link 
              href="#academy" 
              className="inline-block bg-[#009FF3] text-white px-10 py-4 hover:bg-[#0080cc] transition-colors"
            >
              <span 
                className="inline-block font-bison font-bold tracking-widest text-2xl uppercase" 
                style={{ transform: 'skewX(-15deg)' }}
              >
                {data.cta}
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fade-in-3">
          
          {/* Slanted Image Wrapper */}
          <div 
            className="relative w-full max-w-[500px] h-[500px] md:h-[600px] overflow-hidden rounded-md border border-gray-800"
            style={{ transform: 'skewX(-6deg)' }}
          >
            {/* The image itself rotated/skewed back to counteract the frame slant, so faces look normal */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ transform: 'skewX(6deg) scale(1.15)' }}
            >
              <Image 
                src={data.image} 
                alt="Coaching Overview"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-[-20px] left-[-10px] md:left-[10%] lg:left-[-40px] bg-[#0c0c0c] border-2 border-[#009FF3] p-6 lg:p-8 flex items-center gap-6 shadow-2xl z-20">
            {/* Magnifying Glass Icon (similar to mockup) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#009FF3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            
            <div className="flex flex-col pl-2 border-l border-gray-700">
              <span 
                className="inline-block text-white font-bison font-bold tracking-widest text-2xl uppercase" 
                style={{ transform: 'skewX(-15deg)' }}
              >
                {data.badgeTitle}
              </span>
              <span className="text-gray-500 font-inter font-bold tracking-[0.2em] text-[10px] uppercase mt-1">
                {data.badgeSubtitle}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
