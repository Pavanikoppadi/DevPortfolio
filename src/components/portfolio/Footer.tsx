/**
 * Footer Component
 * 
 * Simple footer with copyright information.
 * Minimal design with centered text.
 */

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = [
  { icon: Github, href: "https://github.com/Pavanikoppadi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pavanikoppadi", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:koppadipavani34@gmail.com", label: "Email" },
];

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-foreground-secondary hover:text-foreground"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-caption text-foreground-secondary">
            © 2026 Pavani Koppadi
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
