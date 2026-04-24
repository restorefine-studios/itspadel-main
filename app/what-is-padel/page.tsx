import type { Metadata } from "next";
import Hero from '../components/Hero'
import HowToPlay from '../components/WhatIsPadel/HowToPlay'
import PadelVsTennis from '../components/WhatIsPadel/PadelVsTennis'
import PrivateCoaching from '../components/WhatIsPadel/PrivateCoaching'
import Playtomic from '../components/WhatIsPadel/Playtomic'
import whatIsPadelData from '../../languages/padelwhatispadel.json'

export const metadata: Metadata = {
  title: "What Is Padel? | Learn to Play Padel – itspadel",
  description: "New to padel? Discover what padel is, how to play, how it compares to tennis, and why it's the UK's fastest growing racket sport. Start your padel journey at itspadel.",
  keywords: [
    "what is padel",
    "how to play padel",
    "padel rules UK",
    "padel vs tennis",
    "learn padel UK",
    "padel beginner guide",
    "padel sport explained",
    "padel scoring",
    "padel court size",
    "padel racket sport",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/what-is-padel",
  },
  openGraph: {
    title: "What Is Padel? | Learn to Play Padel – itspadel",
    description: "New to padel? Discover what padel is, how to play, and why it's the UK's fastest growing racket sport.",
    url: "https://www.itspadel.co.uk/what-is-padel",
  },
  twitter: {
    title: "What Is Padel? | Learn to Play Padel – itspadel",
    description: "New to padel? Discover what padel is, how to play, and why it's the UK's fastest growing racket sport.",
  },
};

export default function WhatIsPadel () {
  return (
    <main>
      <Hero
        image={whatIsPadelData.hero.backgroundImage}
        headline={whatIsPadelData.hero.headline}
        paragraph={whatIsPadelData.hero.paragraph}
      />
      <HowToPlay />
      <PadelVsTennis />
      <PrivateCoaching />
      <Playtomic />
    </main>
  )
}

