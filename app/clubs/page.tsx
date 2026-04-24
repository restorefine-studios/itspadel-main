import type { Metadata } from "next";
import Hero from '../components/Hero'
import Regions from '../components/Clubs/Regions'
import Playtomic from '../components/WhatIsPadel/Playtomic'
import clubsData from '../../languages/padelclubs.json'

export const metadata: Metadata = {
  title: "Padel Clubs in Scotland | Find Your Nearest Club – itspadel",
  description: "Explore itspadel padel clubs across Scotland. Find your nearest location in East Kilbride, book a court online, and join a thriving padel community near you.",
  keywords: [
    "padel clubs Scotland",
    "padel club East Kilbride",
    "padel locations UK",
    "book padel near me",
    "indoor padel clubs Scotland",
    "padel Glasgow",
    "padel courts near me",
    "itspadel clubs",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/clubs",
  },
  openGraph: {
    title: "Padel Clubs in Scotland | Find Your Nearest Club – itspadel",
    description: "Find your nearest itspadel club in Scotland. Book a court and join a growing padel community.",
    url: "https://www.itspadel.co.uk/clubs",
  },
  twitter: {
    title: "Padel Clubs in Scotland | Find Your Nearest Club – itspadel",
    description: "Find your nearest itspadel club in Scotland. Book a court and join a growing padel community.",
  },
};

export default function Clubs () {
  return (
    <main>
      <Hero
        image={clubsData.hero.backgroundImage}
        headline={clubsData.hero.headline}
      />
      <Regions />
      <Playtomic />
    </main>
  )
}

