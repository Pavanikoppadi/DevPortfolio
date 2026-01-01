import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import electriconLogo from "@/assets/electricon-logo.png";
import pilotLogo from "@/assets/pilot-logo.png";
import aaraLearnLogo from "@/assets/aaralearn-logo.png";

const experiences = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Electricon Wiz",
    type: "Internship",
    period: "Oct 2025 - Present",
    location: "Remote",
    description: "Architected intelligent automation pipelines and AI-integrated web applications. Led front-end development with React while implementing machine learning models for predictive analytics.",
    logo: electriconLogo,
  },
  {
    role: "Software Developer Intern",
    company: "Pilot Mobility",
    type: "Internship",
    period: "May 2025 - Sep 2025",
    location: "On-site",
    description: "Built and optimized cloud-native applications with focus on performance and scalability. Collaborated on API development and database optimization for mobile-first platforms.",
    logo: pilotLogo,
  },
  {
    role: "Technical Intern",
    company: "AaraLearn",
    type: "Part-time",
    period: "Nov 2024 - Jan 2025",
    location: "Remote",
    description: "Built and optimized a responsive website using WordPress and Gen AI tools. Improved accessibility by 35%, site speed by 20%, and workflow efficiency by 40%. Contributed to an NGO platform impacting thousands of underprivileged students.",
    logo: aaraLearnLogo,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section-full" ref={ref}>
      <div className="section-container">
        {/* Header */}
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
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-0.5">
                    {exp.company} • {exp.type} | {exp.period} | {exp.location}
                  </p>
                  <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed">
                    {exp.description}
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
