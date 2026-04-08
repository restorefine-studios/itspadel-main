"use client";

import Link from "next/link";
import Image from "next/image";
import coachingData from "../../../languages/padelcoaching.json";

const Playtomic = () => {
  const data = coachingData.playtomic;

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden py-16 md:py-32">
      
      {/* Background ambient design (optional dark texture/fade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#050505]/90 to-transparent z-0"></div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 min-h-[700px] items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-10 order-2 lg:order-1">
          
          <p 
            className="font-inter font-bold text-[#009FF3] tracking-[0.25em] text-[10px] md:text-xs uppercase mb-6"
            style={{ transform: 'skewX(-15deg)' }}
          >
            {data.subtitle}
          </p>

          <h2 
            className="font-bison font-black text-white text-7xl md:text-8xl lg:text-[110px] leading-[0.8] tracking-tighter uppercase mb-10"
            style={{ transform: 'skewX(-15deg)' }}
            dangerouslySetInnerHTML={{ __html: data.headline }}
          />

          <div className="border-l-2 border-[#009FF3] pl-6 mb-12">
            <p className="font-inter text-gray-400 text-sm md:text-base font-medium max-w-sm leading-relaxed">
              {data.paragraph}
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Apple App Store */}
            <Link href="https://apps.apple.com" target="_blank" className="bg-white hover:bg-gray-100 transition-colors flex items-center justify-center px-8 py-3 w-fit min-w-[220px]">
              {/* Fallback Apple Logo (SVGs for exact match aren't present, so building styled text) */}
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 384 512" fill="black" width="24" height="24">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM34.3 44.5L12 96l56 4 19-32-52.7-23.5zM224 88c0-30-22-55.7-49-62-4 35.3 26.6 63.8 59 62zM38.5 15.6l59 12.3-24.3 56L22 75.6l16.5-60z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="font-inter text-[8px] font-bold tracking-widest text-black uppercase leading-none mb-1">Download on the</span>
                  <span className="font-bison font-bold text-2xl text-black tracking-wider leading-none">App Store</span>
                </div>
              </div>
            </Link>

            {/* Google Play Store */}
            <Link href="https://play.google.com" target="_blank" className="bg-transparent border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center px-8 py-3 w-fit min-w-[220px]">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 512 512" fill="white" width="24" height="24">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.3 25.3 35.3v441.3c0 16 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="font-inter text-[8px] font-bold tracking-widest text-white uppercase leading-none mb-1">Get it on</span>
                  <span className="font-bison font-bold text-2xl text-white tracking-wider leading-none">Google Play</span>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Right Column - Image & Badge */}
        <div className="relative h-[400px] lg:h-full w-full order-1 lg:order-2 flex items-center justify-end overflow-hidden lg:overflow-visible">
          
          {/* Main Image Container */}
          <div 
            className="absolute lg:relative w-full h-full lg:w-[120%] lg:right-[-20%] lg:h-[800px] z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
          >
            {/* Dark tint over image to match the mockup vibe */}
            <div className="absolute inset-0 bg-[#050505]/40 z-10 mix-blend-multiply"></div>
            <Image 
              src="/locations/itspadel-booking.webp" 
              alt="Playtomic App Users" 
              fill 
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 opacity-90"
            />
          </div>

          {/* Overlapping Playtomic Badge */}
          <div 
            className="absolute bottom-10 right-10 lg:bottom-20 lg:right-32 z-20 bg-[#111] border border-[#009FF3] py-8 px-12 md:px-16 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm"
            style={{ transform: 'skewX(-15deg)' }}
          >
            {/* Using text for PLAYTOMIC since custom font matches well, or the user's logo SVG */}
            <h3 className="font-bison font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase mb-2">
              PLAYTOMIC
            </h3>
            <p className="font-inter font-bold text-[#009FF3] text-[8px] md:text-[10px] tracking-[0.3em] uppercase">
              Official Booking Partner
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Playtomic;
