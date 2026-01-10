/**
 * =============================================================================
 * EducationSection.tsx - Academic Background
 * =============================================================================
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import svecwLogo from "@/assets/svecw-logo.png";

const education = [
  {
    institution: "Shri Vishnu Engineering College for Women",
    degree: "B.Tech in Information Technology",
    details: "CGPA: 8.45/10",
    logo: svecwLogo,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="education" className="section-full" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              <div className="flex gap-4 items-start">
                {/* Institution Logo with Glow */}
                <div className="relative shrink-0 rounded-xl">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={15}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                  />
                  <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-body font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-caption text-foreground-secondary mt-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-caption text-foreground/70 mt-1">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
