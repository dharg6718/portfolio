import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techIcons = [
  "MongoDB", "Express", "React", "Node.js", "AWS", "Docker", "Jenkins", "Kubernetes"
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a pre-final year Engineering student passionate about building scalable web applications
              and cloud-native solutions. With 3 months of hands-on internship experience, I specialize
              in the MERN stack, cloud deployment, and CI/CD pipeline automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex problems and delivering production-ready applications
              that combine clean code architecture with modern DevOps practices. My goal is to
              bridge the gap between development and operations for seamless software delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {techIcons.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:glow-cyan transition-all duration-300 group"
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
