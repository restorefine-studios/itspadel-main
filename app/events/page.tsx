import Hero from '../components/Hero'
import ContactForm from '../components/Events/ContactForm'
import eventsData from '../../languages/padelevents.json'

const Events = () => {
  return (
    <div>
      <Hero
        image={eventsData.hero.backgroundImage}
        headline={eventsData.hero.headline}
        paragraph={eventsData.hero.paragraph}
      />
      <ContactForm />
    </div>
  )
}

export default Events