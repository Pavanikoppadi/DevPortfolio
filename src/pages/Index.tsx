/**
 * =============================================================================
 * Index.tsx - Portfolio Home Page
 * =============================================================================
 * 
 * PURPOSE:
 * Main entry point for the portfolio website.
 * Composes all section components in a structured vertical layout.
 * 
 * STRUCTURE:
 * The page is organized in a logical flow from introduction to contact:
 * 
 * 1. HERO SECTIONS
 *    - CreativeHeroSection: Main introduction with name and CTAs
 *    - HeroSection: Secondary tagline
 * 
 * 2. ABOUT
 *    - AboutSection: Personal statement and stats
 *    - VideoSection: Introduction video
 * 
 * 3. SKILLS & WORK
 *    - CapabilitiesSection: Technical skill categories
 *    - ProjectsSection: Featured project showcase
 *    - ExperienceSection: Work history timeline
 * 
 * 4. EDUCATION & PROCESS
 *    - EducationSection: Academic background
 *    - WorkflowSection: Development process steps
 * 
 * 5. TECHNOLOGIES
 *    - SkillsSection: Technology badges
 *    - ToolboxSection: AI/dev tools grid
 * 
 * 6. PERSONAL
 *    - LearningSection: GitHub-style activity graph
 *    - AchievementsSection: Awards and recognition
 *    - InterestsSection: Personal interests
 *    - LifestyleSection: Photo gallery
 * 
 * 7. CONTACT & FOOTER
 *    - ContactSection: Call-to-action
 *    - Footer: Copyright
 * 
 * LAYOUT:
 * All sections are wrapped in MainLayout which provides:
 * - Fixed dark sidebar on desktop
 * - Fixed header on mobile
 * - Scrollable white content container
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Layout wrapper component
import { MainLayout } from "@/components/portfolio/MainLayout";

// Hero sections
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";

// About sections
import { AboutSection } from "@/components/portfolio/AboutSection";
import { VideoSection } from "@/components/portfolio/VideoSection";

// Skills & work sections
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";

// Education & process sections
import { EducationSection } from "@/components/portfolio/EducationSection";
import { WorkflowSection } from "@/components/portfolio/WorkflowSection";

// Technology sections
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ToolboxSection } from "@/components/portfolio/ToolboxSection";

// Personal sections
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { LearningSection } from "@/components/portfolio/LearningSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";
import { LifestyleSection } from "@/components/portfolio/LifestyleSection";

// Contact & footer
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Index Page Component
 * 
 * Renders the complete portfolio as a single-page scrollable experience.
 * All sections are composed vertically within the MainLayout.
 */
const Index = () => {
  return (
    // MainLayout provides the sidebar/header and scrollable content area
    <MainLayout>
      
      {/* =================================================================== */}
      {/* SECTION 1: HERO                                                     */}
      {/* Main introduction and tagline                                       */}
      {/* =================================================================== */}
      
      {/* Hero Section - Introduction (wrapped for navigation anchor) */}
      <div id="home">
        <CreativeHeroSection />
      </div>
      
      {/* Secondary Hero - Tagline */}
      <HeroSection />
      
      {/* =================================================================== */}
      {/* SECTION 2: ABOUT                                                    */}
      {/* Personal statement and video                                        */}
      {/* =================================================================== */}
      
      {/* About Section - Personal Statement */}
      <AboutSection />
      
      {/* Video Section - Introduction Video */}
      <VideoSection />
      
      {/* =================================================================== */}
      {/* SECTION 3: SKILLS & WORK                                            */}
      {/* Technical capabilities and project showcase                         */}
      {/* =================================================================== */}
      
      {/* Capabilities - Skills Overview */}
      <CapabilitiesSection />
      
      {/* Projects - Featured Work */}
      <ProjectsSection />
      
      {/* Experience - Work History */}
      <ExperienceSection />
      
      {/* =================================================================== */}
      {/* SECTION 4: EDUCATION & PROCESS                                      */}
      {/* Academic background and workflow                                    */}
      {/* =================================================================== */}
      
      {/* Education - Academic Background */}
      <EducationSection />
      
      {/* Workflow - Development Process */}
      <WorkflowSection />
      
      {/* =================================================================== */}
      {/* SECTION 5: TECHNOLOGIES                                             */}
      {/* Tech stack and development tools                                    */}
      {/* =================================================================== */}
      
      {/* Skills - Technologies */}
      <SkillsSection />
      
      {/* Toolbox - Tools & Software */}
      <ToolboxSection />
      
      {/* =================================================================== */}
      {/* SECTION 6: PERSONAL                                                 */}
      {/* Learning, achievements, interests, lifestyle                        */}
      {/* =================================================================== */}
      
      {/* Learning - Continuous Growth */}
      <LearningSection />
      
      {/* Achievements - Recognition */}
      <AchievementsSection />
      
      {/* Interests - Beyond Code */}
      <InterestsSection />
      
      {/* Lifestyle - Photo Gallery */}
      <LifestyleSection />
      
      {/* =================================================================== */}
      {/* SECTION 7: CONTACT & FOOTER                                         */}
      {/* Call-to-action and copyright                                        */}
      {/* =================================================================== */}
      
      {/* Contact - Get in Touch */}
      <ContactSection />
      
      {/* Footer - Copyright */}
      <Footer />
      
    </MainLayout>
  );
};

// Export as default for use in App.tsx routing
export default Index;
