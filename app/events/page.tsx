import type { Metadata } from "next";
import Hero from '../components/Hero'
import ContactForm from '../components/Events/ContactForm'
import eventsData from '../../languages/padelevents.json'

export const metadata: Metadata = {
  title: "Padel Events & Private Venue Hire | Book Your Event – itspadel",
  description: "Host your next event at itspadel — birthdays, corporate events, Christmas parties, and full venue hire. Bespoke padel experiences in East Kilbride, Scotland.",
  keywords: [
    "padel events East Kilbride",
    "padel venue hire Scotland",
    "corporate padel events",
    "padel birthday party",
    "private padel hire",
    "padel events UK",
    "padel Christmas party",
    "padel team building",
    "padel group hire",
    "itspadel events",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/events",
  },
  openGraph: {
    title: "Padel Events & Private Venue Hire | Book Your Event – itspadel",
    description: "Host birthdays, corporate events, and full venue hire at itspadel in East Kilbride. Bespoke padel experiences for every occasion.",
    url: "https://www.itspadel.co.uk/events",
  },
  twitter: {
    title: "Padel Events & Private Venue Hire | Book Your Event – itspadel",
    description: "Host birthdays, corporate events, and full venue hire at itspadel in East Kilbride. Bespoke padel experiences for every occasion.",
  },
};

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
