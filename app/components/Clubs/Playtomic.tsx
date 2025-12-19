import clubsData from '../../../languages/padelclubs.json'
import Image from 'next/image'

const Playtomic = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bison text-4xl md:text-5xl mb-6">
              {clubsData.playtomic.headline}
            </h2>
            <p className="font-inter text-base text-gray-700 mb-8">
              {clubsData.playtomic.paragraph}
            </p>
            <a
              href={clubsData.playtomic.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {clubsData.playtomic.ctaText}
            </a>
          </div>
          <div className="relative">
            <Image
              src={clubsData.playtomic.image}
              alt="Playtomic app"
           
              className="w-full h-96 object-cover rounded-2xl"
            />
            <Image
              src={clubsData.playtomic.playtomicImage}
              alt="Playtomic logo"
             
              className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playtomic