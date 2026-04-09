"use client"

import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import faqData from '../../languages/faq.json'
import Link from 'next/link'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">

      {/* Right edge line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#009FF3]/40 to-transparent" />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="w-8 h-px bg-[#009FF3]" />
          <p
            className="font-inter font-bold text-[#009FF3] tracking-[0.3em] text-[10px] uppercase"
            style={{ transform: 'skewX(-15deg)' }}
          >
            FAQ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — headline + CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <h2
                className="font-bison font-black text-white text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter uppercase mb-6"
                style={{ transform: 'skewX(-5deg)' }}
              >
                QUESTIONS{'\n'}ANSWERED
              </h2>
              <p className="font-inter text-white/40 text-sm md:text-base leading-relaxed border-l-2 border-[#009FF3]/40 pl-4">
                {faqData.subtext}
              </p>
            </div>

            <Link href={faqData.ctaLink} className="w-fit">
              <div
                className="bg-[#009FF3] text-white px-8 py-3 font-bison text-xl tracking-widest uppercase hover:bg-[#0080cc] transition-colors"
                style={{ transform: 'skewX(-10deg)' }}
              >
                <span style={{ transform: 'skewX(10deg)', display: 'block' }}>{faqData.ctaText}</span>
              </div>
            </Link>
          </div>

          {/* Right — FAQ accordion */}
          <div className="lg:col-span-8">
            {faqData.faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const num = String(index + 1).padStart(2, '0')
              return (
                <div
                  key={index}
                  className={`border-b transition-colors duration-300 ${isOpen ? 'border-[#009FF3]/40' : 'border-white/10'}`}
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 text-left flex justify-between items-center gap-6 bg-transparent border-0 rounded-none p-0 cursor-pointer group"
                  >
                    <div className="flex items-center gap-5">
                      <span className={`font-bison text-sm leading-none transition-colors duration-300 flex-shrink-0 ${isOpen ? 'text-[#009FF3]' : 'text-white/20'}`}>
                        {num}
                      </span>
                      <span className={`font-inter font-medium text-base md:text-lg leading-snug transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[#009FF3] text-[#009FF3]' : 'border-white/15 text-white/30 group-hover:border-white/30'}`}
                      style={{ transform: 'skewX(-10deg)' }}
                    >
                      {isOpen
                        ? <MinusIcon className="w-3.5 h-3.5" style={{ transform: 'skewX(10deg)' }} />
                        : <PlusIcon className="w-3.5 h-3.5" style={{ transform: 'skewX(10deg)' }} />
                      }
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-inter text-white/40 text-sm md:text-base leading-relaxed pb-6 pl-9">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ
