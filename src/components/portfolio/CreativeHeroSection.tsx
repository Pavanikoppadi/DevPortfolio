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
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-0">
      
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-foreground-secondary text-body mb-2 font-normal"
        >
          Heyy, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground text-hero mb-4 sm:mb-6"
        >
          Pavani Koppadi
        </motion.h1>

        {/* Role Badge - Clear role + niche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4 sm:mb-6"
        >
          <span className="bg-secondary border border-border text-foreground px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-caption font-medium">
            AI Automation & Full-Stack Engineer
          </span>
        </motion.div>

        {/* Value Proposition - What I do and why it matters */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foreground-secondary text-sm sm:text-body-lg max-w-lg mx-auto mb-5 sm:mb-6 px-2"
        >
          I design and build web apps and AI-powered tools that automate real workflows and ship to production quickly.
        </motion.p>

        {/* Skill Highlight Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 px-2"
        >
          <span className="text-xs sm:text-caption px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            TypeScript, React/Next.js
          </span>
          <span className="text-xs sm:text-caption px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            AI agents & workflows
          </span>
          <span className="text-xs sm:text-caption px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            End-to-end ownership
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          
          {/* Primary - View My Work */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-body font-medium transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            View My Work
          </a>
          
          {/* Secondary - Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-background hover:bg-muted border border-border text-foreground px-5 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-body font-medium transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            Contact Me
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-border">
              <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
