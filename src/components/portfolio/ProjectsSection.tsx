import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    link: "#",
  },
  {
    id: 2,
    title: "Secure Voting System",
    tagline: "Democracy, digitized",
    description: "A comprehensive MERN-based online voting platform with military-grade encryption, real-time analytics dashboards, and audit-ready transparency for campus elections.",
    image: votingPreview,
    link: "#",
  },
  {
    id: 3,
    title: "Spark Launchpad",
    tagline: "Ideas to implementation",
    description: "A modular, enterprise-ready React + TypeScript SPA built for Corgnetrix. Features cloud-native architecture, component library integration, and performance-first design.",
    image: sparkPreview,
    link: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

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
            <h2 className="text-display mb-2">Featured Work.</h2>
            <p className="text-subtitle text-foreground-secondary">
              Even more impact.
            </p>
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

      {/* Horizontal Scroll Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 lg:px-24 pb-8 scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-shrink-0 w-[340px] md:w-[380px] group"
              style={{ scrollSnapAlign: "start" }}
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
                <h3 className="text-subtitle font-semibold text-foreground">
                  {project.title}.{" "}
                  <span className="text-foreground-secondary font-normal">
                    {project.description}
                  </span>
                </h3>
                
                {/* View Project Link */}
                <a
                  href={project.link}
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

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 px-8 md:px-16 lg:px-24 mt-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
