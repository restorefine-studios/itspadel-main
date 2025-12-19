import Hero from "./components/Hero"
// import DownloadPadel from './components/Home/DownloadPadel'
// import FindYourClub from './components/Home/FindYourClub'
// import FastestGrowing from './components/Home/FastestGrowing'
// import Services from './components/Home/Services'
import Reviews from './components/Reviews'
// import Community from './components/Community'
import FAQ from './components/FAQ'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "It's Padel - Indoor Padel Court",
  description: "Providing competitive padel sporting, immersive community, and a vibrant padel experience all over UK"
}

export default function Home () {
  return (
    <main>
      <Hero
        image="/itspadel-homehero-bg.webp"
        headline="Discover The Padel Lifestyle"
        paragraph="Where the rallies bring you in, but the people make you stay.Play, connect and feel part of something real"
        ctaText="Select Your Club"
        ctaLink="/clubs"
        cta2Text="How to Book"
        cta2Link="https://app.playtomic.io/?utm_source=web-2025"
      />
      {/* <DownloadPadel /> */}
      {/* <FindYourClub />
      <FastestGrowing />
      <Services /> */}
       <Reviews />
       {/* <Community /> */}
       <FAQ />
     </main>
  )
}
