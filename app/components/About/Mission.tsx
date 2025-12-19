import Image from 'next/image'
import Link from 'next/link'

const Mission = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/itspadel-gameplay-court.webp"
              alt="Padel mission"
              width={400}
              height={450}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              The It&apos;s Padel Mission
            </h2>
            <p className="font-inter text-base text-black/50 mb-8">
              Pure Padel is on a journey to help make padel the next generation of racquet sports in the UK. With the aim of building 30 clubs across the UK within 5 years, we are dedicated to providing exceptional facilities, top-notch coaching, and a welcoming atmosphere for players of all levels. Join the hype and experience the passion and excitement of padel like never before.
            </p>
            <Link
              href="/what-is-padel"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              How To Play
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission