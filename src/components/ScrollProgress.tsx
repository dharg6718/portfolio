import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9999]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(186 100% 50%), hsl(263 70% 50%))",
      }}
    />
  );
};

export default ScrollProgress;
