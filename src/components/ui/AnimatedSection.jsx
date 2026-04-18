// src/components/ui/AnimatedSection.jsx
import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

const variants = {
  "fade-up":    "animate-fade-up",
  "fade-in":    "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right":"animate-slide-right",
  "scale-in":   "animate-scale-in",
};

/**
 * Wraps children in a div that animates into view when scrolled to.
 * @param {"fade-up"|"fade-in"|"slide-left"|"slide-right"|"scale-in"} variant
 * @param {string} delay  - Tailwind delay utility e.g. "delay-200"
 * @param {string} className
 * @param {number} threshold
 */
export default function AnimatedSection({
  children,
  variant = "fade-up",
  delay = "",
  className = "",
  threshold = 0.15,
  as: Tag = "div",
}) {
  const [ref, inView] = useInView(threshold);

  return (
    <Tag
      ref={ref}
      className={cn(
        "opacity-0",
        inView && cn(variants[variant], delay),
        className
      )}
    >
      {children}
    </Tag>
  );
}
