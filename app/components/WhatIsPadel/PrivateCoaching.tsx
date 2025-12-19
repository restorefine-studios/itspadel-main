import Link from 'next/link'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'

const PrivateCoaching = () => {
  const data = whatIsPadelData.privateCoaching

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-0">
          <h2 className="font-bison text-4xl md:text-5xl mb-6">
            {data.headline}
          </h2>
          <p className="font-inter text-sm md:text-base text-black/50 mb-8 max-w-2xl mx-auto">
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
    </section>
  )
}

export default PrivateCoaching