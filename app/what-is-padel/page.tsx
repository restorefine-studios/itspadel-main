import Hero from '../components/Hero'
import HowToPlay from '../components/WhatIsPadel/HowToPlay'
import PadelVsTennis from '../components/WhatIsPadel/PadelVsTennis'
import PrivateCoaching from '../components/WhatIsPadel/PrivateCoaching'
import Playtomic from '../components/WhatIsPadel/Playtomic'
import whatIsPadelData from '../../languages/padelwhatispadel.json'

const WhatIsPadel = () => {
  return (
    <div>
      <Hero
        image={whatIsPadelData.hero.backgroundImage}
        headline={whatIsPadelData.hero.headline}
        paragraph={whatIsPadelData.hero.paragraph}
      />
      <HowToPlay />
      <PadelVsTennis />
      <PrivateCoaching />
      <Playtomic />
    </div>
  )
}

export default WhatIsPadel