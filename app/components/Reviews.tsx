"use client"

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

const Reviews = () => {
  const reviewsData = [
    {
      "heading": "It's Padel is the ultimate padel destination!",
      "message": "The atmosphere is fantastic, and it's the perfect place to meet fellow padel enthusiasts.",
      "name": "Neil. W"
    },
    {
      "heading": "I've found my new favourite hobby thanks to It's Padel!",
      "message": "The club is welcoming, organised, and a great place to play regularly with friends.",
      "name": "Lynsey. S"
    },
    {
      "heading": "It's Padel's facilities are top-notch!",
      "message": "From the clean, modern locker rooms to the spacious courts, everything is designed for a fantastic padel experience.",
      "name": "Josh. E"
    },
    {
      "heading": "The private coaching at It's Padel has really sharpened my game.",
      "message": "The coaches are patient, knowledgeable, and give you personalised guidance every session.",
      "name": "Jess. P"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
  }

  const currentReview = reviewsData[currentIndex]

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-0 relative">
        {/* Left Chevron */}
        <div
          onClick={prevReview}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </div>

        {/* Review Container */}
        <div
          key={currentIndex}
          className="bg-black rounded-[30px] p-16 md:py-24 text-white text-center relative overflow-hidden min-h-[400px] flex flex-col justify-center"
        >
          {/* Stars */}
          <div className="flex justify-center gap-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-9 text-white" />
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-bison text-4xl mb-6 max-w-[450px] mx-auto leading-tight">{currentReview.heading}</h3>

          {/* Message */}
          <p className="font-inter text-white text-base md:text-xl mb-10 max-w-3xl mx-auto">{currentReview.message}</p>

          {/* Name */}
          <p className="font-inter text-base md:text-xl font-medium">{currentReview.name}</p>
        </div>

        {/* Right Chevron */}
        <div
          onClick={nextReview}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  )
}

export default Reviews