/**
 * LifestyleSection - Bento grid with enhanced hover effects
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import codingLifestyle from "@/assets/lifestyle/coding-lifestyle.jpg";
import cafeWork from "@/assets/lifestyle/cafe-work.jpg";
import techMeetup from "@/assets/lifestyle/tech-meetup.jpg";
import creativeWorkspace from "@/assets/lifestyle/creative-workspace.jpg";

const lifestyleImages = [
  { id: 1, image: codingLifestyle, alt: "Coding at home workspace", span: "col-span-2 row-span-2", bgColor: "bg-[hsl(240,80%,60%)]" },
  { id: 2, image: cafeWork, alt: "Remote work at cafe", span: "col-span-1 row-span-1", bgColor: "bg-white" },
  { id: 3, image: techMeetup, alt: "Tech meetup networking", span: "col-span-1 row-span-1", bgColor: "bg-[hsl(0,0%,12%)]" },
  { id: 4, image: creativeWorkspace, alt: "Creative developer workspace", span: "col-span-2 row-span-1", bgColor: "bg-[hsl(48,96%,76%)]" },
];

export const LifestyleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[100px] sm:auto-rows-[140px] md:auto-rows-[180px] max-w-4xl mx-auto">
          {lifestyleImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
              className={`${item.span} relative overflow-hidden rounded-3xl group cursor-pointer`}
            >
              <div className={`absolute inset-0 ${item.bgColor}`} />
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
