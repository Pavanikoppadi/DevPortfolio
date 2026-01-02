/**
 * =============================================================================
 * AboutSection.tsx - Personal Statement (Signal, No Fluff)
 * =============================================================================
 * 
 * PURPOSE:
 * Concise about section with bullet points for easy scanning.
 * What I build, how I work, what I'm open to.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// =============================================================================
// COMPONENT
// =============================================================================

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-full" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-display">
              About Me
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Opening Statement */}
            <p className="text-body text-foreground leading-relaxed">
              I'm a developer who enjoys turning ideas into working web apps and AI-powered tools. Currently pursuing B.Tech in IT with a 8.45 CGPA.
            </p>
            
            {/* Bullet Points - Concrete and scannable */}
            <ul className="space-y-4 text-body text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <span><strong className="text-foreground">What I build:</strong> Full-stack web apps, AI-powered tools, and automation workflows that solve real problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <span><strong className="text-foreground">How I work:</strong> End-to-end ownership—from problem discovery to deployment. I ship clean, maintainable code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <span><strong className="text-foreground">How I improve:</strong> Side projects, experiments, and staying current with AI/automation trends.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <span><strong className="text-foreground">What I'm open to:</strong> Remote roles, freelance projects, and collaborations in AI/full-stack development.</span>
              </li>
            </ul>
            
            {/* Stats */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">8.45</div>
                  <div className="text-caption text-foreground-secondary">CGPA</div>
                </div>
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">2027</div>
                  <div className="text-caption text-foreground-secondary">Expected Grad</div>
                </div>
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">3+</div>
                  <div className="text-caption text-foreground-secondary">Internships</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
