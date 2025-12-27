import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Camera, PenTool, Video } from "lucide-react";

const interests = [
  { icon: Cpu, label: "AI Productivity" },
  { icon: Camera, label: "Photography" },
  { icon: PenTool, label: "Blogging" },
  { icon: Video, label: "Content Creation" },
];

export const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section-sm" ref={ref}>
      <div className="section-container">
        <div className="divider-gradient mb-16" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-caption uppercase tracking-[0.2em] text-foreground-secondary mb-8">
            Beyond Code
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-4 rounded-2xl bg-background-secondary group-hover:bg-foreground/5 transition-colors duration-500">
                  <interest.icon className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
                </div>
                <span className="text-caption text-foreground-secondary group-hover:text-foreground transition-colors duration-500">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
