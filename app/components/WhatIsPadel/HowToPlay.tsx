"use client"

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
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
  const data = whatIsPadelData.howToPlay
  const tabs: Tab[] = data.tabs

  const [activeTab, setActiveTab] = useState(0)
  const [selectedChild, setSelectedChild] = useState<{headline: string, paragraph: string} | null>(null)



  return (
    <section className="py-8 md:py-20 px-0 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-0">
          <h2 className="font-bison text-4xl md:text-5xl mb-0">{data.headline}</h2>
        </div>

      <div className='px-8 md:px-0' >
        <div className="bg-[#EEEDED] rounded-full p-2 flex w-auto md:w-fit mx-auto mb-8 md:mb-12 animate-fade-in-1 overflow-auto">
          {tabs.map((tab: Tab, index: number) => (
            <button
              key={index}
              className={`px-6 md:px-8 py-3 rounded-full font-inter font-medium text-sm md:text-base tracking-tighter whitespace-nowrap ${
                activeTab === index
                  ? 'bg-white text-[#009FF3]'
                  : 'text-[#777575] bg-transparent'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>      
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 animate-fade-in-2">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            width={400}
            height={500}
            className="w-full h-[450px] object-cover rounded-3xl"
          />
          <div>
            {(() => {
              const tab = tabs[activeTab]
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
                  <h3 className="font-bison text-4xl mb-1">{content.headline}</h3>
                  <p className="font-inter text-black/50 text-sm md:text-base">{content.paragraph}</p>
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
        </div>
      </div>
    </section>
  )
}

export default HowToPlay