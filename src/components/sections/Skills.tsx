import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud",
    skills: ["AWS EC2", "AWS S3", "Cloud Deploy", "Serverless"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Jenkins", "Kubernetes"],
  },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`);
  };

  const handleLeave = () => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <TiltCard className="glass rounded-2xl p-6 h-full gradient-border hover:glow-cyan transition-shadow duration-300">
                <h3 className="font-display text-lg font-semibold text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-muted text-muted-foreground font-medium hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
