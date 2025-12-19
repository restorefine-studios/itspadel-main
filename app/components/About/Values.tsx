import Link from 'next/link'
import Image from 'next/image'

const Values = () => {
  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 ">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-2 gap-12 items-start md:items-center">
          <div>
            <h2 className="font-bison text-4xl md:text-6xl mb-2">
              Values, The It&apos;s Padel Way!
            </h2>
            <p className="font-inter text-sm md:text-base text-black/50 mb-8">
              Padel is a fast-paced and addictive racket sport that combines elements  of tennis and squash. With a smaller court and walls, it’s extremely  easy to pick up! With two clubs built already in the North West and more on the way, Its Padel will make sure you have bringing the world’s  fastest growing sport to your doorstep!
            </p>
            <Link
              href="/what-is-padel"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              How To Play
            </Link>
          </div>
          <div className='w-full' >
            <Image
              src="/itspadel-game-coach.webp"
              alt="Padel values"
              width={400}
              height={500}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values