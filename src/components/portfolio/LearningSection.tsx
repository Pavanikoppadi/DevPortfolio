import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Generate realistic contribution data for a year
const generateContributionData = () => {
  const data: number[][] = [];
  const weeks = 52;
  
  for (let week = 0; week < weeks; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < 7; day++) {
      // Create more realistic patterns with some empty days and varying intensity
      const random = Math.random();
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

const contributionData = generateContributionData();

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Wed', 'Fri'];

// Grey/black color palette
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

  const totalContributions = contributionData.flat().filter(v => v > 0).length;

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
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-caption font-medium text-foreground">
              {totalContributions} learning activities in the last year
            </p>
          </div>

          {/* Graph Container */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Months row */}
              <div className="flex mb-2 ml-10">
                {months.map((month, i) => (
                  <span 
                    key={month} 
                    className="text-xs text-muted-foreground"
                    style={{ width: `${100 / 12}%` }}
                  >
                    {month}
                  </span>
                ))}
              </div>

              {/* Graph grid */}
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col justify-around mr-2 h-[88px]">
                  {days.map(day => (
                    <span key={day} className="text-xs text-muted-foreground">
                      {day}
                    </span>
                  ))}
                </div>

                {/* Contribution squares */}
                <div className="flex gap-[3px]">
                  {contributionData.map((week, weekIndex) => (
                    <motion.div
                      key={weekIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.3 + weekIndex * 0.01 }}
                      className="flex flex-col gap-[3px]"
                    >
                      {week.map((level, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-[11px] h-[11px] rounded-[2px] ${getContributionColor(level)} transition-colors`}
                          title={`Contribution level: ${level}`}
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-xs text-muted-foreground">Less</span>
                <div className="flex gap-[2px]">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className={`w-[11px] h-[11px] rounded-[2px] ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">More</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground tracking-tight">365+</p>
              <p className="text-caption text-muted-foreground">Days Active</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground tracking-tight">50+</p>
              <p className="text-caption text-muted-foreground">Courses Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground tracking-tight">100+</p>
              <p className="text-caption text-muted-foreground">Projects Built</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground tracking-tight">20+</p>
              <p className="text-caption text-muted-foreground">Technologies Learned</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
