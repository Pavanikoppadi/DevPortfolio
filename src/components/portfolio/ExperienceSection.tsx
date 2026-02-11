/**
 * ExperienceSection - Enhanced with micro-animations on bullets and badges
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

import electriconLogo from "@/assets/electricon-logo.png";
import pilotLogo from "@/assets/pilot-logo.png";
import aaraLearnLogo from "@/assets/aaralearn-logo.png";

const experiences = [
  {
    period: "Oct 2025 - Present",
    type: "Internship",
    location: "Remote",
    role: "AI Full Stack Engineer",
    company: "Electricon Wiz",
    bullets: [
      "Shipped AI interview platform handling 10K+ inferences/day",
      "Reduced LLM costs by 40% using caching + prompt optimization",
      "Built RAG pipeline processing 50K+ documents with 95% accuracy",
    ],
    logo: electriconLogo,
  },
  {
    period: "May 2025 - Sep 2025",
    type: "Internship",
    location: "On-site",
    role: "Full-Stack Developer",
    company: "Pilot Mobility",
    bullets: [
      "Built analytics dashboard used by 500+ active users",
      "Maintained 99.9% uptime real-time chat system",
      "Optimized API response times by 35% through query optimization",
    ],
    logo: pilotLogo,
  },
  {
    period: "Nov 2024 - Jan 2025",
    type: "Part-time",
    location: "Remote",
    role: "Technical Intern",
    company: "AaraLearn",
    bullets: [
      "Built responsive platform impacting 1000+ students",
      "Improved site accessibility by 35% and load speed by 20%",
      "Integrated AI tools for automated content generation",
    ],
    logo: aaraLearnLogo,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center" ref={ref}>
      <div className="section-container">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Experience</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ x: 4 }}
              className="relative py-7 sm:py-8 md:py-10 border-b border-border/60 last:border-b-0 transition-colors hover:bg-muted/20 rounded-xl px-2 -mx-2"
            >
              <div className="flex gap-4 sm:gap-5 md:gap-6">
                
                {/* Company Logo with Glow */}
                <div className="relative shrink-0 rounded-xl sm:rounded-2xl">
                  <GlowingEffect blur={0} borderWidth={1} spread={15} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <motion.div
                    className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-sm"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" decoding="async" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                  </motion.div>
                </div>

                <div className="min-w-0 flex-1">
                  {/* Period badges with hover */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {[exp.period, exp.type, exp.location].map((badge) => (
                      <motion.span
                        key={badge}
                        className="inline-block text-sm font-medium text-foreground-secondary bg-muted px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--foreground) / 0.08)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-base sm:text-lg text-foreground-secondary mt-1">{exp.company}</p>
                  
                  {/* Bullet Points with staggered entrance */}
                  <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-base sm:text-lg text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.08 + 0.3, duration: 0.4 }}
                      >
                        <motion.span
                          className="text-foreground-secondary mt-1.5"
                          animate={isInView ? { scale: [0, 1.2, 1] } : {}}
                          transition={{ delay: index * 0.15 + i * 0.08 + 0.3, duration: 0.3 }}
                        >
                          •
                        </motion.span>
                        <span>{bullet}</span>
                      </motion.li>
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
