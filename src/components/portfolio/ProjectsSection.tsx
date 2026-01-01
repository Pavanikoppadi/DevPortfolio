import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import resumindPreview from "@/assets/projects/resumind-preview.jpg";
import votingPreview from "@/assets/projects/voting-system-preview.jpg";
import sparkPreview from "@/assets/projects/spark-launchpad-preview.jpg";

const projects = [
  {
    id: 1,
    title: "Resumind.ai",
    tagline: "Intelligence meets opportunity",
    description: "An AI-powered resume optimization platform that transforms how candidates present themselves to ATS systems. Real-time suggestions, intelligent scoring, and seamless CI/CD deployment.",
    image: resumindPreview,
    link: "https://github.com/Pavanikoppadi/ai-resumebulider-demo",
  },
  {
    id: 2,
    title: "Secure Voting System",
    tagline: "Democracy, digitized",
    description: "A comprehensive MERN-based online voting platform with military-grade encryption, real-time analytics dashboards, and audit-ready transparency for campus elections.",
    image: votingPreview,
    link: "https://github.com/Pavanikoppadi/CollegeOnlineVoting",
  },
  {
    id: 3,
    title: "Corgnetrix Spark Launchpad",
    tagline: "Ideas to implementation",
    description: "A modular, enterprise-ready React + TypeScript SPA built for Corgnetrix. Features cloud-native architecture, component library integration, and performance-first design.",
    image: sparkPreview,
    link: "https://github.com/Pavanikoppadi/corgnetrix-spark-launchpad",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-section" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-display">Featured Work.</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-body font-medium"
          >
            View all projects
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Grid Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 pb-8"
        >
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <p className="text-subtitle text-foreground">
                  <span className="font-semibold">{project.title}.</span>{" "}
                  <span className="text-foreground-secondary font-normal">
                    {project.description}
                  </span>
                </p>
                
                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors text-body-sm font-medium group/link"
                >
                  View Project
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
