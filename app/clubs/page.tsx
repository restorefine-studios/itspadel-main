import Hero from '../components/Hero'
import Regions from '../components/Clubs/Regions'
import Playtomic from '../components/WhatIsPadel/Playtomic'


export default function Clubs () {
  return (
    <main>
      <Hero
        image="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1740&auto=format&fit=crop"
        headline="Our Clubs"
      />
      <Regions />
      <Playtomic />
    </main>
  )
}

