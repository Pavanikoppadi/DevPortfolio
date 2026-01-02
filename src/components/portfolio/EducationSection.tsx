/**
 * =============================================================================
 * EducationSection.tsx - Academic Background
 * =============================================================================
 * 
 * PURPOSE:
 * Displays educational background with institution details.
 * Clean, minimal design with institution logo.
 * 
 * LAYOUT:
 * - Centered section with title
 * - Horizontal card layout: Logo on left, details on right
 * - Border separator between entries (if multiple)
 * 
 * ANIMATIONS:
 * - Title fades up on scroll
 * - Education entries stagger in
 * 
 * DATA:
 * Currently shows single entry for B.Tech degree.
 * Structure supports multiple entries if needed.
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// React hook for refs
import { useRef } from "react";

// Institution logo asset
import svecwLogo from "@/assets/svecw-logo.png";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Education Array
 * 
 * Academic history entries.
 * Structure supports multiple institutions if needed.
 * 
 * @property {string} institution - School/university name
 * @property {string} degree - Degree name and field
 * @property {string} details - CGPA, graduation date, or other details
 * @property {string} logo - Imported institution logo image
 */
const education = [
  {
    institution: "Shri Vishnu Engineering College for Women",
    degree: "B.Tech in Information Technology",
    details: "CGPA: 8.45/10",
    logo: svecwLogo,
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * EducationSection Component
 * 
 * Renders educational background with institution logos and details.
 */
export const EducationSection = () => {
  // ===========================================================================
  // REFS & ANIMATION STATE
  // ===========================================================================
  
  /**
   * Ref for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Track if section is visible
   * amount: 0.1 for reliable triggering
   */
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    // Section with ID for navigation
    <section id="education" className="section-full" ref={ref}>
      <div className="section-container">
        
        {/* ================================================================== */}
        {/* SECTION HEADER                                                     */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Education</h2>
        </motion.div>

        {/* ================================================================== */}
        {/* EDUCATION LIST                                                     */}
        {/* Constrained width for readability                                  */}
        {/* ================================================================== */}
        <div className="max-w-3xl mx-auto space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              // Fade up animation
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              // Border between entries (removed on last)
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              {/* ------------------------------------------------------------ */}
              {/* EDUCATION ENTRY LAYOUT                                       */}
              {/* Logo on left, content on right                               */}
              {/* ------------------------------------------------------------ */}
              <div className="flex gap-4 items-start">
                
                {/* Institution Logo */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  {/* Institution Name */}
                  <h3 className="text-body font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  
                  {/* Degree */}
                  <p className="text-caption text-foreground-secondary mt-0.5">
                    {edu.degree}
                  </p>
                  
                  {/* Details (CGPA, etc.) */}
                  <p className="text-caption text-foreground/70 mt-1">
                    {edu.details}
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
