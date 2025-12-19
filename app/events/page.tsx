import Hero from '../components/Hero'
import ContactForm from '../components/Events/ContactForm'
import eventsData from '../../languages/padelevents.json'

export default function Events () {
  return (
    <main>
      <Hero
        image={eventsData.hero.backgroundImage}
        headline={eventsData.hero.headline}
        paragraph={eventsData.hero.paragraph}
      />
      <ContactForm />
    </main>
  )
}
