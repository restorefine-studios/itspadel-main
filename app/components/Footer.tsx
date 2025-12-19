import { Instagram, Twitter, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="font-inter mt-24">
      {/* First Container */}
      <div className="px-8 md:px-16 lg:px-32 py-6 border-t border-b border-gray-200 animate-fade-in-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            src="/itspadel-logo-alt.svg"
            alt="Itspadel Logo"
            width={100}
            height={100}
            className="h-16 object-contain"
          />
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#009FF3]">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#009FF3]">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="px-8 md:px-16 lg:px-32 py-12 md:py-20 border-b border-gray-200 animate-fade-in-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <p className="text-black/50 mb-6">
              Stay up to date with the latest news, tips and exclusive offers by joining our awesome newsletter.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-0 py-3 border-b border-gray-300 bg-transparent tracking-tighter text-sm md:text-base"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/50">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-black tracking-tighter mb-4">SPORT</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/clubs" className="hover:text-[#009FF3]">Locations</a></li>
                <li><a href="/events" className="hover:text-[#009FF3]">Events</a></li>
                <li><a href="/coaching" className="hover:text-[#009FF3]">Coaching</a></li>
                <li><a href="/clubs" className="hover:text-[#009FF3]">Clubs</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-black tracking-tighter mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-[#009FF3]">Padel News</a></li>
                <li><a href="#" className="hover:text-[#009FF3]">How to book</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-black tracking-tighter mb-4">ABOUT</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/about" className="hover:text-[#009FF3]">About Us</a></li>
                <li><a href="#" className="hover:text-[#009FF3]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#009FF3]">T&C&apos;s</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Container */}
      <div className="px-8 md:px-16 lg:px-32 py-10 animate-fade-in-2">
        <div className="max-w-7xl mx-auto text-right">
          <p className="text-gray-600 text-sm">
            All Rights Reserved. Copyright {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer