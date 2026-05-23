"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  viewAllText?: string;
  viewAllHref?: string;
  products: Product[];
}

interface ProShopGalleryProps {
  data: GalleryData;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative bg-[#0c0c0c] hover:bg-[#111] transition-colors p-8 flex flex-col items-center justify-between min-h-[500px]">
    <div className="relative w-full h-[300px] mb-8 overflow-hidden flex items-center justify-center">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-contain transform group-hover:scale-110 drop-shadow-2xl transition-all duration-700 [filter:none] md:[filter:grayscale(70%)_brightness(0.85)] md:group-hover:[filter:grayscale(0%)_brightness(1)]"
      />
    </div>
    <div className="flex flex-col w-full text-left relative z-10">
      <h3
        className="font-bison font-bold text-white text-4xl uppercase mb-2 leading-[0.9]"
        style={{ transform: "skewX(-10deg)" }}
      >
        {product.name}
      </h3>
      <p
        className="font-inter font-bold text-[#009FF3] text-xl tracking-tight"
        style={{ transform: "skewX(-10deg)" }}
      >
        {product.price}
      </p>
    </div>
  </div>
);

const ProShopGallery = ({ data }: ProShopGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const total = data.products.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  return (
    <section id="shop-catalog" className="w-full bg-[#050505] py-24 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-10">
          <div className="flex flex-col">
            <p
              className="font-inter font-bold text-[#009FF3] text-[10px] tracking-[0.2em] uppercase mb-4"
              style={{ transform: "skewX(-15deg)" }}
            >
              {data.sectionLabel}
            </p>
            <h2
              className="font-bison font-black text-white text-6xl md:text-7xl lg:text-8xl uppercase leading-none"
              style={{ transform: "skewX(-15deg)" }}
            >
              {data.title} <span className="text-[#009FF3]">{data.titleHighlight}</span>
            </h2>
          </div>
          {data.viewAllHref && data.viewAllText ? (
            <Link href={data.viewAllHref} className="mt-6 md:mt-0 items-center flex gap-4 text-white hover:text-[#009FF3] transition-colors group">
              <span className="font-bison font-bold text-2xl uppercase" style={{ transform: "skewX(-15deg)" }}>
                {data.viewAllText}
              </span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          ) : null}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative bg-gray-900 border border-gray-900">
            <ProductCard product={data.products[current]} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={prev}
              className="flex items-center justify-center w-16 h-16 bg-[#009FF3] text-white hover:bg-white hover:text-black transition-colors"
              style={{ transform: "skewX(-10deg)" }}
              aria-label="Previous racket"
            >
              <ChevronLeft className="w-8 h-8" style={{ transform: "skewX(10deg)" }} />
            </button>

            <span className="font-bison font-bold text-gray-500 text-sm tracking-widest uppercase">
              {current + 1} / {total}
            </span>

            <button
              onClick={next}
              className="flex items-center justify-center w-16 h-16 bg-[#009FF3] text-white hover:bg-white hover:text-black transition-colors"
              style={{ transform: "skewX(-10deg)" }}
              aria-label="Next racket"
            >
              <ChevronRight className="w-8 h-8" style={{ transform: "skewX(10deg)" }} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-900 border-x border-gray-900 border-t border-b">
          {data.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProShopGallery;
