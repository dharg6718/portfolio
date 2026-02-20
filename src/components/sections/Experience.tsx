import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    title: "Software Development Intern",
    period: "3 Months",
    points: [
      "Developed full-stack web applications using MERN stack",
      "Deployed applications on AWS cloud infrastructure",
      "Implemented CI/CD pipelines for automated deployment",
      "Collaborated with cross-functional teams using Git workflows",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="relative pl-12 md:pl-0 md:ml-[50%] md:pl-12 mb-12"
            >
              {/* Glowing dot */}
              <div className="absolute left-2.5 md:-left-[7px] top-1 w-4 h-4 rounded-full bg-primary glow-cyan animate-glow-pulse" />

              <div className="glass rounded-2xl p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
