import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/", value: "Connect" },
  { icon: Github, label: "GitHub", href: "https://github.com/", value: "Follow" },
];

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-background-secondary hover:bg-foreground/5 border border-border hover:border-foreground/20 transition-all duration-500"
              >
                <link.icon className="w-5 h-5 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
                <span className="font-medium">{link.label}</span>
                <ArrowUpRight 
                  size={16} 
                  className="text-foreground-secondary group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
