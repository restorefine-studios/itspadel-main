import Hero from '../components/Hero'
import HowToPlay from '../components/WhatIsPadel/HowToPlay'
import PadelVsTennis from '../components/WhatIsPadel/PadelVsTennis'
import PrivateCoaching from '../components/WhatIsPadel/PrivateCoaching'
import Playtomic from '../components/WhatIsPadel/Playtomic'

export default function WhatIsPadel () {
  return (
    <main>
      <Hero
        image="/itspadel-how-to-padel.webp"
        headline="New To Padel?"
        paragraph="Padel is a fast-paced and addictive racket sport that combines the best elements of tennis and squash."
      />
      <HowToPlay />
      <PadelVsTennis />
      <PrivateCoaching />
      <Playtomic />
    </main>
  )
}

