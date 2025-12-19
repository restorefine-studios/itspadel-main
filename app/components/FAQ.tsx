"use client"

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import faqData from '../../languages/faq.json'
import Link from 'next/link'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-6xl mb-2">{faqData.headline}</h2>
          <p className="font-inter text-sm md:text-base text-gray-600 mb-8">{faqData.subtext}</p>
          <Link
            href={faqData.ctaLink}
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase text-sm"
          >
            {faqData.ctaText}
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-0">
          {faqData.faqs.map((faq: { question: string; answer: string }, index: number) => (
            <div key={index}>
              <div
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
              >
                <span className="font-inter tracking-tighter font-medium text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4">
                  <p className="font-inter text-black/50 leading-relaxed">{faq.answer}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ