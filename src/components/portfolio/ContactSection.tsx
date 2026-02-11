/**
 * ContactSection - Enhanced with micro-animations
 */

import { motion, useInView } from "framer-motion";
import { useRef, forwardRef, useState } from "react";
import { Mail, Github, Linkedin, Check } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

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

  const socialLinkClass = "flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border hover:bg-muted transition-all duration-300 text-xs sm:text-caption font-medium text-foreground";

  return (
    <section id="contact" className="section-full" ref={forwardedRef || ref}>
      <div className="section-container text-center px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-display mb-4 sm:mb-6">Get In Touch</h2>
          
          <motion.p
            className="text-sm sm:text-body-lg text-foreground-secondary mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Open to remote roles, freelance projects, and collaborations • IST timezone
          </motion.p>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <RainbowButton
                onClick={copyEmail}
                className="gap-2 sm:gap-3 text-xs sm:text-body"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">{copied ? "Copied!" : email}</span>
                {copied && <Check className="w-4 h-4 text-green-500" />}
              </RainbowButton>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            {[
              { href: "https://github.com/Pavanikoppadi", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/pavanikoppadi", icon: Linkedin, label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              >
                <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {social.label}
              </motion.a>
            ))}
            <motion.a
              href="https://medium.com/@koppadipavani34"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Medium
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
