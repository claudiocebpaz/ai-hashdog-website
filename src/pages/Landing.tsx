import Hero from "../components/Hero";
import Bento from "../components/Bento";
import ClosingCTA from "../components/ClosingCTA";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Bento />
      <ClosingCTA />
    </div>
  );
}
