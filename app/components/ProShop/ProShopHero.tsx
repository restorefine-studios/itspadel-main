"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroData {
  subheading: string;
  headline: string[];
  buttons: Array<{
    text: string;
    href: string;
    type: string;
  }>;
  backgroundImage: string;
  backgroundImageAlt: string;
}

interface ProShopHeroProps {
  data: HeroData;
}

const ProShopHero = ({ data }: ProShopHeroProps) => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex items-center pt-24 pb-12">
      
      {/* Background Grid Pattern (optional subtle texture) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Right Side Image fading into white */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] lg:w-[55%] h-full z-0 opacity-80 md:opacity-100 flex items-center justify-end overflow-visible">
        
        {/* Strong white gradient overlay to dissolve the hard edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-20 w-[50%] left-[-1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-20 h-full"></div>
        
        {/* Racket Image Container with CSS Mask for perfect dissolving edge */}
        <div 
          className="relative w-[120%] lg:w-full h-[150%] lg:h-[120%] mr-[-30%] lg:mr-[-10%] mt-[-10%] items-center justify-end flex"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)' }}
        >
           <div className="relative w-full h-full max-w-[1000px] max-h-[1000px] grayscale contrast-[1.1] brightness-[1.1]">
             <Image 
               src={data.backgroundImage} 
               alt={data.backgroundImageAlt} 
               fill 
               className="object-contain lg:object-cover object-right mix-blend-multiply" 
             />
             <div className="absolute inset-0 bg-white opacity-20 mix-blend-overlay"></div>
           </div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex items-center">
        
        <div className="flex flex-col mt-10 md:mt-0">
          
          {/* Subheader */}
          <div className="mb-6">
            <h3 className="font-inter font-bold text-[#009FF3] text-[10px] md:text-[12px] tracking-[0.2em] uppercase">
              {data.subheading}
            </h3>
          </div>

          {/* Epic Headline */}
          <h1 className="font-bison font-black uppercase flex flex-col items-start leading-[0.8] mb-12 tracking-tighter w-full max-w-4xl">
            {data.headline.map((line, index) => (
              <span 
                key={index}
                className={`${
                  index === data.headline.length - 1 
                    ? "text-[#009FF3] text-[80px] sm:text-[110px] md:text-[140px] lg:text-[170px] italic pr-4" 
                    : "text-[#151515] text-[70px] sm:text-[100px] md:text-[130px] lg:text-[160px]"
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 lg:gap-3 mt-4">
            
            {data.buttons.map((button, index) => (
              <Link 
                key={index}
                href={button.href} 
                className={`${
                  button.type === 'primary' 
                    ? 'bg-[#009FF3] text-black hover:bg-[#0080cc]' 
                    : 'bg-white border-2 border-black text-black hover:bg-gray-100'
                } px-10 md:px-12 py-4 md:py-5 transition-colors w-full sm:w-auto text-center ${index > 0 ? 'mt-2 sm:mt-0' : ''}`}
                style={{ transform: 'skewX(-15deg)' }}
              >
                <span className="inline-block font-bison font-black tracking-wide uppercase text-xl md:text-2xl" style={{ transform: 'skewX(15deg)' }}>
                  {button.text}
                </span>
              </Link>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProShopHero;
