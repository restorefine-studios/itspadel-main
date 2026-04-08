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
  title: "Its Padel - Indoor Padel Court",
  description: "Providing competitive padel sporting, immersive community, and a vibrant padel experience all over UK",
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
