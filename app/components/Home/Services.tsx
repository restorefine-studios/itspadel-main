import homeData from "../../../languages/padelhome.json";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = homeData.services;

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-center">
          <h2 className="font-bison text-5xl md:text-6xl italic tracking-wide flex items-center gap-4 uppercase">
            OUR <span className="text-[#009FF3]">SERVICES</span>
          </h2>
          <div className="flex-grow h-[4px] bg-[#009FF3] ml-4 mt-2 max-w-[200px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Large Card (Item 1) */}
          <Link href={services[0].ctaLink} className="relative rounded-lg overflow-hidden group h-[400px] md:h-[600px] block cursor-pointer transition-transform hover:scale-[1.01] duration-500">
            <Image src={services[0].image} alt={services[0].headline} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-10 left-10 pr-10">
              <h3 className="font-bison text-5xl md:text-6xl italic tracking-wide mb-4 leading-none text-white group-hover:text-[#009FF3] transition-colors">{services[0].headline.toUpperCase()}</h3>
              <p className="font-inter text-sm md:text-base text-gray-300 max-w-sm mb-6">{services[0].paragraph}</p>
              <span className="inline-block bg-white text-black font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-gray-200 transition-colors">{services[0].ctaText}</span>
            </div>
          </Link>

          {/* Right Column */}
          <div className="flex flex-col gap-4 h-auto lg:h-[600px]">
            {/* Top Row - 2 Small Cards (Items 2 & 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[500px] sm:h-[400px] lg:h-1/2">
              {[services[1], services[2]].map((service, index) => (
                <Link key={service.headline} href={service.ctaLink} className="relative rounded-lg overflow-hidden group block cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 h-full min-h-[200px]">
                  <Image src={service.image} alt={service.headline} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-bison text-3xl italic tracking-wide text-white group-hover:text-[#009FF3] transition-colors">{service.headline.toUpperCase()}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row - Horizontal Card (Item 4) */}
            <Link href={services[3].ctaLink} className="relative rounded-lg overflow-hidden group block cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 h-[300px] lg:h-1/2">
              <Image src={services[3].image} alt={services[3].headline} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-center z-10">
                <h3 className="font-bison text-4xl md:text-5xl text-[#009FF3] group-hover:text-white italic tracking-wide mb-4 transition-colors">{services[3].headline.toUpperCase()}</h3>
                <p className="font-inter text-sm text-gray-200 max-w-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden">{services[3].paragraph}</p>
                <span className="bg-white text-black font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-gray-200 transition-colors">{services[3].ctaText}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
