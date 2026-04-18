// src/components/careers/CareersStatsBar.jsx
import { CAREERS_STATS } from "../../constants/careers/careersPageData";


export default function CareersStatsBar() {
  return (
    <div className="bg-[#1A7AFF]" role="region" aria-label="Careers statistics">
      <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {CAREERS_STATS.map((stat) => (
          <div key={stat.id} className="text-center text-white">
            <p className="font-display font-bold text-2xl md:text-3xl">{stat.value}</p>
            <p className="text-white/70 text-xs mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
