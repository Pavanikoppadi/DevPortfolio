/**
 * =============================================================================
 * CreativeHeroSection.tsx - Primary Hero Section
 * =============================================================================
 * 
 * PURPOSE:
 * Main hero section with clear value proposition for recruiters.
 * Role + niche in one line, brief tagline, skill highlights, and CTAs.
 */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// =============================================================================
// COMPONENT
// =============================================================================

export const CreativeHeroSection = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 md:py-0">
      
      <div className="relative z-20 text-center px-5 sm:px-6 max-w-3xl mx-auto">
        
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-foreground-secondary text-base sm:text-lg md:text-xl mb-3 sm:mb-4 font-normal"
        >
          Heyy, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-5 sm:mb-6 md:mb-8 tracking-tight"
        >
          Pavani Koppadi
        </motion.h1>

        {/* Role Badge - Clear role + niche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-5 sm:mb-6 md:mb-8"
        >
          <span className="bg-secondary border border-border text-foreground px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium">
            AI Automation & Full-Stack Engineer
          </span>
        </motion.div>

        {/* Value Proposition - What I do and why it matters */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foreground-secondary text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 leading-relaxed"
        >
          I design and build web apps and AI-powered tools that automate real workflows and ship to production quickly.
        </motion.p>

        {/* Skill Highlight Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-14 px-2"
        >
          <span className="text-sm sm:text-base px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted text-foreground-secondary border border-border">
            TypeScript, React/Next.js
          </span>
          <span className="text-sm sm:text-base px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted text-foreground-secondary border border-border">
            AI agents & workflows
          </span>
          <span className="text-sm sm:text-base px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted text-foreground-secondary border border-border">
            End-to-end ownership
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
          {/* Primary - View My Work */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            View My Work
          </a>
          
          {/* Secondary - Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-background hover:bg-muted border border-border text-foreground px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            Contact Me
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border">
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
