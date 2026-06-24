import Navbar from "../components/Navbar";

import HeroSection from "../sections/HeroSection";
import ProblemSection from "../sections/ProblemSection";
import SolutionSection from "../sections/SolutionSection";
import FeaturesSection from "../sections/FeaturesSection";
import ArchitectureSection from "../sections/ArchitectureSection";
import FooterSection from "../sections/FooterSection";

function LandingPage() {
  return (
    <div className="bg-background text-on-surface">
      <Navbar />

      <HeroSection />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <ProblemSection />

        <SolutionSection />

        <FeaturesSection />

        <ArchitectureSection />

      </div>

      <FooterSection />
    </div>
  );
}

export default LandingPage;
