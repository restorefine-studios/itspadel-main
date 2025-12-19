import Hero from './../components/Hero'
import Mission from './../components/About/Mission'
import Values from './../components/About/Values'
import Team from './../components/About/Team'
import aboutData from '../../languages/padelabout.json'
import Reviews from './../components/Reviews'
import Community from './../components/Community'

export default function About() {
  return (
    <main>
      <Hero
        image={aboutData.hero.backgroundImage}
        headline={aboutData.hero.headline}
        paragraph={aboutData.hero.paragraph}
        ctaText={aboutData.hero.ctaText}
        ctaLink={aboutData.hero.ctaLink}
      />
      <Mission />
      <Values />
      <Team />
      <Reviews />
      <Community />
    </main>
  )
}