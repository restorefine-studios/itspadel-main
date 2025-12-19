import Hero from '../components/Hero'
import Clubs from '../components/Coaching/Clubs'
import Playtomic from '../components/Coaching/Playtomic'

export default function Coaching () {
  return (
    <main>
      <Hero
        image="/itspadel-personal-coaching.webp"
        headline="It's Padel Club Coaching"
      />
      <Clubs />
      <Playtomic />
    </main>
  )
}

