"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import coachingData from '../../../languages/padelcoaching.json'

const Clubs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Our Clubs</h2>
          <p className="font-inter text-base text-gray-600">Choose your location for coaching</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coachingData.clubs.map((club: {name: string, link: string}, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={itemVariants}
            >
              <h3 className="font-bison text-2xl mb-4">{club.name}</h3>
              <Link
                href={club.link}
                className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
              >
                View Coaching
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Clubs