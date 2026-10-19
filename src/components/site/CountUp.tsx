import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect } from "react";

/** Dollar amount that counts smoothly to its new value when it changes. */
export function CountMoney({ value, className }: { value: number; className?: string }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => `$${Math.round(v).toLocaleString("en-CA")}`);
  useEffect(() => {
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [value, reduce, mv]);
  return <motion.span className={className}>{text}</motion.span>;
}
