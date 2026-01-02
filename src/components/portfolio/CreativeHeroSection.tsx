/**
 * =============================================================================
 * CreativeHeroSection.tsx - Primary Hero Section
 * =============================================================================
 * 
 * PURPOSE:
 * The main hero section displayed at the top of the portfolio.
 * Introduces the portfolio owner with animated text and call-to-action buttons.
 * 
 * CONTENT HIERARCHY:
 * 1. Greeting text ("Heyy, I'm") - Informal, friendly introduction
 * 2. Name (large display typography) - Primary visual focus
 * 3. Role badge (pill-shaped) - Professional title
 * 4. Tagline paragraph - Brief professional summary
 * 5. CTA buttons - View Works & Resume download
 * 
 * ANIMATIONS:
 * All elements use staggered fade-up animations for a polished entrance.
 * Delays increase progressively (0.1s increments) for sequential reveal.
 * 
 * STYLING:
 * - Follows Apple Design Guidelines
 * - Clean, minimal typography
 * - Centered layout with max-width constraint
 * - Responsive text sizing (mobile to desktop)
 * 
 * LAYOUT:
 * - Minimum height: 85vh (fills most of viewport)
 * - Centered content vertically and horizontally
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for entrance animations
import { motion } from "framer-motion";

// Arrow icon for resume button
import { ArrowUpRight } from "lucide-react";

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * CreativeHeroSection Component
 * 
 * Renders the main hero/introduction section of the portfolio.
 * Features animated content revealing in sequence on page load.
 */
export const CreativeHeroSection = () => {
  return (
    // =========================================================================
    // SECTION CONTAINER
    // Full-width section with vertical centering and overflow hidden
    // min-h-[85vh] ensures section fills most of viewport height
    // =========================================================================
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* ===================================================================== */}
      {/* CENTER CONTENT CONTAINER                                              */}
      {/* Constrains content width for readability                              */}
      {/* z-20 ensures content appears above any background elements            */}
      {/* ===================================================================== */}
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
        
        {/* ------------------------------------------------------------------- */}
        {/* GREETING TEXT                                                        */}
        {/* Informal introduction with italic styling                            */}
        {/* First element to animate (no delay)                                  */}
        {/* ------------------------------------------------------------------- */}
        <motion.p
          // Fade up from below
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Muted color, light weight, italic for casual feel
          className="text-muted-foreground text-lg md:text-xl mb-2 font-light italic"
        >
          Heyy, I'm
        </motion.p>

        {/* ------------------------------------------------------------------- */}
        {/* NAME - PRIMARY HEADING                                               */}
        {/* Large display typography, main visual focus                          */}
        {/* Responsive sizing from 5xl (mobile) to 8xl (large desktop)           */}
        {/* ------------------------------------------------------------------- */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          // Slight delay for staggered effect
          transition={{ duration: 0.6, delay: 0.1 }}
          // Semibold weight, tight tracking for Apple-style typography
          className="text-foreground text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
        >
          Pavani Koppadi
        </motion.h1>

        {/* ------------------------------------------------------------------- */}
        {/* ROLE BADGE                                                           */}
        {/* Pill-shaped badge showing professional title                         */}
        {/* ------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // inline-block allows centering of the badge
          className="inline-block mb-8"
        >
          {/* Pill-shaped container with border */}
          <span className="bg-secondary border border-border text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-base">
            AI Full Stack Developer
          </span>
        </motion.div>

        {/* ------------------------------------------------------------------- */}
        {/* TAGLINE PARAGRAPH                                                    */}
        {/* Brief professional summary/value proposition                         */}
        {/* ------------------------------------------------------------------- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // Muted text, constrained width, relaxed line height
          className="text-muted-foreground text-sm md:text-lg max-w-md mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          AI-focused full stack developer building scalable, real-world web products.
        </motion.p>

        {/* ------------------------------------------------------------------- */}
        {/* CALL-TO-ACTION BUTTONS                                               */}
        {/* Row of buttons for primary actions                                   */}
        {/* ------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          // Flex row with gap, centered
          className="flex items-center justify-center gap-3"
        >
          
          {/* ================================================================= */}
          {/* PRIMARY BUTTON - View Works                                       */}
          {/* Links to projects section, dark background                        */}
          {/* ================================================================= */}
          <a
            href="#projects"
            // Filled button with hover scale effect
            className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            View Works
          </a>
          
          {/* ================================================================= */}
          {/* SECONDARY BUTTON - Resume Download                                */}
          {/* Downloads PDF resume file                                          */}
          {/* ================================================================= */}
          <a
            href="/pavanideveloperesume.pdf"
            // download attribute triggers file download instead of navigation
            download
            // Outlined button style with icon
            className="inline-flex items-center gap-2 bg-background hover:bg-muted border border-border text-foreground px-4 py-3 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            Resume
            {/* Arrow icon in circular border */}
            <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-border">
              <ArrowUpRight size={14} className="md:w-4 md:h-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
