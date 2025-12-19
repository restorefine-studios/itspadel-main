import Hero from '../components/Hero'
import Clubs from '../components/Coaching/Clubs'
import Playtomic from '../components/Coaching/Playtomic'
import coachingData from '../../languages/padelcoaching.json'

const Coaching = () => {
  return (
    <div>
      <Hero
        image={coachingData.hero.backgroundImage}
        headline={coachingData.hero.headline}
      />
      <Clubs />
      <Playtomic />
    </div>
  )
}

export default Coaching