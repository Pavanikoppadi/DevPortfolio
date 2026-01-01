/**
 * Index Page - Portfolio Home
 * 
 * Main entry point for the portfolio website.
 * Composes all section components in a structured layout.
 * Uses MainLayout for the overall page structure with fixed sidebar.
 */

import { MainLayout } from "@/components/portfolio/MainLayout";
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { VideoSection } from "@/components/portfolio/VideoSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { WorkflowSection } from "@/components/portfolio/WorkflowSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ToolboxSection } from "@/components/portfolio/ToolboxSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { LearningSection } from "@/components/portfolio/LearningSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";
import { LifestyleSection } from "@/components/portfolio/LifestyleSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section - Introduction */}
      <div id="home">
        <CreativeHeroSection />
      </div>
      
      {/* Secondary Hero - Tagline */}
      <HeroSection />
      
      {/* About Section - Personal Statement */}
      <AboutSection />
      
      {/* Video Section - Introduction Video */}
      <VideoSection />
      
      {/* Capabilities - Skills Overview */}
      <CapabilitiesSection />
      
      {/* Projects - Featured Work */}
      <ProjectsSection />
      
      {/* Experience - Work History */}
      <ExperienceSection />
      
      {/* Education - Academic Background */}
      <EducationSection />
      
      {/* Workflow - Development Process */}
      <WorkflowSection />
      
      {/* Skills - Technologies */}
      <SkillsSection />
      
      {/* Toolbox - Tools & Software */}
      <ToolboxSection />
      
      {/* Learning - Continuous Growth */}
      <LearningSection />
      
      {/* Achievements - Recognition */}
      <AchievementsSection />
      
      {/* Interests - Beyond Code */}
      <InterestsSection />
      
      {/* Lifestyle - Photo Gallery */}
      <LifestyleSection />
      
      {/* Contact - Get in Touch */}
      <ContactSection />
      
      {/* Footer - Copyright */}
      <Footer />
    </MainLayout>
  );
};

export default Index;
