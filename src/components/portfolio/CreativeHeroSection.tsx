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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
        
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
          className="text-foreground text-hero mb-6"
        >
          Pavani Koppadi
        </motion.h1>

        {/* Role Badge - Clear role + niche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="bg-secondary border border-border text-foreground px-5 py-2.5 rounded-full text-caption font-medium">
            AI Automation & Full-Stack Engineer
          </span>
        </motion.div>

        {/* Value Proposition - What I do and why it matters */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foreground-secondary text-body-lg max-w-lg mx-auto mb-6"
        >
          I design and build web apps and AI-powered tools that automate real workflows and ship to production quickly.
        </motion.p>

        {/* Skill Highlight Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <span className="text-caption px-3 py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            TypeScript, React/Next.js
          </span>
          <span className="text-caption px-3 py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            AI agents & workflows
          </span>
          <span className="text-caption px-3 py-1.5 rounded-full bg-muted text-foreground-secondary border border-border">
            End-to-end ownership
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          
          {/* Primary - View My Work */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background px-7 py-3 rounded-full text-body font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            View My Work
          </a>
          
          {/* Secondary - Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-background hover:bg-muted border border-border text-foreground px-5 py-3 rounded-full text-body font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            Contact Me
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-border">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
