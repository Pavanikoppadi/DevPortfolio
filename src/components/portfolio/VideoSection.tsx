/**
 * VideoSection - Lazy-loaded YouTube embed with intersection observer
 */

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy load iframe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-[1100px] mx-auto"
        >
          <motion.div
            className="relative w-full rounded-[28px] overflow-hidden bg-background-secondary"
            style={{ aspectRatio: "16 / 9", boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.5)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            {shouldLoad ? (
              <iframe
                src="https://www.youtube.com/embed/1nqZAl_skNE?autoplay=1&mute=1&controls=0&loop=1&playlist=1nqZAl_skNE&modestbranding=1&rel=0&showinfo=0&disablekb=1"
                title="Portfolio Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-foreground/40" />
                </motion.div>
              </div>
            )}
            <div className="absolute inset-0 pointer-events-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
