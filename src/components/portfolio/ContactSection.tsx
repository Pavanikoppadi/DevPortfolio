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
import { useRef, forwardRef, useState } from "react";
import { Mail, Github, Linkedin, Check } from "lucide-react";

// =============================================================================
// COMPONENT
// =============================================================================

export const ContactSection = forwardRef<HTMLElement>((_, forwardedRef) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  
  const email = "koppadipavani34@gmail.com";
  
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-full" ref={forwardedRef || ref}>
      <div className="section-container text-center px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-display mb-4 sm:mb-6">
            Get In Touch
          </h2>
          
          {/* Availability Note */}
          <p className="text-sm sm:text-body-lg text-foreground-secondary mb-8 sm:mb-10">
            Open to remote roles, freelance projects, and collaborations • IST timezone
          </p>

          {/* Email Button - Click to Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-8"
          >
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 sm:gap-3 bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-body font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="truncate">{copied ? "Copied!" : email}</span>
              {copied && <Check className="w-4 h-4 text-green-500" />}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/Pavanikoppadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border hover:bg-muted transition-colors text-xs sm:text-caption font-medium text-foreground"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pavanikoppadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border hover:bg-muted transition-colors text-xs sm:text-caption font-medium text-foreground"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              LinkedIn
            </a>
            <a
              href="https://medium.com/@koppadipavani34"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border hover:bg-muted transition-colors text-xs sm:text-caption font-medium text-foreground"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Medium
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
