/**
 * LearningSection - GitHub-style contribution graph (memoized data)
 */

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const generateContributionData = () => {
  const data: number[][] = [];
  // Use a seeded approach for consistency
  for (let week = 0; week < 52; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < 7; day++) {
      const seed = (week * 7 + day) * 2654435761;
      const random = ((seed >>> 0) / 4294967296);
      let level = 0;
      if (random > 0.3) level = 1;
      if (random > 0.5) level = 2;
      if (random > 0.7) level = 3;
      if (random > 0.85) level = 4;
      weekData.push(level);
    }
    data.push(weekData);
  }
  return data;
};

const CONTRIBUTION_DATA = generateContributionData();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Wed', 'Fri'];

const getContributionColor = (level: number) => {
  switch (level) {
    case 0: return 'bg-muted';
    case 1: return 'bg-foreground/20';
    case 2: return 'bg-foreground/40';
    case 3: return 'bg-foreground/60';
    case 4: return 'bg-foreground/80';
    default: return 'bg-muted';
  }
};

export const LearningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const totalContributions = useMemo(
    () => CONTRIBUTION_DATA.flat().filter(v => v > 0).length,
    []
  );

  return (
    <section id="learning" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-display mb-4">Learning & Understanding</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            AI can't replace deep understanding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-6 md:p-8 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-caption font-medium text-foreground">
              {totalContributions} learning activities in the last year
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex mb-2 ml-10">
                {months.map((month) => (
                  <span key={month} className="text-micro text-foreground-secondary" style={{ width: `${100 / 12}%` }}>
                    {month}
                  </span>
                ))}
              </div>

              <div className="flex">
                <div className="flex flex-col justify-around mr-2 h-[88px]">
                  {days.map(day => (
                    <span key={day} className="text-micro text-foreground-secondary">{day}</span>
                  ))}
                </div>

                <div className="flex gap-[3px]">
                  {CONTRIBUTION_DATA.map((week, weekIndex) => (
                    <motion.div
                      key={weekIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.3 + weekIndex * 0.008 }}
                      className="flex flex-col gap-[3px]"
                    >
                      {week.map((level, dayIndex) => (
                        <motion.div
                          key={dayIndex}
                          className={`w-[11px] h-[11px] rounded-[2px] ${getContributionColor(level)} transition-colors cursor-pointer`}
                          whileHover={{ scale: 1.8, transition: { duration: 0.15 } }}
                          title={`Contribution level: ${level}`}
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-micro text-foreground-secondary">Less</span>
                <div className="flex gap-[2px]">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div key={level} className={`w-[11px] h-[11px] rounded-[2px] ${getContributionColor(level)}`} />
                  ))}
                </div>
                <span className="text-micro text-foreground-secondary">More</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
            {[
              { value: "365+", label: "Days Active" },
              { value: "15+", label: "Courses Completed" },
              { value: "10+", label: "Projects Built" },
              { value: "10+", label: "Technologies Learned" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <p className="text-title text-foreground">{stat.value}</p>
                <p className="text-caption text-foreground-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
