"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const DownloadPadel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section
      className="px-8 py-10 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-20">
        {/* Left: Rounded gray container with image */}
        <motion.div
          className="flex-1 rounded-2xl"
          variants={itemVariants}
        >
          <Image src="/playtomic-cover-image.webp" alt="Playtomic Cover" width={400} height={400} className="w-full h-[400px] aspect-square rounded-2xl object-cover" />
        </motion.div>
        {/* Right: Logo and text */}
        <motion.div
          className="flex-1 text-left h-full flex flex-col justify-between items-start"
          variants={itemVariants}
        >
          <Image src="/playtomic-logo.svg" alt="Playtomic Logo" width={200} height={200} className="h-12 mb-4 mx-0" />
          <h2 className="font-bison font-bold text-5xl md:text-6xl mb-4 tracking-tighter">
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
        </motion.div>
      </div>
    </motion.section>
  )
}

export default DownloadPadel