import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import eventsData from '../../../languages/padelevents.json'

const Experience = () => {
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
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1740&auto=format&fit=crop"
              alt="Padel event"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bison text-4xl md:text-5xl mb-6">
              {eventsData.experience.headline}
            </h2>
            <p className="font-inter text-base text-gray-700 mb-8">
              {eventsData.experience.paragraph}
            </p>
            <Link
              to={eventsData.cta.link}
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              {eventsData.cta.text}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience