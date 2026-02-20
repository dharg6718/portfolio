import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SmartUzhavan",
    subtitle: "Agri Yield Prediction",
    description:
      "Full-stack MERN application with ML-based crop yield prediction, cloud deployment, and automated CI/CD pipelines for seamless delivery.",
    tags: ["React", "Node.js", "MongoDB", "ML", "AWS", "CI/CD"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Social Fitness Platform",
    subtitle: "Community Fitness App",
    description:
      "A community-driven fitness application featuring group interactions, authentication, and responsive design for an engaging user experience.",
    tags: ["React", "Express", "MongoDB", "Auth", "Tailwind"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "CI/CD Generator",
    subtitle: "Cloud Pipeline Tool",
    description:
      "Automated CI/CD pipeline creation tool with Dockerized deployment and cloud integration, streamlining the DevOps workflow.",
    tags: ["Docker", "Jenkins", "AWS", "Node.js", "GitHub Actions"],
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="glass rounded-2xl overflow-hidden group gradient-border"
    >
      <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <span className="font-display text-2xl font-bold text-foreground/80">{project.title}</span>
      </div>
      <div className="p-6">
        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
          {project.subtitle}
        </p>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] rounded-full bg-muted text-muted-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-primary hover:text-foreground transition-colors font-medium"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
