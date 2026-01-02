/**
 * =============================================================================
 * AboutSection.tsx - Personal Statement Section
 * =============================================================================
 * 
 * PURPOSE:
 * Displays a personal statement about the portfolio owner with a two-column
 * layout featuring a bold headline and narrative text with stats.
 * 
 * LAYOUT:
 * - LEFT COLUMN: Bold statement headline with accent text
 * - RIGHT COLUMN: Bio paragraphs and stat cards
 * 
 * ANIMATIONS:
 * - Both columns slide in from opposite sides when scrolled into view
 * - Uses Framer Motion's useInView hook for scroll detection
 * 
 * ACCESSIBILITY:
 * - Semantic section element with ID for navigation
 * - Proper heading hierarchy (h2)
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// React hook for creating refs
import { useRef } from "react";

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * AboutSection Component
 * 
 * Two-column layout with personal statement and statistics.
 * Animates into view when scrolled to.
 */
export const AboutSection = () => {
  // ==========================================================================
  // REFS & ANIMATION STATE
  // ==========================================================================
  
  /**
   * Ref attached to section for scroll detection
   * Used by useInView to determine when section is visible
   */
  const ref = useRef(null);
  
  /**
   * Tracks if section is in viewport
   * 
   * Options:
   * - once: true → Only trigger animation once (no re-animation on scroll back)
   * - margin: "-100px" → Trigger slightly before section enters viewport
   */
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ==========================================================================
  // RENDER
  // ==========================================================================
  
  return (
    // Section with ID for navigation anchoring
    <section id="about" className="section-full" ref={ref}>
      {/* Centered container with max-width */}
      <div className="section-container">
        {/* Two-column grid - stacks on mobile */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ---------------------------------------------------------------- */}
          {/* LEFT COLUMN: Statement Headline                                  */}
          {/* ---------------------------------------------------------------- */}
          <motion.div
            // Slide in from left
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            // Apple-style easing curve
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-display">
              {/* Primary statement text */}
              Engineering with intent.{" "}
              {/* Secondary muted text */}
              <span className="text-foreground-secondary">Build with purpose.</span>
            </h2>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Narrative and Stats                                */}
          {/* ---------------------------------------------------------------- */}
          <motion.div
            // Slide in from right (opposite direction)
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            // Slightly delayed for staggered effect
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* ============================================================ */}
            {/* Bio Paragraphs                                                */}
            {/* ============================================================ */}
            
            {/* First paragraph - Education focus */}
            <p className="text-body text-foreground-secondary leading-relaxed">
              Currently pursuing B.Tech in Information Technology with a CGPA of 8.45, 
              I've dedicated myself to mastering the intersection of artificial intelligence 
              and full-stack development.
            </p>
            
            {/* Second paragraph - Approach and projects */}
            <p className="text-body text-foreground-secondary leading-relaxed">
              My approach is rooted in building scalable, human-centered systems—products 
              that don't just function, but feel inevitable. From AI-powered resume analyzers 
              to secure voting platforms, every project reflects a commitment to engineering 
              excellence.
            </p>
            
            {/* ============================================================ */}
            {/* Stats Cards Row                                               */}
            {/* ============================================================ */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                
                {/* CGPA Stat Card */}
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">8.45</div>
                  <div className="text-caption text-foreground-secondary">CGPA</div>
                </div>
                
                {/* Graduation Year Card */}
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">2027</div>
                  <div className="text-caption text-foreground-secondary">Expected Grad</div>
                </div>
                
                {/* Mindset Card */}
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">AI-First</div>
                  <div className="text-caption text-foreground-secondary">Mindset</div>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
