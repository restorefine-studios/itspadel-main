"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface JuniorProduct {
  name: string;
  description: string;
  price: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  tag: string;
}

interface TechnicalItem {
  name: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
}

interface ProOvergrips {
  name: string;
  description: string;
  features: string[];
  buttonText: string;
}

interface AccessoriesData {
  juniorProLab: {
    title: string;
    product: JuniorProduct;
  };
  technicalElements: {
    title: string;
    items: TechnicalItem[];
    proOvergrips: ProOvergrips;
  };
}

interface ProShopAccessoriesProps {
  data: AccessoriesData;
}

const ProShopAccessories = ({ data }: ProShopAccessoriesProps) => {
  const { juniorProLab, technicalElements } = data;
  return (
    <div className="w-full">
      {/* 1. JUNIOR PRO LAB Section */}
      <section className="w-full bg-[#009FF3] py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Side: Junior Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="font-bison font-black text-[#0f172a] text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tight mb-8">
              JUNIOR
              <br />
              PRO LAB
            </h2>

            {/* Product Card */}
            <div className="w-full max-w-md bg-[#0a192f] p-8 md:p-10 relative shadow-2xl border-l-[6px] border-[#d4ff00]">
              <h3 className="font-bison font-bold text-white text-3xl uppercase mb-4">{juniorProLab.product.name}</h3>
              <p className="font-inter text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-8">{juniorProLab.product.description}</p>

              <div className="flex items-center">
                <span className="font-bison font-black text-white text-5xl pl-2">{juniorProLab.product.price}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center lg:justify-end">
            {/* Render the background angled blue box */}
            <div className="absolute w-[90%] h-[90%] bg-[#0088dd] border-8 border-[#009FF3] right-0 top-0 transform rotate-[-3deg] hidden md:block"></div>

            {/* Image container tilted slightly the other way */}
            <div className="relative w-full md:w-[85%] aspect-square border-[10px] border-[#0a192f] transform md:rotate-[2deg] overflow-hidden shadow-2xl z-10 bg-black">
              <Image src={juniorProLab.product.image} alt={juniorProLab.product.imageAlt} fill className="object-cover object-center scale-110" />
            </div>

            {/* Neon Performance Tag */}
            <div className="absolute bottom-[-10px] md:bottom-10 right-[-10px] md:right-[-20px] bg-[#d4ff00] px-6 py-8 md:px-10 md:py-12 z-20 shadow-xl" style={{ transform: "rotate(-8deg)" }}>
              <p className="font-bison font-black text-[#0f172a] text-xl md:text-3xl leading-[0.9] text-center tracking-widest">
                {juniorProLab.product.tag.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL ELEMENTS Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="font-bison font-black text-[#151515] text-5xl md:text-6xl uppercase mb-4">{technicalElements.title}</h2>
            <div className="w-32 h-[5px] bg-[#004A7F]"></div>
          </div>

          {/* Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Technical Items Cards */}
            {technicalElements.items.map((item, index) => (
              <div key={index} className="bg-[#f4f4f4] p-8 md:p-12 flex flex-col justify-between hover:bg-[#eaeaea] transition-colors group border border-transparent hover:border-gray-300">
                <div className="w-full h-[250px] relative mb-12 flex items-center justify-center mix-blend-multiply overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale opacity-40 mix-blend-multiply" />
                </div>
                <div className="flex flex-col w-full z-10">
                  <h3 className="font-bison font-black text-[#151515] text-2xl md:text-3xl uppercase mb-1">{item.name}</h3>
                  <p className="font-inter text-gray-500 text-sm font-medium mb-6">{item.description}</p>
                  <div className="flex items-center justify-between w-full border-t border-gray-300 pt-6">
                    <span className="font-bison font-bold text-[#009FF3] text-4xl">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Overgrips Card */}
            <div className="bg-[#eaeaea] p-8 md:p-12 flex flex-col h-full border-b-[6px] border-[#004A7F]">
              <div className="flex flex-col mb-10 mt-4">
                <h3 className="font-bison font-black text-[#151515] text-3xl md:text-4xl uppercase mb-4">{technicalElements.proOvergrips.name}</h3>
                <p className="font-inter text-gray-600 text-sm font-medium leading-relaxed mb-10">{technicalElements.proOvergrips.description}</p>

                <ul className="space-y-4 flex-grow flex flex-col">
                  {technicalElements.proOvergrips.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009FF3]" />
                      <span className="font-bison font-bold text-[#151515] tracking-widest uppercase text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProShopAccessories;
