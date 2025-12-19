import { motion } from 'framer-motion'
import aboutData from '../../../languages/padelabout.json'

const Testimonials = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
          <h2 className="font-bison text-4xl md:text-5xl mb-4">What Our Community Says</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.testimonials.map((testimonial: {quote: string, author: string}, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={itemVariants}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-inter text-base text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-bison text-base text-[#009FF3]">- {testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials