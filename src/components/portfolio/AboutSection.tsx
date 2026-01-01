import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-full" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-display">
              Engineering with intent.{" "}
              <span className="text-foreground-secondary">Build with purpose.</span>
            </h2>
          </motion.div>

          {/* Right Column - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-body text-foreground-secondary leading-relaxed">
              Currently pursuing B.Tech in Information Technology with a CGPA of 8.45, 
              I've dedicated myself to mastering the intersection of artificial intelligence 
              and full-stack development.
            </p>
            <p className="text-body text-foreground-secondary leading-relaxed">
              My approach is rooted in building scalable, human-centered systems—products 
              that don't just function, but feel inevitable. From AI-powered resume analyzers 
              to secure voting platforms, every project reflects a commitment to engineering 
              excellence.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">8.45</div>
                  <div className="text-caption text-foreground-secondary">CGPA</div>
                </div>
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">2027</div>
                  <div className="text-caption text-foreground-secondary">Expected Grad</div>
                </div>
                <div className="card-glass py-4 px-6">
                  <div className="text-2xl font-semibold text-foreground">AI-First</div>
                  <div className="text-caption text-foreground-secondary">Mindset</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
