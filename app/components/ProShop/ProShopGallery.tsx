"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  price: string;
  image: string;
  category: string;
  brand: string;
  description: string;
}

interface GalleryData {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  viewAllText: string;
  viewAllHref: string;
  products: Product[];
}

interface ProShopGalleryProps {
  data: GalleryData;
}

const ProShopGallery = ({ data }: ProShopGalleryProps) => {
  return (
    <section id="shop-catalog" className="w-full bg-[#050505] py-24 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-10">
          <div className="flex flex-col">
            <p 
              className="font-inter font-bold text-[#009FF3] text-[10px] tracking-[0.2em] uppercase mb-4"
              style={{ transform: 'skewX(-15deg)' }}
            >
              {data.sectionLabel}
            </p>
            <h2 
              className="font-bison font-black text-white text-6xl md:text-7xl lg:text-8xl uppercase leading-none"
              style={{ transform: 'skewX(-15deg)' }}
            >
              {data.title} <span className="text-[#009FF3]">{data.titleHighlight}</span>
            </h2>
          </div>
          <Link href={data.viewAllHref} className="mt-6 md:mt-0 items-center flex gap-4 text-white hover:text-[#009FF3] transition-colors group">
            <span className="font-bison font-bold text-2xl uppercase" style={{ transform: 'skewX(-15deg)' }}>
              {data.viewAllText}
            </span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-900 border-x border-gray-900 border-t border-b">
          {data.products.map((product, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0c0c0c] hover:bg-[#111] transition-colors p-8 flex flex-col items-center justify-between min-h-[500px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-[300px] mb-8 overflow-hidden flex items-center justify-center">
                {/* Fallback image manipulation to make it look like a product shoot */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transform group-hover:scale-110 drop-shadow-2xl transition-all duration-700 [filter:grayscale(70%)_brightness(0.85)] group-hover:[filter:grayscale(0%)_brightness(1)]"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col w-full text-left relative z-10">
                <h3 
                  className="font-bison font-bold text-white text-3xl md:text-4xl uppercase mb-2 leading-[0.9]"
                  style={{ transform: 'skewX(-10deg)' }}
                >
                  {product.name}
                </h3>
                <p 
                  className="font-inter font-bold text-[#009FF3] text-xl tracking-tight"
                  style={{ transform: 'skewX(-10deg)' }}
                >
                  {product.price}
                </p>
              </div>

              {/* Hover Add to Cart Action */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <button 
                   className="bg-[#009FF3] w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black text-white transition-colors"
                   style={{ transform: 'skewX(-15deg)' }}
                 >
                   <ArrowRight className="w-5 h-5 transform -rotate-45" style={{ transform: 'skewX(15deg) rotate(-45deg)' }} />
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProShopGallery;
