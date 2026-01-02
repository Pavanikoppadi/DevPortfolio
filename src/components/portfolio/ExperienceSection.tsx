/**
 * =============================================================================
 * ExperienceSection.tsx - Work Experience Timeline
 * =============================================================================
 * 
 * PURPOSE:
 * Displays professional work experience in a timeline-style layout.
 * Each entry includes company logo, role details, and description.
 * 
 * LAYOUT:
 * - Centered section with max-width constraint
 * - Vertical list with border separators
 * - Each entry: Logo on left, content on right
 * 
 * ANIMATIONS:
 * - Section title fades up when entering viewport
 * - Experience entries stagger in with increasing delays
 * - Uses useInView with amount: 0.1 for reliable triggering
 * 
 * DATA STRUCTURE:
 * Each experience includes: role, company, type, period, location, description, logo
 * 
 * STYLING:
 * - Company logos displayed in white rounded containers
 * - Muted metadata text (company, type, period, location)
 * - Border separators between entries
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// React hook for refs
import { useRef } from "react";

// Company logo assets (imported for bundling optimization)
import electriconLogo from "@/assets/electricon-logo.png";
import pilotLogo from "@/assets/pilot-logo.png";
import aaraLearnLogo from "@/assets/aaralearn-logo.png";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Experiences Array
 * 
 * Professional work history in reverse chronological order.
 * Most recent experience appears first.
 * 
 * @property {string} role - Job title
 * @property {string} company - Company name
 * @property {string} type - Employment type (Internship, Part-time, etc.)
 * @property {string} period - Date range
 * @property {string} location - Work location (Remote, On-site)
 * @property {string} description - Role responsibilities and achievements
 * @property {string} logo - Imported company logo image
 */
const experiences = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Electricon Wiz",
    type: "Internship",
    period: "Oct 2025 - Present",
    location: "Remote",
    description: "Architected intelligent automation pipelines and AI-integrated web applications. Led front-end development with React while implementing machine learning models for predictive analytics.",
    logo: electriconLogo,
  },
  {
    role: "Software Developer Intern",
    company: "Pilot Mobility",
    type: "Internship",
    period: "May 2025 - Sep 2025",
    location: "On-site",
    description: "Built and optimized cloud-native applications with focus on performance and scalability. Collaborated on API development and database optimization for mobile-first platforms.",
    logo: pilotLogo,
  },
  {
    role: "Technical Intern",
    company: "AaraLearn",
    type: "Part-time",
    period: "Nov 2024 - Jan 2025",
    location: "Remote",
    description: "Built and optimized a responsive website using WordPress and Gen AI tools. Improved accessibility by 35%, site speed by 20%, and workflow efficiency by 40%. Contributed to an NGO platform impacting thousands of underprivileged students.",
    logo: aaraLearnLogo,
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * ExperienceSection Component
 * 
 * Renders a timeline of professional work experiences.
 * Each entry displays company info, role details, and description.
 */
export const ExperienceSection = () => {
  // ===========================================================================
  // REFS & ANIMATION STATE
  // ===========================================================================
  
  /**
   * Ref attached to section for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Tracks if section is visible in viewport
   * amount: 0.1 triggers when 10% of section is visible
   * This ensures animation triggers reliably on scroll
   */
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    // Section with ID for navigation anchoring
    <section id="experience" className="section-full" ref={ref}>
      <div className="section-container">
        
        {/* ================================================================== */}
        {/* SECTION HEADER                                                     */}
        {/* Centered title with fade-up animation                              */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Experience</h2>
        </motion.div>

        {/* ================================================================== */}
        {/* EXPERIENCE LIST                                                    */}
        {/* Vertical timeline with border separators                           */}
        {/* ================================================================== */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              // Fade up animation for each entry
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              // Staggered delay based on index
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              // Border between entries, removed on last item
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              {/* --------------------------------------------------------------- */}
              {/* EXPERIENCE ENTRY LAYOUT                                         */}
              {/* Logo on left, content on right                                  */}
              {/* --------------------------------------------------------------- */}
              <div className="flex gap-4">
                
                {/* ============================================================= */}
                {/* COMPANY LOGO                                                  */}
                {/* Displayed in white rounded container for visibility           */}
                {/* ============================================================= */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>

                {/* ============================================================= */}
                {/* CONTENT - Role, Company Info, Description                     */}
                {/* ============================================================= */}
                <div className="min-w-0 flex-1">
                  
                  {/* Role Title - Primary text */}
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  
                  {/* Metadata Line - Company, type, period, location */}
                  <p className="text-sm md:text-base text-muted-foreground mt-0.5">
                    {exp.company} • {exp.type} | {exp.period} | {exp.location}
                  </p>
                  
                  {/* Description - Role details and achievements */}
                  <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
