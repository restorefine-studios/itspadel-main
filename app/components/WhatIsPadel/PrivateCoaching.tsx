"use client"

import { motion } from 'framer-motion'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'
import Link from 'next/link'

const PrivateCoaching = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-6">
            {whatIsPadelData.privateCoaching.headline}
          </h2>
          <p className="font-inter text-base text-gray-700 mb-8 max-w-2xl mx-auto">
            {whatIsPadelData.privateCoaching.paragraph}
          </p>
          <Link
            href={whatIsPadelData.privateCoaching.ctaLink}
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
          >
            {whatIsPadelData.privateCoaching.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivateCoaching