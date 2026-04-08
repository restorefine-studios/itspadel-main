import CoachingHero from "../components/Coaching/CoachingHero";
import Overview from "../components/Coaching/Overview";
import Academy from "../components/Coaching/Academy";
import CoachProfile from "../components/Coaching/CoachProfile";
import Clubs from "../components/Coaching/Clubs";
import Playtomic from "../components/Coaching/Playtomic";
import coachingData from "../../languages/padelcoaching.json";

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
