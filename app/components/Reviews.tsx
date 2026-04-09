"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import reviewsData from "../../languages/padelreviews.json";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  const review = reviewsData[currentIndex];
  const num = String(currentIndex + 1).padStart(2, "0");
  const total = String(reviewsData.length).padStart(2, "0");

  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Subtle right-side gradient accent */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#009FF3]/5 to-transparent pointer-events-none" />
      {/* Left edge line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#009FF3]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="w-8 h-px bg-[#009FF3]" />
          <p className="font-inter font-bold text-[#009FF3] tracking-[0.3em] text-[10px] uppercase" style={{ transform: "skewX(-15deg)" }}>
            Member Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Left — quote, reviewer identity, controls */}
          <div className="lg:col-span-3 flex lg:flex-col items-end lg:items-start justify-between lg:justify-start gap-8 lg:gap-10">
            {/* Giant quote mark */}
            <span className="font-bison text-[100px] md:text-[140px] leading-none text-[#009FF3] select-none opacity-50" style={{ transform: "skewX(-15deg)" }}>
              &ldquo;
            </span>

            {/* Reviewer identity — replaces photo */}
            <div key={currentIndex} className="flex flex-col animate-fade-in-1">
              <p className="font-bison text-white text-5xl tracking-wide uppercase leading-tight">{review.name}</p>
              <span className="font-inter text-white/30 text-[10px] tracking-widest uppercase mt-1">Member</span>
            </div>

            {/* Counter */}
            <div className="flex items-baseline gap-2">
              <span className="font-bison text-white text-5xl leading-none">{num}</span>
              <span className="font-inter text-white/25 text-base">/</span>
              <span className="font-inter text-white/25 text-base">{total}</span>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-10 h-10 border border-white/15 hover:border-[#009FF3] text-white/40 hover:text-[#009FF3] transition-all duration-300 flex items-center justify-center bg-transparent rounded-none p-0"
                style={{ transform: "skewX(-10deg)" }}
              >
                <ChevronLeftIcon className="w-4 h-4" style={{ transform: "skewX(10deg)" }} />
              </button>
              <button onClick={next} aria-label="Next review" className="w-10 h-10 border border-white/15 hover:border-[#009FF3] text-white/40 hover:text-[#009FF3] transition-all duration-300 flex items-center justify-center bg-transparent rounded-none p-0" style={{ transform: "skewX(-10deg)" }}>
                <ChevronRightIcon className="w-4 h-4" style={{ transform: "skewX(10deg)" }} />
              </button>
            </div>
          </div>

          {/* Right — review content */}
          <div className="lg:col-span-9 lg:pl-16 lg:border-l border-white/10 min-h-[320px] flex flex-col justify-center">
            <div key={currentIndex} className="animate-fade-in-1">
              {/* Stars as sporty dashes */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-[3px] bg-[#009FF3]" style={{ transform: "skewX(-15deg)" }} />
                ))}
              </div>

              {/* Heading */}
              <h3 className="font-bison font-black text-white text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.85] tracking-tight uppercase mb-8" style={{ transform: "skewX(-5deg)" }}>
                {review.heading}
              </h3>

              {/* Message */}
              <p className="font-inter text-white/50 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-[#009FF3]/40 pl-6">{review.message}</p>
            </div>
          </div>
        </div>

        {/* Progress bars */}
        <div className="flex gap-2 mt-16">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-px flex-1 transition-all duration-500 bg-transparent border-0 p-0 rounded-none cursor-pointer ${i === currentIndex ? "bg-[#009FF3]" : "bg-white/15 hover:bg-white/30"}`}
              style={{ height: "1px", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
