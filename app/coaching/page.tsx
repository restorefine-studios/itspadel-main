import type { Metadata } from "next";
import CoachingHero from "../components/Coaching/CoachingHero";
import Overview from "../components/Coaching/Overview";
import Academy from "../components/Coaching/Academy";
import CoachProfile from "../components/Coaching/CoachProfile";
import Clubs from "../components/Coaching/Clubs";
import Playtomic from "../components/Coaching/Playtomic";
import coachingData from "../../languages/padelcoaching.json";

export const metadata: Metadata = {
  title: "Padel Coaching & Lessons | Private & Group Sessions – itspadel",
  description: "Level up your padel with expert coaching at itspadel. Private lessons, group sessions, and padel academy programmes for all skill levels in East Kilbride, Scotland.",
  keywords: [
    "padel coaching East Kilbride",
    "padel lessons Scotland",
    "padel academy UK",
    "private padel coaching",
    "padel training Scotland",
    "padel instructor East Kilbride",
    "learn padel coaching",
    "padel group lessons",
    "padel beginners coaching",
    "itspadel coaching",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/coaching",
  },
  openGraph: {
    title: "Padel Coaching & Lessons | Private & Group Sessions – itspadel",
    description: "Expert padel coaching at itspadel — private lessons, group sessions, and academy programmes for all levels in East Kilbride.",
    url: "https://www.itspadel.co.uk/coaching",
  },
  twitter: {
    title: "Padel Coaching & Lessons | Private & Group Sessions – itspadel",
    description: "Expert padel coaching at itspadel — private lessons, group sessions, and academy programmes for all levels in East Kilbride.",
  },
};

export default function Coaching() {
  return (
    <main>
      <CoachingHero image={coachingData.hero.backgroundImage} />
      <Overview data={coachingData.overview} />
      <Academy data={coachingData.academy} />
      <CoachProfile data={coachingData.coaches} />
      <Clubs />
      <Playtomic />
    </main>
  );
}
