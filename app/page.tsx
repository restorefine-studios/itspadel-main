import Hero from "./components/Hero";
import Playtomic from "./components/Coaching/Playtomic";
import Clubs from "./components/Coaching/Clubs";
import FastestGrowing from "./components/Home/FastestGrowing";
import Services from "./components/Home/Services";
import Reviews from "./components/Reviews";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import homeData from "../languages/padelhome.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
  description: "Play padel at itspadel — premium indoor padel courts in East Kilbride. Book a court, join a thriving community, and experience the UK's fastest growing racket sport.",
  keywords: [
    "padel East Kilbride",
    "indoor padel courts Scotland",
    "padel club UK",
    "book padel court",
    "padel community Scotland",
    "padel sport UK",
    "itspadel",
    "padel near me",
    "padel court hire",
    "padel Glasgow",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk",
  },
  openGraph: {
    title: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
    description: "Play padel at itspadel — premium indoor padel courts in East Kilbride. Book a court and experience the UK's fastest growing racket sport.",
    url: "https://www.itspadel.co.uk",
  },
  twitter: {
    title: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
    description: "Play padel at itspadel — premium indoor padel courts in East Kilbride. Book a court and experience the UK's fastest growing racket sport.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero image={homeData.hero.backgroundImage} headline={homeData.hero.headline} paragraph={homeData.hero.paragraph} ctaText={homeData.hero.ctaText} ctaLink={homeData.hero.ctaLink} cta2Text={homeData.hero.cta2Text} cta2Link={homeData.hero.cta2Link} />
      <Playtomic theme="light" />
      <Services />
      <Clubs />
      <FastestGrowing />
      <Reviews />
      <Community />
      <FAQ />
    </main>
  );
}
