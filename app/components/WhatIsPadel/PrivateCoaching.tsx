import Link from 'next/link'

const PrivateCoaching = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <h2 className="font-bison text-4xl md:text-5xl mb-6">
            Private Coaching
          </h2>
          <p className="font-inter text-base text-gray-700 mb-8 max-w-2xl mx-auto">
            Elevate your padel game with 1-on-1, paired or group coaching sessions available with our expert coaches.
          </p>
          <Link
            href="/coaching"
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PrivateCoaching