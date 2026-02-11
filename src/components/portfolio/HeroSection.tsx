/**
 * =============================================================================
 * HeroSection.tsx - Secondary Tagline
 * =============================================================================
 * 
 * PURPOSE:
 * Reinforces the value proposition with a scannable tagline.
 */

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero max-w-4xl mx-auto"
        >
          Building web apps and AI tools that{" "}
          <span className="text-gradient">ship fast and work reliably</span>
        </motion.h2>
      </div>
    </section>
  );
};
