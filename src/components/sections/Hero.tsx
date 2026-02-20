import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const HeroScene = lazy(() => import("@/components/HeroScene"));

const titles = [
  "Full Stack Developer",
  "Cloud & DevOps Enthusiast",
  "MERN Stack Specialist",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((i) => (i + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Giri Dhar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-8 md:h-10 mb-8"
        >
          <span className="text-lg md:text-2xl text-muted-foreground font-body">
            {text}
            <span className="inline-block w-[2px] h-5 md:h-7 bg-primary ml-1 animate-glow-pulse align-middle" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-display font-semibold text-sm bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-display font-semibold text-sm border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-cyan transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={28} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
