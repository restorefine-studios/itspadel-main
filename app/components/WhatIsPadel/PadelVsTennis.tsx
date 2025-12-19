import Image from 'next/image'
import Link from 'next/link'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'

const PadelVsTennis = () => {
  const data = whatIsPadelData.padelVsTennis

  return (
    <section className="py-8 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-0">
            <Image
              src="/itspadel-padel-vs-tennis.webp"
              alt="Padel vs Tennis"
              width={400}
              height={500}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="animate-fade-in-1">
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              {data.headline}
            </h2>
            <p className="font-inter text-sm md:text-base text-black/50 mb-8">
              {data.paragraph}
            </p>
            <Link
              href={data.ctaLink}
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {data.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PadelVsTennis