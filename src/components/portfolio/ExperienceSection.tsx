/**
 * =============================================================================
 * ExperienceSection.tsx - Work Experience Timeline
 * =============================================================================
 * 
 * PURPOSE:
 * Displays professional experience with action-oriented bullet points.
 * Each entry: role, company, dates, 3 concrete bullets.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Company logos
import electriconLogo from "@/assets/electricon-logo.png";
import pilotLogo from "@/assets/pilot-logo.png";
import aaraLearnLogo from "@/assets/aaralearn-logo.png";

// =============================================================================
// DATA - Action-oriented bullet points
// =============================================================================

const experiences = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Electricon Wiz",
    type: "Internship",
    period: "Oct 2025 - Present",
    location: "Remote",
    bullets: [
      "Built AI-integrated web apps using React, TypeScript, and OpenAI API",
      "Designed automation pipelines that reduced manual data processing by 60%",
      "Led front-end development and collaborated with ML team on model integration",
    ],
    logo: electriconLogo,
  },
  {
    role: "Software Developer Intern",
    company: "Pilot Mobility",
    type: "Internship",
    period: "May 2025 - Sep 2025",
    location: "On-site",
    bullets: [
      "Shipped cloud-native features using Node.js, Express, and PostgreSQL",
      "Optimized API response times by 35% through query optimization",
      "Collaborated with product team to deliver mobile-first user experiences",
    ],
    logo: pilotLogo,
  },
  {
    role: "Technical Intern",
    company: "AaraLearn",
    type: "Part-time",
    period: "Nov 2024 - Jan 2025",
    location: "Remote",
    bullets: [
      "Built and deployed a responsive website using WordPress and AI tools",
      "Improved site accessibility by 35% and page load speed by 20%",
      "Contributed to an NGO platform impacting thousands of students",
    ],
    logo: aaraLearnLogo,
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section-full" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Experience</h2>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              <div className="flex gap-4">
                
                {/* Company Logo */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  
                  {/* Role Title */}
                  <h3 className="text-body font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  
                  {/* Metadata */}
                  <p className="text-caption text-foreground-secondary mt-0.5">
                    {exp.company} • {exp.type} | {exp.period} | {exp.location}
                  </p>
                  
                  {/* Bullet Points - Action-oriented */}
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-caption text-foreground/80">
                        <span className="text-foreground-secondary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
