import Hero from '../components/Hero'
import Regions from '../components/Clubs/Regions'
import Playtomic from '../components/WhatIsPadel/Playtomic'
import clubsData from '../../languages/padelclubs.json'


export default function Clubs () {
  return (
    <main>
      <Hero
        image={clubsData.hero.backgroundImage}
        headline={clubsData.hero.headline}
      />
      <Regions />
      <Playtomic />
    </main>
  )
}

