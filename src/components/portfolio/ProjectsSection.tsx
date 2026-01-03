/**
 * =============================================================================
 * ProjectsSection.tsx - Featured Projects (Mini Case Studies)
 * =============================================================================
 * 
 * PURPOSE:
 * Displays featured projects as mini case studies for recruiters.
 * Each card: title, one-line description, tech stack, key outcome.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

// Project images
import resumindPreview from "@/assets/projects/resumind-preview.jpg";
import votingPreview from "@/assets/projects/voting-system-preview.jpg";
import sparkPreview from "@/assets/projects/spark-launchpad-preview.jpg";

// =============================================================================
// DATA - Structured as mini case studies
// =============================================================================

const projects = [
  {
    id: 1,
    title: "Resumind.ai",
    subtitle: "AI-powered resume optimization platform",
    bullets: [
      "Analyzes resumes against job descriptions using OpenAI API",
      "Built with Next.js, TypeScript, Supabase, and Tailwind",
      "Improved ATS match rates by 40% for test users",
    ],
    image: resumindPreview,
    link: "https://github.com/Pavanikoppadi/ai-resumebulider-demo",
  },
  {
    id: 2,
    title: "Secure Voting System",
    subtitle: "Campus-wide online voting platform",
    bullets: [
      "End-to-end encrypted voting with real-time result dashboards",
      "Built with MERN stack (MongoDB, Express, React, Node.js)",
      "Handled 2,000+ votes with zero downtime during elections",
    ],
    image: votingPreview,
    link: "https://github.com/Pavanikoppadi/CollegeOnlineVoting",
  },
  {
    id: 3,
    title: "Corgnetrix Spark Launchpad",
    subtitle: "Enterprise-ready React SPA for client",
    bullets: [
      "Modular component library with TypeScript and Tailwind",
      "Built with React, Vite, and cloud-native architecture",
      "Delivered production-ready MVP in 4 weeks",
    ],
    image: sparkPreview,
    link: "https://github.com/Pavanikoppadi/corgnetrix-spark-launchpad",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28" ref={ref}>
      
      {/* Section Header */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10 sm:mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Featured Work.</h2>
          </div>
          
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors text-lg font-medium"
          >
            View all projects
            <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-5 sm:px-6 md:px-12 lg:px-24 pb-6 sm:pb-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info - Left-aligned vertical stack */}
              <div className="space-y-2 sm:space-y-3">
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                
                {/* Subtitle - What it is */}
                <p className="text-base sm:text-lg text-foreground-secondary">
                  {project.subtitle}
                </p>
                
                {/* Bullet Points - What it does, tech, outcome */}
                <ul className="space-y-1.5 text-sm sm:text-base text-foreground/80 pt-1">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-foreground-secondary mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-foreground/70 transition-colors text-sm sm:text-base font-medium group/link pt-3 sm:pt-4"
                >
                  View Project
                  <ArrowUpRight
                    size={14}
                    className="sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
