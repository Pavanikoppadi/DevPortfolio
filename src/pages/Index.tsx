/**
 * =============================================================================
 * Index.tsx - Portfolio Home Page
 * =============================================================================
 * 
 * PURPOSE:
 * Main entry point for the portfolio website.
 * Composes all section components in a structured vertical layout.
 * 
 * STRUCTURE (Optimized for recruiter scanning):
 * 
 * 1. HERO - Immediate value proposition
 * 2. VIDEO - Visual intro
 * 3. PROJECTS - Proof of capability (most important)
 * 4. EXPERIENCE - Credibility and track record
 * 5. EDUCATION - Academic background
 * 6. WORKFLOW - Development process
 * 7. SKILLS - Technical capabilities
 * 8. TESTIMONIALS - Social proof
 * 9. LEARNING - Continuous improvement
 * 10. ACHIEVEMENTS - Recognition
 * 11. ABOUT - Personal story
 * 12. INTERESTS - Beyond code
 * 13. CONTACT & FOOTER - Call to action
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Layout wrapper component
import { MainLayout } from "@/components/portfolio/MainLayout";

// Hero sections
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";

// Video section
import { VideoSection } from "@/components/portfolio/VideoSection";

// Core sections (priority order for recruiters)
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { WorkflowSection } from "@/components/portfolio/WorkflowSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { LearningSection } from "@/components/portfolio/LearningSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";

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
 * Sections ordered for maximum recruiter impact in under 60 seconds.
 */
const Index = () => {
  return (
    <MainLayout>
      
      {/* =================================================================== */}
      {/* SECTION 1: HERO                                                     */}
      {/* Immediate value proposition - who you are, what you do              */}
      {/* =================================================================== */}
      
      <div id="home">
        <CreativeHeroSection />
      </div>
      
      <HeroSection />
      
      {/* =================================================================== */}
      {/* SECTION 2: VIDEO                                                    */}
      {/* Visual introduction                                                 */}
      {/* =================================================================== */}
      
      <VideoSection />
      
      {/* =================================================================== */}
      {/* SECTION 3: PROJECTS (MOST IMPORTANT)                                */}
      {/* Proof of capability - what you've built                             */}
      {/* =================================================================== */}
      
      <ProjectsSection />
      
      {/* =================================================================== */}
      {/* SECTION 4: EXPERIENCE                                               */}
      {/* Credibility - where you've worked                                   */}
      {/* =================================================================== */}
      
      <ExperienceSection />
      
      {/* =================================================================== */}
      {/* SECTION 5: EDUCATION                                                */}
      {/* Academic background                                                 */}
      {/* =================================================================== */}
      
      <EducationSection />
      
      {/* =================================================================== */}
      {/* SECTION 6: WORKFLOW                                                 */}
      {/* Development process                                                 */}
      {/* =================================================================== */}
      
      <WorkflowSection />
      
      {/* =================================================================== */}
      {/* SECTION 7: SKILLS                                                   */}
      {/* Technical capabilities - grouped by category                        */}
      {/* =================================================================== */}
      
      <SkillsSection />
      
      {/* =================================================================== */}
      {/* SECTION 8: TESTIMONIALS                                             */}
      {/* Social proof - what others say                                      */}
      {/* =================================================================== */}
      
      <TestimonialsSection />
      
      {/* =================================================================== */}
      {/* SECTION 9: LEARNING                                                 */}
      {/* Continuous improvement                                              */}
      {/* =================================================================== */}
      
      <LearningSection />
      
      {/* =================================================================== */}
      {/* SECTION 10: ACHIEVEMENTS                                            */}
      {/* Recognition and accomplishments                                     */}
      {/* =================================================================== */}
      
      <AchievementsSection />
      
      {/* =================================================================== */}
      {/* SECTION 11: ABOUT                                                   */}
      {/* Personal story - who you are beyond work                            */}
      {/* =================================================================== */}
      
      <AboutSection />
      
      {/* =================================================================== */}
      {/* SECTION 12: INTERESTS                                               */}
      {/* Beyond code - hobbies and interests                                 */}
      {/* =================================================================== */}
      
      <InterestsSection />
      
      {/* =================================================================== */}
      {/* SECTION 13: CONTACT & FOOTER                                        */}
      {/* Call-to-action and copyright                                        */}
      {/* =================================================================== */}
      
      <ContactSection />
      
      <Footer />
      
    </MainLayout>
  );
};

export default Index;
