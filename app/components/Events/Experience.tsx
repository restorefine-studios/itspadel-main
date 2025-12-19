import Image from 'next/image'

const Experience = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
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
            <h2 className="font-bison text-4xl md:text-5xl mb-6">
              Experience the best Padel facilities in the UK
            </h2>
            <p className="font-inter text-base text-gray-700 mb-8">
              If you&apos;re planning a corporate event or private hire, Pure Padel is built for it. Our clubs combine the best padel facilities in the UK with everything you need for a great day — showers, changing rooms, breakout spaces, and relaxed social areas. Whether it's a team-building session, a company tournament, or a client networking day, we make it easy to mix sport, socialising, and down-time. With great food and drink options, flexible layouts, and an atmosphere that's always buzzing, Pure Padel is the perfect place to bring people together.
            </p>
            <a
              href="#corporateform"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              Enquire Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience