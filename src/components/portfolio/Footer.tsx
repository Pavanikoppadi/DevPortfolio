/**
 * Footer Component - Enhanced with micro-animations
 */

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Heart } from "lucide-react";

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.p
            className="text-caption text-foreground-secondary flex items-center gap-1.5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            © 2026 Pavani Koppadi · Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
