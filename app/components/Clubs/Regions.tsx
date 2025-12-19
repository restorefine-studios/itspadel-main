"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import clubsData from '../../../languages/padelclubs.json'

const Regions = () => {
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

  const regionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const clubVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  const regions = Object.values(clubsData.regions)

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Find Your Club</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regions.map((region: {name: string, clubs: {name: string, courts: string, link: string, status?: string}[]}, index: number) => (
            <motion.div
              key={index}
              className="mb-16"
              variants={regionVariants}
            >
              <h3 className="font-bison text-3xl mb-8 text-center">{region.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.clubs.map((club: {name: string, courts: string, link: string, status?: string}, clubIndex: number) => (
                  <motion.div
                    key={clubIndex}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                    variants={clubVariants}
                  >
                    <h4 className="font-bison text-xl mb-2">{club.name}</h4>
                    <p className="font-inter text-gray-600 mb-4">{club.courts}</p>
                    {club.status && (
                      <p className="font-inter text-[#009FF3] font-medium mb-4">{club.status}</p>
                    )}
                    <Link
                      href={club.link}
                      className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
                    >
                      View Club
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Regions