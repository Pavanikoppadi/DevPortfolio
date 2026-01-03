/**
 * Footer Component
 * 
 * Simple footer with copyright information.
 * Minimal design with centered text.
 */

import { motion } from "framer-motion";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-caption text-foreground-secondary">
            © {new Date().getFullYear()} Pavani Koppadi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
