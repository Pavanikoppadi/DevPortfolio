/**
 * CreativeHeroSection Component
 * 
 * The main hero section displayed at the top of the portfolio.
 * Features animated introduction text, name, role badge, and call-to-action buttons.
 * Follows Apple Design Guidelines with clean typography and smooth animations.
 */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CreativeHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Center Content Container */}
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
        
        {/* Greeting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl mb-2 font-light italic"
        >
          Heyy, I'm
        </motion.p>

        {/* Name - Large Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
        >
          Pavani Koppadi
        </motion.h1>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <span className="bg-secondary border border-border text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-base">
            AI Full Stack Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-sm md:text-lg max-w-md mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          AI-focused full stack developer building scalable, real-world web products.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          {/* Primary Button - View Works */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            View Works
          </a>
          
          {/* Secondary Button - Resume Download */}
          <a
            href="/pavanideveloperesume.pdf"
            download
            className="inline-flex items-center gap-2 bg-background hover:bg-muted border border-border text-foreground px-4 py-3 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            Resume
            <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-border">
              <ArrowUpRight size={14} className="md:w-4 md:h-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
