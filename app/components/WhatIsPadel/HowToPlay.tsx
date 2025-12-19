import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'

interface GearContent {
  racket: { headline: string; paragraph: string };
  shoes: { headline: string; paragraph: string };
  balls: { headline: string; paragraph: string };
}

interface Tab {
  title: string;
  image: string;
  content: string | GearContent;
}

const HowToPlay = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedChild, setSelectedChild] = useState<{headline: string, paragraph: string} | null>(null)

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
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-4">{whatIsPadelData.howToPlay.headline}</h2>
        </motion.div>

        <motion.div
          className="bg-[#EEEDED] rounded-full p-2 flex w-fit mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whatIsPadelData.howToPlay.tabs.map((tab: Tab, index: number) => (
            <motion.button
              key={index}
              className={`px-8 py-3 rounded-full font-inter font-medium text-base tracking-tighter ${
                activeTab === index
                  ? 'bg-white text-[#009FF3]'
                  : 'text-[#777575] bg-transparent'
              }`}
              onClick={() => setActiveTab(index)}
              variants={itemVariants}
            >
              {tab.title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={whatIsPadelData.howToPlay.tabs[activeTab].image}
            alt={whatIsPadelData.howToPlay.tabs[activeTab].title}
            className="w-full h-[450px] object-cover rounded-3xl"
          />
          <div>
            {(() => {
              const tab = whatIsPadelData.howToPlay.tabs[activeTab]
              const isGear = activeTab === 0
              const content = isGear
                ? selectedChild || {
                    headline: tab.title,
                    paragraph: Object.values(tab.content as GearContent).map((item) => item.paragraph).join(' ')
                  }
                : { headline: tab.title, paragraph: tab.content as string }
              return (
                <div className='h-full flex flex-col items-start justify-between' >
                  <div>
                  <h3 className="font-bison text-5xl mb-1">{content.headline}</h3>
                  <p className="font-inter text-black/50 text-base">{content.paragraph}</p>
              </div>
              <div className='w-full' >
                  {isGear && (
                    <div className="mt-6">
                      {Object.values(tab.content as GearContent).map((child, idx: number) => (
                        <div key={idx} className="border-b border-gray-200 last:border-b-0 cursor-pointer">
                          <div
                            onClick={() => setSelectedChild(child)}
                            className="bg-transparent px-0 hover:none flex items-center gap-2 py-2 uppercase text-[#777575] text-sm w-full text-left tracking-tighter"
                          >
                            <PlusIcon className="w-4 h-4" />
                            {child.headline}
                          </div>
                        </div>
                      ))}
                  </div>
                 
                 
                  )}
                   </div>
                </div>

              )
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToPlay