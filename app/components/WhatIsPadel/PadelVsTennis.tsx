import Image from 'next/image'
import Link from 'next/link'

const PadelVsTennis = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/itspadel-padel-vs-tennis.webp"
              alt="Padel vs Tennis"
              width={400}
              height={500}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              Padel vs. Tennis: What&apos;s the Difference?
            </h2>
            <p className="font-inter text-base text-black/50 mb-8">
              Padel and tennis may look alike, but there are some fun differences! Padel is played on a smaller court with walls, adding a unique twist where the ball can bounce off them. The rackets are solid and the game is more about teamwork and strategy. We think it's better than tennis but we might be biased. Why not give it a try at Pure Padel and experience the difference for yourself?
            </p>
            <Link
              href="/clubs"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              Our Clubs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PadelVsTennis