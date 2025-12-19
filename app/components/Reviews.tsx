"use client"

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'
import reviewsData from '../../languages/padelreviews.json'

const Reviews = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
  }

  const currentReview = reviewsData[currentIndex]

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-0 relative">
        {/* Left Chevron */}
        <div
          onClick={prevReview}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-colors animate-fade-in-0"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </div>

        {/* Review Container */}
        <div
          key={currentIndex}
          className="bg-black rounded-[30px] p-16 md:py-24 text-white text-center relative overflow-hidden min-h-[400px] flex flex-col justify-center animate-fade-in-1"
        >
          {/* Stars */}
          <div className="flex justify-center gap-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-6 md:size-9 text-white" />
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-bison text-4xl mb-6 max-w-[450px] mx-auto leading-tight">{currentReview.heading}</h3>

          {/* Message */}
          <p className="font-inter text-white text-sm md:text-xl mb-10 max-w-3xl mx-auto">{currentReview.message}</p>

          {/* Name */}
          <p className="font-inter text-sm  md:text-xl font-medium">{currentReview.name}</p>
        </div>

        {/* Right Chevron */}
        <div
          onClick={nextReview}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 transition-colors animate-fade-in-2"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  )
}

export default Reviews