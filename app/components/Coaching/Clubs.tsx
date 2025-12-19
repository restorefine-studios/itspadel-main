import Link from 'next/link'

const Clubs = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Our Clubs</h2>
          <p className="font-inter text-base text-gray-600">Choose your location for coaching</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Alderley Park</h3>
            <Link
              href="/padel-coaching-alderley-park"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Manchester</h3>
            <Link
              href="/padel-coaching-manchester"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Darlington</h3>
            <Link
              href="/padel-coaching-darlington"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Stockport</h3>
            <Link
              href="/padel-coaching-stockport"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Nottingham</h3>
            <Link
              href="/padel-coaching-nottingham"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clubs