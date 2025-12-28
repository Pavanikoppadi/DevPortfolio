import { Header } from "@/components/portfolio/Header";
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { VideoSection } from "@/components/portfolio/VideoSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ToolboxSection } from "@/components/portfolio/ToolboxSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CreativeHeroSection />
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolboxSection />
        <AchievementsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
