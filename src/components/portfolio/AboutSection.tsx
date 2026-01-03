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
import { Trophy, Award, GraduationCap, Users } from "lucide-react";

// =============================================================================
// COMPONENT
// =============================================================================

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              About Me
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Opening Statement */}
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              I'm a developer who enjoys turning ideas into working web apps and AI-powered tools. Currently pursuing B.Tech in IT with a 8.45 CGPA.
            </p>
            
            {/* Bullet Points - Concrete and scannable */}
            <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-foreground-secondary mt-1.5">•</span>
                <span><strong className="text-foreground font-medium">What I build:</strong> Full-stack web apps, AI-powered tools, and automation workflows that solve real problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground-secondary mt-1.5">•</span>
                <span><strong className="text-foreground font-medium">How I work:</strong> End-to-end ownership—from problem discovery to deployment. I ship clean, maintainable code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground-secondary mt-1.5">•</span>
                <span><strong className="text-foreground font-medium">How I improve:</strong> Side projects, experiments, and staying current with AI/automation trends.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground-secondary mt-1.5">•</span>
                <span><strong className="text-foreground font-medium">What I'm open to:</strong> Remote roles, freelance projects, and collaborations in AI/full-stack development.</span>
              </li>
            </ul>
            
            {/* Stats */}
            <div className="pt-4 sm:pt-6">
              <div className="flex flex-wrap gap-4 sm:gap-5">
                <div className="card-glass py-4 sm:py-5 px-6 sm:px-8">
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">8.45</div>
                  <div className="text-sm sm:text-base text-foreground-secondary">CGPA</div>
                </div>
                <div className="card-glass py-4 sm:py-5 px-6 sm:px-8">
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">2027</div>
                  <div className="text-sm sm:text-base text-foreground-secondary">Expected Grad</div>
                </div>
                <div className="card-glass py-4 sm:py-5 px-6 sm:px-8">
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">3+</div>
                  <div className="text-sm sm:text-base text-foreground-secondary">Internships</div>
                </div>
              </div>
            </div>
            
            {/* Recognition Icons */}
            <div className="pt-6 sm:pt-8">
              <p className="text-micro uppercase tracking-[0.2em] text-foreground-secondary mb-4">Recognition</p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Trophy className="w-5 h-5 text-foreground-secondary" />
                  <span className="text-sm">Pragati Cohort 4</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Award className="w-5 h-5 text-foreground-secondary" />
                  <span className="text-sm">Coding Winner</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <GraduationCap className="w-5 h-5 text-foreground-secondary" />
                  <span className="text-sm">Certified Dev</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Users className="w-5 h-5 text-foreground-secondary" />
                  <span className="text-sm">Campus Lead</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
