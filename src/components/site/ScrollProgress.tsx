import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin brand-coloured bar at the top of the page that fills as you scroll. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-[#1B5BFF] via-live to-[#22D3FF]"
      style={{ scaleX }}
    />
  );
}
