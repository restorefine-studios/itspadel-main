import Hero from './../components/Hero'
import Mission from './../components/About/Mission'
import Values from './../components/About/Values'
import Team from './../components/About/Team'
import Reviews from './../components/Reviews'
import Community from './../components/Community'

export default function About() {
  return (
    <main>
      <Hero
        image="/itspadel-gameplay-night.webp"
        headline="We Are It's Padel"
        paragraph="Where the rallies bring you in, but the people make you stay. Play, connect and feel part of something real"
        ctaText="How To Play"
        ctaLink="/what-is-padel"
      />
      <Mission />
      <Values />
      <Team />
      <Reviews />
      <Community />
    </main>
  )
}