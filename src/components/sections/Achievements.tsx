import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Cloud, Briefcase, BookOpen } from "lucide-react";

const achievements = [
  { icon: Cloud, title: "Cloud Certifications", count: 3, suffix: "+" },
  { icon: Briefcase, title: "Internship Completed", count: 1, suffix: "" },
  { icon: BookOpen, title: "Technical Workshops", count: 10, suffix: "+" },
  { icon: Award, title: "Projects Delivered", count: 5, suffix: "+" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-display text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:glow-cyan transition-shadow duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <AnimatedCounter target={item.count} suffix={item.suffix} inView={inView} />
              <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
