import Link from 'next/link'

interface HeroProps {
  image?: string
  headline: string
  paragraph?: string
  ctaText?: string
  ctaLink?: string
  cta2Text?: string
  cta2Link?: string
}

const Hero = ({ image = '/itspadel-homehero-bg.webp', headline, paragraph, ctaText, ctaLink, cta2Text, cta2Link }: HeroProps) => {
  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex items-end min-h-screen pl-8 md:pl-16 lg:pl-32 pb-20">
        <div className="max-w-2xl text-left">
          <h1 className="font-bison font-bold text-6xl lg:text-8xl text-white mb-4 tracking-tighter animate-fade-in-0">
            {headline}
          </h1>
          {paragraph && (
            <p className="font-inter text-sm md:text-xl font-medium text-white mb-8 tracking-tight animate-fade-in-1">
              {paragraph}
            </p>
          )}
          <div className="flex gap-4 animate-fade-in-2">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium tracking-tight hover:bg-[#0080cc] transition-colors uppercase">
                {ctaText}
              </Link>
            )}
            {cta2Text && cta2Link && (
              <Link href={cta2Link} className="bg-white text-black px-6 py-3 font-inter font-medium tracking-tight hover:bg-gray-100 transition-colors uppercase">
                {cta2Text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero