import Link from "next/link";

interface HeroProps {
  image?: string;
  headline: string;
  paragraph?: string;
  ctaText?: string;
  ctaLink?: string;
  cta2Text?: string;
  cta2Link?: string;
}

const Hero = ({ image = "/itspadel-homehero-bg.webp", headline, paragraph, ctaText, ctaLink, cta2Text, cta2Link }: HeroProps) => {
  // Split headline to highlight the last word
  const words = headline.split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const firstPart = words.join(" ");

  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>

      <div className="relative z-10 w-full pl-8 md:pl-16 lg:pl-32 pr-4 flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          <div className="mb-4 animate-fade-in-0">
            <span className="inline-block text-[#009FF3] font-bison font-bold tracking-widest text-sm md:text-lg uppercase" style={{ transform: "skewX(-15deg)" }}>
              Welcome to
            </span>
          </div>

          <h1 className="font-bison font-bold uppercase leading-[0.8] mb-10 animate-fade-in-1 flex flex-col items-start pl-4">
            <span className="inline-block text-white text-[80px] sm:text-[120px] md:text-[160px] tracking-tighter" style={{ transform: "skewX(-18deg)" }}>
              {firstPart}
            </span>
            <span className="inline-block text-[#009FF3] text-[70px] sm:text-[100px] md:text-[140px] tracking-tighter" style={{ transform: "skewX(-18deg)" }}>
              {lastWord}
            </span>
          </h1>

          {paragraph && (
            <div className="border-l-[3px] border-[#009FF3] pl-6 mb-12 animate-fade-in-2 ml-2">
              <p className="font-inter text-gray-300 text-lg md:text-xl font-light tracking-tight max-w-xl">{paragraph}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-in-3 ml-2">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="bg-[#009FF3] text-white px-10 py-5 hover:bg-[#0080cc] transition-colors uppercase whitespace-nowrap">
                <span className="inline-block font-bison font-bold tracking-widest text-2xl" style={{ transform: "skewX(-15deg)" }}>
                  {ctaText}
                </span>
              </Link>
            )}

            {cta2Text && cta2Link && (
              <Link href={cta2Link} className="flex items-center gap-4 text-white hover:text-[#009FF3] transition-colors">
                <div className="w-12 h-px bg-[#009FF3]"></div>
                <span className="inline-block font-bison font-bold tracking-widest text-lg uppercase" style={{ transform: "skewX(-15deg)" }}>
                  {cta2Text}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
