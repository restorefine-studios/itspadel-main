import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import coachingData from '../../../languages/padelcoaching.json'

const Playtomic = () => {
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
            <h2 className="font-bison text-4xl md:text-5xl mb-6">
              {coachingData.playtomic.headline}
            </h2>
            <p className="font-inter text-base text-gray-700 mb-8">
              {coachingData.playtomic.paragraph}
            </p>
            <Link
              to={coachingData.playtomic.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {coachingData.playtomic.ctaText}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={coachingData.playtomic.image}
              alt="Playtomic app"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <img
              src={coachingData.playtomic.playtomicImage}
              alt="Playtomic logo"
              className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full p-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Playtomic