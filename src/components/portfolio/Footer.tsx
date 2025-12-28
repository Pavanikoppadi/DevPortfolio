import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-caption text-foreground-secondary">
              © {new Date().getFullYear()} Pavani Koppadi. All rights reserved.
            </p>
          </div>

          <p className="text-caption text-foreground-tertiary italic">
            "Engineering with intent. Building with purpose."
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pavanikoppadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="pavanikoppadi.work@gmail.com"
              className="text-caption text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
