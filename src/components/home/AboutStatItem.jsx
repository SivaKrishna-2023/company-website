// src/components/home/AboutStatItem.jsx
import { useCountUp } from "../../hooks/useCountUp";
import { cn } from "../../utils/cn";


export default function AboutStatItem({ value, suffix, label, triggered, gold = false }) {
  const count = useCountUp(value, triggered, 1800);

  return (
    <div className="text-center text-white">
      <p className={cn(
        "font-display font-bold text-4xl md:text-5xl leading-none",
        gold ? "text-yellow-300" : "text-white"
      )}>
        {count}{suffix}
      </p>
      <p className="text-white/70 text-xs mt-1.5">{label}</p>
    </div>
  );
}
