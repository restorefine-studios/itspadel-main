"use client"

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-2">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="font-inter text-base text-gray-600 mb-8">Still have questions? All our clubs are here to help</p>
          <Link
            href="/clubs"
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
          >
            VIEW CLUBS
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-0">
          <div>
            <div
              onClick={() => toggleFAQ(0)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">What is Padel?</span>
              {openIndex === 0 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">Padel is a racquet sport that combines elements of tennis, squash, and badminton. It's played in an enclosed court with walls, making it fast-paced and exciting.</p>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleFAQ(1)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">Do I need prior experience to play?</span>
              {openIndex === 1 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">No prior experience is needed! Our coaches provide lessons for all levels, from beginners to advanced players. We welcome everyone to join the fun.</p>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleFAQ(2)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">What equipment do I need?</span>
              {openIndex === 2 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">We provide all equipment at our clubs, including racquets, balls, and shoes. If you'd like to purchase your own, we recommend starting with a basic set.</p>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleFAQ(3)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">How long does a game last?</span>
              {openIndex === 3 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">A standard game lasts about 20-30 minutes, and matches are typically best of 3 sets. It's perfect for a quick session or a longer play.</p>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleFAQ(4)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">Are there coaching sessions available?</span>
              {openIndex === 4 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">Yes! We offer private and group coaching at all our clubs. Our experienced coaches will help you improve your skills and enjoy the game more.</p>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleFAQ(5)}
              className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors border-b border-black/10 cursor-pointer hover:bg-slate-100"
            >
              <span className="font-inter tracking-tighter font-medium text-black">Can I book a court online?</span>
              {openIndex === 5 ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4">
                <p className="font-inter text-black/50 leading-relaxed">Absolutely! Use our Playtomic app or website to book courts, check availability, and manage your reservations easily.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ