/**
 * =============================================================================
 * InterestsSection.tsx - Personal Interests Beyond Code
 * =============================================================================
 * 
 * PURPOSE:
 * Displays personal interests/hobbies in a horizontal layout.
 * Features icons with labels and Apple-style hover animations.
 * 
 * ANIMATIONS:
 * - Staggered fade in from bottom
 * - Icon container scales and lifts on hover
 * - Color transition on hover
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Camera, PenTool, Video } from "lucide-react";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

const interests = [
  { icon: Cpu, label: "AI Productivity" },
  { icon: Camera, label: "Photography" },
  { icon: PenTool, label: "Blogging" },
  { icon: Video, label: "Content Creation" },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section-sm" ref={ref}>
      <div className="section-container">
        
        {/* Gradient divider */}
        <div className="divider-gradient mb-16" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Section Label */}
          <p className="text-micro uppercase tracking-[0.2em] text-foreground-secondary mb-8">
            Beyond Code
          </p>
          
          {/* Interests Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                
                {/* Icon Container with Apple-style hover */}
                <motion.div 
                  className="p-4 rounded-2xl bg-background-secondary group-hover:bg-foreground/5 transition-colors duration-500"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    rotate: 3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <interest.icon className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
                </motion.div>
                
                {/* Interest Label */}
                <motion.span 
                  className="text-caption text-foreground-secondary group-hover:text-foreground transition-colors duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  {interest.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};