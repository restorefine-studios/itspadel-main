import Link from 'next/link'

interface CoachingHeroProps {
  image?: string
}

const CoachingHero = ({
  image = '/itspadel-personal-coaching.webp',
}: CoachingHeroProps) => {
  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundImage: `url(${image})` }}>
      {/* Dark gradient overlay similar to the image, dark at the bottom and right */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>
      
      <div className="relative z-10 w-full pl-8 md:pl-16 lg:pl-32 pr-4 flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          
          {/* Top Label */}
          <div className="mb-4 animate-fade-in-0">
            <span className="inline-block text-[#009FF3] font-bison font-bold tracking-widest text-sm md:text-lg uppercase" style={{ transform: 'skewX(-15deg)' }}>
              Performance First
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bison font-bold uppercase leading-[0.8] mb-10 animate-fade-in-1 flex flex-col items-start pl-4">
            <span className="inline-block text-white text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] tracking-tighter">
              PADEL COACHING
            </span>
            <span className="inline-block text-[#009FF3] text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] tracking-tighter" style={{ transform: 'skewX(-18deg)' }}>
              AT ITS PADEL
            </span>
          </h1>
          
          {/* Subheadline with left border */}
          <div className="border-l-[3px] border-[#009FF3] pl-6 mb-12 animate-fade-in-2 ml-2">
            <p className="font-inter text-gray-300 text-lg md:text-xl font-light tracking-tight max-w-xl">
              Train with expert coaches and improve your skills in the UK’s fastest growing racket sport. Our coaching programmes are designed for players of all ages and levels.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-in-3 ml-2">
            <Link 
              href="https://playtomic.com/clubs/its-padel" 
              className="bg-white text-black px-10 py-5 hover:bg-gray-200 transition-colors uppercase whitespace-nowrap"
            >
              <span className="inline-block font-bison font-bold tracking-widest text-2xl" style={{ transform: 'skewX(-15deg)' }}>
                Book a Session
              </span>
            </Link>
            
            <Link 
              href="#facilities"
              className="flex items-center gap-4 text-white hover:text-[#009FF3] transition-colors"
            >
              <div className="w-12 h-px bg-[#009FF3]"></div>
              <span className="inline-block font-bison font-bold tracking-widest text-lg uppercase" style={{ transform: 'skewX(-15deg)' }}>
                View Facilities
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoachingHero
