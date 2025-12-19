"use client"


import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  image?: string
  headline: string
  paragraph?: string
  ctaText?: string
  ctaLink?: string
  cta2Text?: string
  cta2Link?: string
}

const Hero = ({ image = '/itspadel-homehero-bg.webp', headline, paragraph, ctaText, ctaLink, cta2Text, cta2Link }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex items-end min-h-screen pl-8 md:pl-16 lg:pl-32 pb-20">
        <motion.div
          className="max-w-2xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-bison font-bold text-6xl lg:text-8xl text-white mb-4 tracking-tighter"
            variants={itemVariants}
          >
            {headline}
          </motion.h1>
          {paragraph && (
            <motion.p
              className="font-inter text-base md:text-xl font-medium text-white mb-8 tracking-tight"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          )}
          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium tracking-tight hover:bg-[#0080cc] transition-colors">
                {ctaText}
              </Link>
            )}
            {cta2Text && cta2Link && (
              <Link href={cta2Link} className="bg-white text-black px-6 py-3 font-inter font-medium tracking-tight hover:bg-gray-100 transition-colors">
                {cta2Text}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero