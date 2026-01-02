/**
 * =============================================================================
 * ContactSection.tsx - Clear Call-to-Action
 * =============================================================================
 * 
 * PURPOSE:
 * Simple, direct contact section with clear CTA.
 * Email, GitHub, LinkedIn visible and accessible.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

// =============================================================================
// COMPONENT
// =============================================================================

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-full" ref={ref}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-display mb-6">
            Let's Work Together
          </h2>
          
          {/* Invitation */}
          <p className="text-body-lg text-foreground-secondary mb-10">
            Open to remote roles, freelance projects, and collaborations.
          </p>

          {/* CTA Button - Email */}
          <motion.a
            href="mailto:koppadipavani34@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background px-8 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail className="w-5 h-5" />
            koppadipavani34@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a
              href="https://github.com/Pavanikoppadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors text-caption font-medium text-foreground"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pavanikoppadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors text-caption font-medium text-foreground"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
