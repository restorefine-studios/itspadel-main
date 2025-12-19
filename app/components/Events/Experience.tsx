import Image from 'next/image'
import eventsData from '../../../languages/padelevents.json'

const Experience = () => {
  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1740&auto=format&fit=crop"
              alt="Padel event"
              width={400}
              height={500}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-bison text-4xl md:text-4xl mb-6">
              {eventsData.experience.headline}
            </h2>
            <p className="font-inter text-sm md:text-base text-black/50 mb-8">
              {eventsData.experience.paragraph}
            </p>
            <a
              href={eventsData.cta.link}
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {eventsData.cta.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience