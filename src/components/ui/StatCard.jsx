// src/components/ui/StatCard.jsx
import { useCountUp } from "../../hooks/useCountUp";

export default function StatCard({ value, suffix, label, triggered, color = "#1A7AFF" }) {
  const count = useCountUp(value, triggered, 2000);
  return (
    <div className="text-center text-white">
      <p className="font-display font-bold text-4xl md:text-5xl leading-none">
        <span style={{ color: color === "gold" ? "#FFD700" : "white" }}>
          {count}{suffix}
        </span>
      </p>
      <p className="text-white/75 text-sm mt-1.5">{label}</p>
    </div>
  );
}
