import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lifestyleItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    alt: "Coding setup",
    size: "large"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    alt: "Travel mountains",
    size: "small"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    alt: "Music",
    size: "small"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    alt: "Reading books",
    size: "small"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    alt: "Tech workspace",
    size: "large"
  },
];

export const LifestyleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding pt-8" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-6 gap-3 auto-rows-[80px] md:auto-rows-[100px]"
        >
          {/* Large item - spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden bg-muted"
          >
            <img
              src={lifestyleItems[0].image}
              alt={lifestyleItems[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Small items */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 row-span-1 rounded-2xl overflow-hidden bg-muted"
          >
            <img
              src={lifestyleItems[1].image}
              alt={lifestyleItems[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden bg-muted"
          >
            <img
              src={lifestyleItems[2].image}
              alt={lifestyleItems[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-2 row-span-1 rounded-2xl overflow-hidden bg-muted"
          >
            <img
              src={lifestyleItems[3].image}
              alt={lifestyleItems[3].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
