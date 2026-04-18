// src/components/home/AboutStatsOverlay.jsx
import AboutStatItem from "./AboutStatItem";
import { ABOUT_STATS } from "../../constants/home/homeData";

export default function AboutStatsOverlay({ triggered }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#1A7AFF] rounded-b-2xl px-6 py-5 flex items-center justify-around gap-4">
      {ABOUT_STATS.map((stat, i) => (
        <div key={stat.id} className="contents">
          {i > 0 && (
            <div className={`w-px h-12 bg-white/25 flex-shrink-0 ${i === 2 ? "hidden sm:block" : ""}`} />
          )}
          <AboutStatItem
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            triggered={triggered}
            gold={stat.gold}
          />
        </div>
      ))}
    </div>
  );
}
