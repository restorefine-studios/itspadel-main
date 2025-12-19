import { motion } from 'framer-motion'
import eventsData from '../../../languages/padelevents.json'

const Companies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

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
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Trusted by Leading Companies</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {eventsData.companies.map((company: string, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md text-center"
              variants={itemVariants}
            >
              <p className="font-inter font-medium text-gray-700">{company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Companies