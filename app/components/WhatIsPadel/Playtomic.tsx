import Link from 'next/link'
import Image from 'next/image'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'

const Playtomic = () => {
  const data = whatIsPadelData.playtomic

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-0">
            <h2 className="font-bison text-4xl md:text-5xl mb-6">
              {data.headline}
            </h2>
            <p className="font-inter text-sm md:text-base text-black/50 mb-8">
              {data.paragraph}
            </p>
            <Link
              href={data.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {data.ctaText}
            </Link>
          </div>
          <div className="relative animate-fade-in-1">
            <Image
              src={data.image}
              alt="Playtomic app"
              width={400}
              height={500}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <Image
              src={data.playtomicImage}
              alt="Playtomic logo"
              width={400}
              height={500}
              className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playtomic