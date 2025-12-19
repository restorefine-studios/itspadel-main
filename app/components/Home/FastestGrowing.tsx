import Image from 'next/image'
import Link from 'next/link'

const FastestGrowing = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-start justify-between">
          <div>
            <Image
              src="/itspadel-gameplay-court.webp"
              alt="Padel court"
              width={450}
              height={450}
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>
         
          <div>
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              The fastest growing sport in the world
            </h2>
            <p className="font-inter text-base text-black/50 mb-8">
              Padel is a fast-paced and addictive racket sport that combines the best elements of tennis and squash. With a smaller court and walls, it's extremely easy to pick up! With two clubs built already in the North West and more on the way, Pure Padel will make sure you have bringing the world's fastest growing sport to your doorstep!
            </p>
           
            <div className="flex flex-end gap-4">
              <Link
                href="/what-is-padel"
                className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
              >
                Learn More
              </Link>
              <Link
                href="/clubs"
                className="bg-white text-black px-6 py-3 font-inter font-medium border border-gray-300 hover:bg-gray-50 transition-colors uppercase"
              >
                View Clubs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastestGrowing