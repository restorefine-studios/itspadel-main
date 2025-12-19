"use client"

import { motion } from 'framer-motion'
import aboutData from '../../../languages/padelabout.json'
import Image from 'next/image'
import Link from 'next/link'

const Mission = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutData.mission.image}
              alt="Padel mission"
              width={400}
              height={450}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              {aboutData.mission.headline}
            </h2>
            <p className="font-inter text-base text-black/50 mb-8">
              {aboutData.mission.paragraph}
            </p>
            <Link
              href={aboutData.mission.ctaLink}
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {aboutData.mission.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission