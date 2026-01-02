/**
 * =============================================================================
 * AchievementsSection.tsx - Recognition & Awards
 * =============================================================================
 * 
 * PURPOSE:
 * Displays achievements and recognition in a responsive grid.
 * Features Apple-style hover animations and icon effects.
 * 
 * ANIMATIONS:
 * - Cards stagger in on scroll
 * - Hover: lift, border glow, icon scale
 * - Icon has subtle bounce on card hover
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, GraduationCap, Users } from "lucide-react";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

const achievements = [
  {
    icon: Trophy,
    title: "Pragati Cohort 4",
    description: "Selected for elite tech mentorship program",
  },
  {
    icon: Award,
    title: "Coding Competition Winner",
    description: "First place in collegiate programming challenge",
  },
  {
    icon: GraduationCap,
    title: "Certified Developer",
    description: "Multiple industry-recognized certifications",
  },
  {
    icon: Users,
    title: "Campus Leadership",
    description: "Technical club coordination and mentorship",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="section-container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Recognition</h2>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              // Apple-style hover: lift and subtle glow
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-background text-center group hover:border-foreground/20 hover:shadow-[0_15px_50px_-15px_hsl(var(--foreground)/0.12)] transition-all duration-500"
            >
              
              {/* Icon Container with bounce animation */}
              <motion.div 
                className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-background-secondary mb-4 group-hover:bg-foreground/5 transition-colors duration-500"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="font-semibold text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {achievement.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};