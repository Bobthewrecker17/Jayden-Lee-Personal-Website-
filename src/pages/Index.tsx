import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ActivitiesSection />
    <AwardsSection />
    <ContactSection />
  </div>
);

export default Index;
