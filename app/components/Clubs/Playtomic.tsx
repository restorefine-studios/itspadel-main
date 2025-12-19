import Image from 'next/image'

const Playtomic = () => {
  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bison text-4xl md:text-4xl mb-6">
              Book your court by downloading the Playtomic app
            </h2>
            <p className="font-inter text-sm md:text-base text-black/50 mb-8">
              Start playing today by downloading Playtomic.
            </p>
            <a
              href="https://app.playtomic.io/?utm_source=web-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              Download Playtomic
            </a>
          </div>
          <div className="relative">
            <Image
              src="https://www.purepadelclubs.co.uk/wp-content/uploads/2024/09/Download-Playtonic-app.jpg"
              alt="Playtomic app"

              className="w-full h-96 object-cover rounded-2xl"
            />
            <Image
              src="https://www.purepadelclubs.co.uk/wp-content/uploads/2024/04/Playtomic.png"
              alt="Playtomic logo"

              className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playtomic