/**
 * =============================================================================
 * CapabilitiesSection.tsx - Technical Skills Overview
 * =============================================================================
 * 
 * PURPOSE:
 * Displays technical capabilities in a 2x2 grid of cards.
 * Each card shows an icon, title, description, and skill tags.
 * 
 * ANIMATIONS:
 * - Title fades up on scroll
 * - Cards stagger in with increasing delays
 * - Apple-style hover: lift, glow, and icon bounce
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Layout, Server, Code2 } from "lucide-react";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

const capabilities = [
  {
    icon: Brain,
    title: "AI & Intelligence",
    description: "Building systems that think, learn, and adapt.",
    skills: ["OpenAI APIs", "Machine Learning", "Computer Vision", "Automation"],
  },
  {
    icon: Layout,
    title: "Front-End Experience",
    description: "Crafting interfaces that feel intuitive and alive.",
    skills: ["React", "Next.js", "TypeScript", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Back-End & Cloud",
    description: "Engineering infrastructure that scales effortlessly.",
    skills: ["Node.js", "REST APIs", "AWS/Azure", "CI/CD"],
  },
  {
    icon: Code2,
    title: "Engineering Foundations",
    description: "Solid fundamentals powering every solution.",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="section-full" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Capabilities</h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              // Apple-style hover with lift and subtle glow
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="p-8 rounded-2xl border border-border bg-background group hover:border-foreground/20 hover:shadow-[0_10px_40px_-10px_hsl(var(--foreground)/0.1)] transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                
                {/* Icon with bounce animation on hover */}
                <motion.div 
                  className="p-3 rounded-xl bg-background-secondary group-hover:bg-foreground/5 transition-colors duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <cap.icon className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-body text-foreground-secondary mb-4">
                    {cap.description}
                  </p>
                  
                  {/* Skill Tags with staggered hover */}
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.15 + skillIndex * 0.05 + 0.3 
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-micro rounded-full bg-background-secondary text-foreground-secondary hover:bg-foreground/10 hover:text-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};