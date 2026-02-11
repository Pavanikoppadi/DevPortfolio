/**
 * Footer Component - Minimal with micro-animation
 */

import { motion } from "framer-motion";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.p 
            className="text-caption text-foreground-secondary"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            © 2026 Pavani Koppadi
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
