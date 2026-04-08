"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Coach {
  sectionTitle: string;
  name: string;
  title: string;
  description: string[];
  image: string;
  quote: {
    number: string;
    heading: string;
    text: string;
  };
  stats: {
    proTitles: string;
    athletesCoached: string;
  };
}

interface CoachProfileProps {
  data: Coach[];
}

const CoachProfile = ({ data }: CoachProfileProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentCoach = data[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-black pb-16 pt-8">
      {/* Container with slanted bounding box */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 lg:h-64 bg-[#111111] z-10" style={{ clipPath: "polygon(0 30%, 100% 0, 0 0)" }}></div>
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 lg:h-64 bg-white z-10" style={{ clipPath: "polygon(0 30%, 100% 0, 100% 30%)" }}></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-screen bg-white relative">
        {/* Top Wedge */}
        {/* Left Side - Coach Image */}
        <div className="relative bg-[#050505] overflow-hidden flex items-end justify-start min-h-[500px] lg:min-h-screen">
          {/* Background Image - with a key to force re-render/animation on change */}
          <div key={currentCoach.name} className="absolute inset-0 pt-10 animate-fade-in-0">
            {/* The image is contained. We use object-cover but it might need to align properly */}
            <Image src={currentCoach.image} alt={currentCoach.name} fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>

          {/* Slanted Name Banner at Bottom Left */}
          <div key={`${currentCoach.name}-banner`} className="relative z-10 bg-[#009FF3] pl-6 md:pl-10 pr-16 md:pr-24 py-8 mb-[3vw] animate-fade-in-1" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}>
            <h3 className="inline-block font-bison font-bold text-white text-5xl md:text-6xl lg:text-[70px] tracking-tight uppercase leading-none mb-1" style={{ transform: "skewX(-18deg)" }}>
              {currentCoach.name}
            </h3>
            <p className="font-inter font-bold text-white text-[10px] md:text-xs tracking-[0.2em] uppercase">{currentCoach.title.replace(/\+/g, "•")}</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative bg-white flex flex-col justify-center py-20 px-8 md:px-16 lg:px-24">
          {/* Large Background Text */}
          <div className="absolute top-10 right-0 pointer-events-none select-none opacity-[0.03] overflow-hidden w-full flex justify-end">
            <span className="font-bison font-bold text-[100px] md:text-[200px] lg:text-[250px] leading-none text-black mr[-5%] tracking-tight">COACHES</span>
          </div>

          <div key={`${currentCoach.name}-content`} className="relative z-10 max-w-xl animate-fade-in-2">
            {/* Quote Number */}
            <div className="mb-6">
              <span className="inline-block font-bison font-bold text-[#009FF3] text-6xl md:text-8xl" style={{ transform: "skewX(-18deg)" }}>
                {currentCoach.quote.number}
              </span>
            </div>

            {/* Quote Heading */}
            <h2 className="font-bison font-black uppercase text-5xl md:text-6xl lg:text-[70px] leading-[0.9] text-black mb-8 tracking-tight">{currentCoach.quote.heading}</h2>

            {/* Quote Text */}
            <div className="mb-10 min-h-[80px]">
              <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed font-medium">&quot;{currentCoach.quote.text}&quot;</p>
            </div>

            {/* Faint Divider */}
            <div className="w-full h-px bg-gray-200 mb-10"></div>

            {/* Stats & Navigation */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 mb-16">
              {/* Stats */}
              <div className="flex gap-16 md:gap-24">
                <div>
                  <div className="font-bison font-bold text-4xl md:text-5xl text-black inline-block" style={{ transform: "skewX(-15deg)" }}>
                    {currentCoach.stats.proTitles}
                  </div>
                  <div className="font-inter font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500 mt-2">PRO TITLES</div>
                </div>
                <div>
                  <div className="font-bison font-bold text-4xl md:text-5xl text-black inline-block" style={{ transform: "skewX(-15deg)" }}>
                    {currentCoach.stats.athletesCoached}
                  </div>
                  <div className="font-inter font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500 mt-2">ATHLETES COACHED</div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button onClick={handlePrev} className="w-14 h-14 flex items-center justify-center bg-black hover:bg-[#009FF3] text-white transition-all group shadow-md hover:shadow-xl" aria-label="Previous Coach">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={handleNext} className="w-14 h-14 flex items-center justify-center bg-black hover:bg-[#009FF3] text-white transition-all group shadow-md hover:shadow-xl" aria-label="Next Coach">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 mt-12 hidden lg:block">
              <p className="font-inter text-sm italic border-l-2 border-[#009FF3] pl-4">{currentCoach.description[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-64 bg- z-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 70%, 0 70%)" }}></div>
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-64 bg-[#0c0c0c] z-20" style={{ clipPath: "polygon(0 100%, 100% 70%, 100% 100%)" }}></div>
    </section>
  );
};

export default CoachProfile;
