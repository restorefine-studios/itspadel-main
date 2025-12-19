"use client"

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

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
  const tabs: Tab[] = [
    {
      "title": "Gear",
      "image": "/itspadel-game-rackets.webp",
      "content": {
        "racket": {
          "headline": "Padel Racket",
          "paragraph": "A padel racket is similar to a tennis racket, but typically has a shorter handle, a solid hitting surface that is perforated with small holes to reduce air resistance and control."
        },
        "shoes": {
          "headline": "Court Shoes",
          "paragraph": "Padel shoes are similar to tennis shoes but provide ankle support and rubber reinforcements for durability."
        },
        "balls": {
          "headline": "Padel Balls",
          "paragraph": "Padel balls have less pressure, so the ball bounces less than a tennis ball. The size of a padel ball is also a little bit smaller than a tennis ball."
        }
      }
    },
    {
      "title": "The Rules",
      "image": "",
      "content": "Padel matches should be played on a regulation padel court that is 20m x 10m. If the ball goes directly into the opponent's glass wall, it counts as out. Before the ball hits the opponent's glass wall, it must bounce on the ground. You can play it on the volley (not on serve), on the half-volley or let the ball bounce on a glass wall. You can also hit the ball on your own glass wall to get it over to your opponent's half of the field. You must not hit the ball in the grid/cage on your side. The rules in padel are in many cases similar to the rules of tennis, but there are some exceptions, such as rules regarding the walls. Padel games shall be played between two pairs of players using regulation padel racquets. Each match begins with a serve, which must be done underarm but like tennis must go diagonally into the service box in the opponent's court. Both teams must attempt to score more points than their opponents. The opposition wins a point if: the ball bounces twice, the ball strikes you or a teammate or the ball hits the wire fencing or another fixture before going over the net or going into the opponent's court (out of bounds)."
    },
    {
      "title": "The Score",
      "image": "",
      "content": "Padel follows the same scoring structure as tennis. However, its unique rules, allowing players to use both the back and side walls, lead to longer rallies compared to a typical tennis match. In padel, success is driven more by tactics than by sheer power or strength. Matches are typically played over the best of 3 or 5 sets, with each set requiring 6 game victories to win. Scoring within a game progresses as 0, 15, 30, 40, and then game. If the score reaches 40-40, players must secure a two-point lead to win the game. To win a set, a player or team must be the first to secure 6 games. If the score ties at 5-5, the competition continues until someone wins 7 games. Should the set reach 6-6, a tie-break is played. This tie-break is won by the first player or team to reach 7 points, but they must also lead by at least 2 points to claim victory."
    },
    {
      "title": "The Serve",
      "image": "",
      "content": "In padel, the serve is performed underarm, with the ball struck at or below waist level. Unlike in tennis, where you throw the ball up, here, you must bounce the ball on the ground first. The bounce should occur behind the server's line, between the center line and the sidewall. The serve must be directed diagonally, landing in the opponent's corresponding service box. It's also considered valid if the ball bounces off the opponent's glass wall, but it is a fault if it hits the grid. Similar to tennis, you are allowed two serves. If your first serve is a fault, you get a second chance. Failing on the second serve results in a double fault, giving the point to your opponent. If the ball touches the net during the serve but still lands correctly in the service box, the serve is replayed."
    },
    {
      "title": "Glass Walls",
      "image": "",
      "content": "When receiving a ball, you can allow it to bounce off the glass wall after it has hit the ground; the ball remains in play. You can also use your own glass wall to return the ball, which can be particularly helpful when you're in a tough spot. The grid can also keep the ball in play when receiving, as long as the ball first bounces on the ground before hitting the grid (this rule doesn't apply to the serve). If you hit the ball into the grid on your side of the court, you lose the point. However, if the ball on the opponent's side goes directly into their grid or glass wall without bouncing on the ground first, it is considered out of play."
    }
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [selectedChild, setSelectedChild] = useState<{headline: string, paragraph: string} | null>(null)



  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">How To Play Padel</h2>
        </div>

        <div className="bg-[#EEEDED] rounded-full p-2 flex w-fit mx-auto mb-12">
          {tabs.map((tab: Tab, index: number) => (
            <button
              key={index}
              className={`px-8 py-3 rounded-full font-inter font-medium text-base tracking-tighter ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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
        </div>
      </div>
    </section>
  )
}

export default HowToPlay