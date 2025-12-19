import Image from 'next/image'

const Team = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="rounded-3xl overflow-hidden h-[500px] relative w-full"
          >
            <Image
              src="/itspadel-court-manager.webp"
              alt="Nathan Simons"
              width={400}
              height={500}
              className="w-full h-full object-cover aspect-auto grayscale"
            />
            <div className="w-full absolute bottom-0 left-0 z-10 p-6 h-44 bg-gradient-to-t from-[#009FF3] to-transparent">
              <h3 className="font-bison text-3xl mt-8 text-white">Nathan Simons</h3>
              <p className="font-inter text-white">Co-Founder & Managing Director</p>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden h-[500px] relative w-full"
          >
            <Image
              src="/itspadel-head-of-commercial.webp"
              alt="Angela Martins"
              width={400}
              height={500}
              className="w-full h-full object-cover aspect-auto grayscale"
            />
            <div className="w-full absolute bottom-0 left-0 z-10 p-6 h-44 bg-gradient-to-t from-[#009FF3] to-transparent">
              <h3 className="font-bison text-3xl mt-8 text-white">Angela Martins</h3>
              <p className="font-inter text-white">Head of Commercial</p>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden h-[500px] relative w-full"
          >
            <Image
              src="/itspadel-business-officer.webp"
              alt="Frederick Benson"
              width={400}
              height={500}
              className="w-full h-full object-cover aspect-auto grayscale"
            />
            <div className="w-full absolute bottom-0 left-0 z-10 p-6 h-44 bg-gradient-to-t from-[#009FF3] to-transparent">
              <h3 className="font-bison text-3xl mt-8 text-white">Frederick Benson</h3>
              <p className="font-inter text-white">Regional Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team