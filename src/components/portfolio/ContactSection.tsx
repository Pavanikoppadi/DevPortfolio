import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

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
          <h2 className="text-display mb-6">
            Let's build intelligent products together.
          </h2>
          <p className="text-body-lg text-foreground-secondary mb-12">
            Open to opportunities where AI meets impactful engineering. 
            Let's create something extraordinary.
          </p>

          <motion.a
            href="mailto:koppadipavani34@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};