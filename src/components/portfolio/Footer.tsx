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
          className="text-center"
        >
          <p className="text-caption text-foreground-secondary">
            © {new Date().getFullYear()} Pavani Koppadi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
