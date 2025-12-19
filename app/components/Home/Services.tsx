"use client"

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      "headline": "Events",
      "paragraph": "Invite your colleagues and clients to experience the fastest growing sport in a unique and private setting.",
      "ctaText": "Enquire Now",
      "ctaLink": "/events",
      "image": "/itspadel-event-gamenight.webp"
    },
    {
      "headline": "Coaching",
      "paragraph": "Our expert coaches offer personalised training at all our clubs to help elevate your padel game to the next level!",
      "ctaText": "Enquire Now",
      "ctaLink": "/coaching",
      "image": "/itspadel-model-shoot.webp"
    },
    {
      "headline": "Join The Club",
      "paragraph": "We operate social clubs where you can meet like-minded players, all with a common interest in this exhilarating sport.",
      "ctaText": "Enquire Now",
      "ctaLink": "/clubs",
      "image": "/itspadel-footwear.webp"
    },
    {
      "headline": "Lifestyle",
      "paragraph": "Invite your colleagues and clients to experience the fastest growing sport in a unique and private setting.",
      "ctaText": "Enquire Now",
      "ctaLink": "/about",
      "image": "/itspadel-drone-shoot.webp"
    }
  ]

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Row 1: 30% - 70% */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={service.headline}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${index === 0 ? 'lg:col-span-3' : 'lg:col-span-7'}`}
            >
              <Image src={service.image} alt={service.headline} width={400} height={500} className="w-full h-64 md:h-96 object-cover" />
               <div className="h-full absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:bg-black/50 transition-colors">
               <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                 <h3 className="font-bison text-2xl md:text-4xl mb-2">{service.headline}</h3>
                 <p className="font-inter text-xs md:text-sm mb-4 max-w-md text-white">{service.paragraph}</p>
                <Link href={service.ctaLink} className="text-sm inline-flex items-center bg-white text-[#009FF3] px-4 py-2 font-inter font-medium tracking-tighter hover:bg-gray-100 transition-colors">
                  {service.ctaText} <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
        {/* Row 2: 70% - 30% */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {services.slice(2, 4).map((service, index) => (
            <div
              key={service.headline}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-3'}`}
            >
              <Image src={service.image} alt={service.headline} width={400} height={500} className="w-full h-64 md:h-96 object-cover" />
               <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:bg-black/50 transition-colors">
               <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                 <h3 className="font-bison text-2xl md:text-4xl mb-2">{service.headline}</h3>
                 <p className="font-inter text-xs md:text-sm mb-4 max-w-md text-white">{service.paragraph}</p>
                <Link href={service.ctaLink} className="text-sm inline-flex items-center bg-white text-[#009FF3] px-4 py-2 font-inter font-medium tracking-tighter hover:bg-gray-100 transition-colors">
                  {service.ctaText} <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services