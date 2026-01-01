/**
 * HeroSection Component
 * 
 * Secondary hero section displaying the main tagline.
 * Features animated gradient text for emphasis.
 * Positioned after the CreativeHeroSection for visual flow.
 */

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Tagline Container */}
      <div className="relative z-10 section-container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero max-w-4xl mx-auto"
        >
          Designing intelligent systems where{" "}
          <span className="text-gradient">AI meets usability</span>
        </motion.h1>
      </div>
    </section>
  );
};
