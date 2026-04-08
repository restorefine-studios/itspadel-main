"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import coachingData from "../../../languages/padelcoaching.json";

const Clubs = () => {
  const clubs = coachingData.clubs || [];

  if (clubs.length === 0) return null;

  return (
    <section className="bg-[#0c0c0c] w-full pb-0 relative border-t border-gray-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start pt-24 px-8 md:px-16 lg:px-24 mb-16 max-w-[1600px] mx-auto gap-8">
        
        {/* Left: THE ARENAS Title Block */}
        <div className="flex flex-col">
          <h2 
            className="font-bison font-black text-white text-7xl md:text-8xl lg:text-[110px] italic leading-[0.85] tracking-tight uppercase" 
            style={{ transform: 'skewX(-15deg)' }}
          >
            THE
          </h2>
          <h2 
            className="font-bison font-black text-[#2e2e2e] text-[80px] md:text-[100px] lg:text-[140px] italic leading-[0.75] tracking-tighter uppercase mt-[-5px] md:mt-[-10px]" 
            style={{ transform: 'skewX(-15deg)' }}
          >
            ARENAS
          </h2>
        </div>
        
        {/* Right: Subtitle Text */}
        <div className="text-right mt-[5vw] hidden md:block">
          <p className="font-inter text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase leading-relaxed max-w-sm ml-auto">
            GLOBAL STANDARDS, LOCAL INTENSITY.<br/>
            FIND THE NEAREST ITS PADEL HIGH-<br/>
            PERFORMANCE HUB.
          </p>
        </div>
      </div>

      {/* Dynamic Grid Section */}
      <div className="w-full bg-[#111111] p-0.5">
        <div 
          className={`grid gap-0.5 ${
            clubs.length === 1 
              ? 'grid-cols-1 w-full max-w-[1600px] mx-auto' 
              : `grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(clubs.length, 4)} w-full`
          }`}
        >
          {clubs.map((club, idx) => (
            <div 
              key={idx} 
              className={`relative group bg-black overflow-hidden ${
                clubs.length === 1 
                  ? 'h-[500px] md:h-[600px] lg:h-[800px]' 
                  : 'h-[500px] md:h-[600px] lg:h-[750px]'
              }`}
            >
              {/* Background Image */}
              <Image 
                src={club.image || '/itspadel-homehero-bg.webp'} 
                alt={club.name} 
                fill 
                className="object-cover object-center grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-out" 
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700"></div>
              
              {/* Card Content (Bottom Center) */}
              <div className="absolute bottom-16 left-0 w-full flex flex-col items-center text-center px-4">
                <h3 
                  className="font-bison font-bold text-white text-5xl md:text-6xl lg:text-[70px] tracking-widest uppercase transition-transform duration-500 group-hover:-translate-y-2 leading-none" 
                  style={{ transform: 'skewX(-15deg)' }}
                >
                  {club.name}
                </h3>
                <p 
                  className="font-inter font-bold text-[#009FF3] text-[9px] md:text-[11px] tracking-[0.4em] uppercase mt-4 mb-10 transition-transform duration-500 group-hover:-translate-y-1" 
                  style={{ transform: 'skewX(-10deg)' }}
                >
                  {club.subtitle}
                </p>
                
                <Link 
                  href={club.link} 
                  className="border border-white/20 bg-black/50 backdrop-blur-md px-10 py-4 text-white hover:bg-white hover:text-black transition-colors uppercase font-bison italic tracking-[0.15em] text-sm md:text-base font-bold shadow-2xl"
                >
                  <span style={{ transform: 'skewX(-15deg)', display: 'inline-block' }}>ENTER CLUB</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
