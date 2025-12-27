import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import project1 from "@/assets/projects/project-1.jpg";
import project2 from "@/assets/projects/project-2.jpg";
import project3 from "@/assets/projects/project-3.jpg";
import project4 from "@/assets/projects/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Resumind.ai",
    description: "An AI-powered resume optimization platform that transforms how candidates present themselves to ATS systems. Real-time suggestions and intelligent scoring.",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "Smart Resume",
    description: "The platform dynamically adapts to your career goals, keeping your achievements in view. Real-time feedback brings your profile to life.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Secure Voting",
    description: "Automatically verifies voter identity. Once they confirm their credentials, the system validates and you decide how to proceed.",
    image: project3,
    link: "#",
  },
  {
    id: 4,
    title: "Spark Launchpad",
    description: "Keeps your project on track while you wait for deployment. Notifies you when builds are ready.",
    image: project4,
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
      {/* Header - aligned with section container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
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

      {/* Horizontal Scroll Container - same padding as header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ 
            scrollSnapType: "x mandatory",
            paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 4rem))",
            paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 4rem))",
          }}
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
              className="flex-shrink-0 w-[300px] md:w-[340px] group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Project Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-2 pr-4">
                <p className="text-body text-foreground">
                  <span className="font-semibold">{project.title}.</span>{" "}
                  <span className="text-foreground-secondary">
                    {project.description}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows - aligned with header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex justify-end gap-3 mt-8">
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
        </div>
      </motion.div>
    </section>
  );
};
