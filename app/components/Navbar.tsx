"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Events', path: '/events' },
    { name: 'What is Padel', path: '/what-is-padel' },
    { name: 'Clubs', path: '/clubs' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10">
      <div className="container mx-auto px-8 md:px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/itspadel-logo-main.svg" alt="Itspadel Logo" width={75} height={75} className="h-14" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={` ${ item.name === "Clubs" ? "bg-[#009FF3] px-3 py-1 text-white" : "text-white mix-blend-difference" } font-inter tracking-tight hover:text-blue-600 transition-all duration-300 ease-linear cursor-pointer`}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="bg-transparent md:hidden mix-blend-difference">
          {isOpen ? <XMarkIcon className="size-8 text-white" /> : <Bars3Icon className="size-8 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-sm">
          <div className="px-8 py-4">
            {navItems.map((item) => (
               <Link key={item.path} href={item.path} className="font-inter tracking-tight hover:text-blue-600 mix-blend-difference" onClick={toggleMenu}>
                <span className='flex flex-col items-start gap-y-8 text-white' >{item.name}</span>
               </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar