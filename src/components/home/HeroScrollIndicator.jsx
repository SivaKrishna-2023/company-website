// src/components/home/HeroScrollIndicator.jsx
import { cn } from "../../utils/cn";


export default function HeroScrollIndicator({ visible }) {
  return (
    <div
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
        "transition-all duration-700 delay-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      aria-hidden="true"
    >
      <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
      <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
    </div>
  );
}
