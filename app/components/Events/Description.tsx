import { motion } from 'framer-motion'
import eventsData from '../../../languages/padelevents.json'

const Description = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-base text-gray-700 max-w-4xl mx-auto">
            {eventsData.description.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Description