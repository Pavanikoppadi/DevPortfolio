/**
 * VideoSection - Lazy-loaded YouTube embed with IntersectionObserver
 */

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-[1100px] mx-auto"
        >
          <div 
            className="relative w-full rounded-[28px] overflow-hidden bg-background-secondary"
            style={{
              aspectRatio: "16 / 9",
              boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.5)",
            }}
          >
            {isVisible ? (
              <iframe
                src="https://www.youtube.com/embed/1nqZAl_skNE?autoplay=1&mute=1&controls=0&loop=1&playlist=1nqZAl_skNE&modestbranding=1&rel=0&showinfo=0&disablekb=1"
                title="Portfolio Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 pointer-events-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
