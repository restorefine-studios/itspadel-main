import Image from 'next/image'

const DownloadPadel = () => {
  return (
    <section className="px-0 md:px-24 py-10 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-20">
        {/* Left: Rounded gray container with image */}
        <div className="flex-1 rounded-2xl">
          <Image src="/playtomic-cover-image.webp" alt="Playtomic Cover" width={400} height={400} className="w-[600px] md:w-full h-[400px] aspect-auto rounded-2xl object-cover" />
        </div>
        {/* Right: Logo and text */}
        <div className="flex-1 text-left h-full flex flex-col justify-between items-start">
          <Image src="/playtomic-logo.svg" alt="Playtomic Logo" width={200} height={200} className="h-12 mb-4 mx-0" />
          <h2 className="font-bison font-bold text-4xl md:text-6xl mb-4">
            BOOK YOUR COURT BY<br />
            DOWNLOADING<br />
            THE PLAYTOMIC APP
          </h2>
          <p className="font-inter text-gray-600 mb-6 tracking-tight">
            Start playing today by downloading Playtomic.
          </p>
          <a
            href="https://app.playtomic.io/?utm_source=web-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium tracking-tight hover:bg-[#0080cc] transition-colors inline-block"
          >
            DOWNLOAD PLAYTOMIC
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadPadel