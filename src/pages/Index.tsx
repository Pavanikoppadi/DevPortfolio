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

import { lazy, Suspense } from "react";

// Layout wrapper component (critical - load immediately)
import { MainLayout } from "@/components/portfolio/MainLayout";

// Hero sections (critical - load immediately for first paint)
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";

// Lazy load below-the-fold sections for faster initial load
const VideoSection = lazy(() => import("@/components/portfolio/VideoSection").then(m => ({ default: m.VideoSection })));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import("@/components/portfolio/ExperienceSection").then(m => ({ default: m.ExperienceSection })));
const EducationSection = lazy(() => import("@/components/portfolio/EducationSection").then(m => ({ default: m.EducationSection })));
const WorkflowSection = lazy(() => import("@/components/portfolio/WorkflowSection").then(m => ({ default: m.WorkflowSection })));
const SkillsSection = lazy(() => import("@/components/portfolio/SkillsSection").then(m => ({ default: m.SkillsSection })));
const TestimonialsSection = lazy(() => import("@/components/portfolio/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const LearningSection = lazy(() => import("@/components/portfolio/LearningSection").then(m => ({ default: m.LearningSection })));
const AchievementsSection = lazy(() => import("@/components/portfolio/AchievementsSection").then(m => ({ default: m.AchievementsSection })));
const AboutSection = lazy(() => import("@/components/portfolio/AboutSection").then(m => ({ default: m.AboutSection })));
const InterestsSection = lazy(() => import("@/components/portfolio/InterestsSection").then(m => ({ default: m.InterestsSection })));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/portfolio/Footer").then(m => ({ default: m.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

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
      
      <Suspense fallback={<SectionLoader />}>
        <VideoSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 3: PROJECTS (MOST IMPORTANT)                                */}
      {/* Proof of capability - what you've built                             */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 4: EXPERIENCE                                               */}
      {/* Credibility - where you've worked                                   */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 5: EDUCATION                                                */}
      {/* Academic background                                                 */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <EducationSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 6: WORKFLOW                                                 */}
      {/* Development process                                                 */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <WorkflowSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 7: SKILLS                                                   */}
      {/* Technical capabilities - grouped by category                        */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 8: TESTIMONIALS                                             */}
      {/* Social proof - what others say                                      */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 9: LEARNING                                                 */}
      {/* Continuous improvement                                              */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <LearningSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 10: ACHIEVEMENTS                                            */}
      {/* Recognition and accomplishments                                     */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <AchievementsSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 11: ABOUT                                                   */}
      {/* Personal story - who you are beyond work                            */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 12: INTERESTS                                               */}
      {/* Beyond code - hobbies and interests                                 */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <InterestsSection />
      </Suspense>
      
      {/* =================================================================== */}
      {/* SECTION 13: CONTACT & FOOTER                                        */}
      {/* Call-to-action and copyright                                        */}
      {/* =================================================================== */}
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      
    </MainLayout>
  );
};

export default Index;
