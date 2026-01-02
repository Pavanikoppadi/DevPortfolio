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
 * 2. PROJECTS - Proof of capability (most important)
 * 3. EXPERIENCE - Credibility and track record
 * 4. SKILLS - Technical capabilities
 * 5. TESTIMONIALS - Social proof
 * 6. ABOUT - Personal story
 * 7. CONTACT & FOOTER - Call to action
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Layout wrapper component
import { MainLayout } from "@/components/portfolio/MainLayout";

// Hero sections
import { CreativeHeroSection } from "@/components/portfolio/CreativeHeroSection";
import { HeroSection } from "@/components/portfolio/HeroSection";

// Core sections (priority order for recruiters)
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { AboutSection } from "@/components/portfolio/AboutSection";

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
      {/* SECTION 2: PROJECTS (MOST IMPORTANT)                                */}
      {/* Proof of capability - what you've built                             */}
      {/* =================================================================== */}
      
      <ProjectsSection />
      
      {/* =================================================================== */}
      {/* SECTION 3: EXPERIENCE                                               */}
      {/* Credibility - where you've worked                                   */}
      {/* =================================================================== */}
      
      <ExperienceSection />
      
      {/* =================================================================== */}
      {/* SECTION 4: SKILLS                                                   */}
      {/* Technical capabilities - grouped by category                        */}
      {/* =================================================================== */}
      
      <SkillsSection />
      
      {/* =================================================================== */}
      {/* SECTION 5: TESTIMONIALS                                             */}
      {/* Social proof - what others say                                      */}
      {/* =================================================================== */}
      
      <TestimonialsSection />
      
      {/* =================================================================== */}
      {/* SECTION 6: ABOUT                                                    */}
      {/* Personal story - who you are beyond work                            */}
      {/* =================================================================== */}
      
      <AboutSection />
      
      {/* =================================================================== */}
      {/* SECTION 7: CONTACT & FOOTER                                         */}
      {/* Call-to-action and copyright                                        */}
      {/* =================================================================== */}
      
      <ContactSection />
      
      <Footer />
      
    </MainLayout>
  );
};

export default Index;
