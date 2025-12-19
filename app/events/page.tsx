import Hero from '../components/Hero'
import ContactForm from '../components/Events/ContactForm'

export default function Events () {
  return (
    <main>
      <Hero
        image="/itspadel-event-gameplay.webp"
        headline="Ready For Your Next Padel Event?"
        paragraph="Where the rallies bring you in, but the people make you stay. Play, connect and feel part of something real"
      />
      <ContactForm />
    </main>
  )
}
