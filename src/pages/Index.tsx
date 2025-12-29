import { MainLayout } from "@/components/portfolio/MainLayout";
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { VideoSection } from "@/components/portfolio/VideoSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ToolboxSection } from "@/components/portfolio/ToolboxSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <MainLayout>
      <div id="home">
        <CreativeHeroSection />
      </div>
      <AboutSection />
      <VideoSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ToolboxSection />
      <AchievementsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </MainLayout>
  );
};

export default Index;
