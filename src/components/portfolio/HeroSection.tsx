/**
 * HeroSection - Enhanced with blur reveal animation
 */

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-hero max-w-4xl mx-auto"
        >
          Building web apps and AI tools that{" "}
          <span className="text-gradient">ship fast and work reliably</span>
        </motion.h2>
      </div>
    </section>
  );
};
