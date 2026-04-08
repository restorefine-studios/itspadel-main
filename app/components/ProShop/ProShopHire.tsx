"use client";

import Image from "next/image";

interface HireDataProps {
  data: {
    headline: string[];
    price: string;
    frequency: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
    series: {
      title: string;
      image: string;
    }[];
  };
}

const ProShopHire = ({ data }: HireDataProps) => {
  return (
    <section className="w-full bg-[#171717] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-10">
          
          <h2 className="font-bison font-black text-white text-7xl md:text-8xl lg:text-[110px] uppercase leading-[0.85] tracking-tight mb-8">
            {data.headline[0]}<br />
            {data.headline[1]}
          </h2>

          <div className="flex items-end mb-8 gap-4">
             <span className="font-bison font-black text-[#009FF3] text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.8]">
               {data.price}
             </span>
             <span className="font-bison font-bold text-gray-400 text-2xl md:text-3xl tracking-widest uppercase pb-2">
               {data.frequency}
             </span>
          </div>

          <p className="font-inter text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-12">
            {data.description}
          </p>

          <div className="w-full h-px bg-gray-700 mb-10 w-full max-w-lg"></div>

          <div className="flex flex-col sm:flex-row gap-10 max-w-lg w-full">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col flex-1">
                <h4 className="font-bison font-bold text-[#009FF3] text-xl tracking-widest uppercase mb-2">
                  {feature.title}
                </h4>
                <p className="font-inter text-gray-400 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Cascading Image Cards */}
        <div className="w-full lg:w-1/2 relative min-h-[600px] flex justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Card 1: ELITE SERIES (Left/Top) */}
          <div className="absolute left-[0%] md:left-[10%] lg:left-0 top-0 bg-[#2a2a2a] p-4 pb-0 flex flex-col items-center w-[250px] md:w-[320px] shadow-2xl z-10">
             <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                <Image 
                  src={data.series[0].image} 
                  alt={data.series[0].title}
                  fill
                  className="object-cover"
                />
             </div>
             <p className="font-bison font-black text-white text-lg tracking-widest uppercase mb-4">
               {data.series[0].title}
             </p>
          </div>

          {/* Card 2: POWER SERIES (Right/Bottom) */}
          <div className="absolute right-[0%] md:right-[10%] lg:right-[10%] top-[120px] md:top-[160px] bg-[#333333] p-4 pb-0 flex flex-col items-center w-[250px] md:w-[320px] shadow-2xl z-20">
             <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                <Image 
                  src={data.series[1].image} 
                  alt={data.series[1].title}
                  fill
                  className="object-cover"
                />
             </div>
             <p className="font-bison font-black text-white text-lg tracking-widest uppercase mb-4">
               {data.series[1].title}
             </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProShopHire;
