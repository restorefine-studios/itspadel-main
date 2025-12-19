import Image from 'next/image'
import communityData from '../../languages/padelcommunity.json'
import { Hash, Instagram, Youtube, Twitch } from 'lucide-react'



export default function Community() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-32 overflow-visible">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="w-full mx-auto grid place-items-center text-center mb-16">
          <h2 className="font-bison max-w-[500px] text-4xl md:text-6xl leading-tight">
            {communityData.headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="relative w-full h-[40rem] mx-auto flex justify-center">
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-20rem, 7.3rem) rotate(-28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <Image
              src={communityData.images[0].image}
              alt={communityData.images[0].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-11rem, 4rem) rotate(-14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <Image
              src={communityData.images[1].image}
              alt={communityData.images[1].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(0rem, 0rem) scale(0.98)',
              zIndex: 20,
            }}
          >
            <Image
              src={communityData.images[2].image}
              alt={communityData.images[2].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(20rem, 7.3rem) rotate(28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <Image
              src={communityData.images[3].image}
              alt={communityData.images[3].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(11rem, 4rem) rotate(14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <Image
              src={communityData.images[5].image}
              alt={communityData.images[5].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <p className="text-center mt-0 mb-0 font-inter text-base">
          Follow us on social media
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8">
          {[
            { label: 'tiktok', href: 'https://www.tiktok.com/@padel', icon: Hash },
            { label: 'instagram', href: 'https://www.instagram.com/padel', icon: Instagram },
            { label: 'youtube', href: 'https://www.youtube.com/padel', icon: Youtube },
            { label: 'twitch', href: 'https://www.twitch.tv/padel', icon: Twitch },
          ].map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#009FF3] transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}