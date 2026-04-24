import type { Metadata } from "next";
import Hero from "./../components/Hero";
import Mission from "./../components/About/Mission";
import Values from "./../components/About/Values";
// import Team from "./../components/About/Team";
import aboutData from "../../languages/padelabout.json";
import Reviews from "./../components/Reviews";
import Community from "./../components/Community";

export const metadata: Metadata = {
  title: "About itspadel | Our Mission, Values & Story",
  description: "Learn about itspadel — our mission to grow padel in the UK, our values, and the community we're building in East Kilbride. Premium padel courts with a purpose.",
  keywords: [
    "about itspadel",
    "padel club mission",
    "padel community UK",
    "itspadel story",
    "padel values Scotland",
    "padel East Kilbride about",
    "who is itspadel",
    "padel club team",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/about",
  },
  openGraph: {
    title: "About itspadel | Our Mission, Values & Story",
    description: "Learn about itspadel — our mission to grow padel in the UK and the community we're building in East Kilbride.",
    url: "https://www.itspadel.co.uk/about",
  },
  twitter: {
    title: "About itspadel | Our Mission, Values & Story",
    description: "Learn about itspadel — our mission to grow padel in the UK and the community we're building in East Kilbride.",
  },
};

export default function About() {
	return (
		<main>
			<Hero
				image={aboutData.hero.backgroundImage}
				headline={aboutData.hero.headline}
				paragraph={aboutData.hero.paragraph}
				ctaText={aboutData.hero.ctaText}
				ctaLink={aboutData.hero.ctaLink}
			/>
			<Mission />
			<Values />
			{/* <Team /> */}
			<Reviews />
			<Community />
		</main>
	);
}
