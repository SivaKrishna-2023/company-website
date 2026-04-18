// src/components/careers/CultureSection.jsx
import { useInView } from "../../hooks/useInView";
import CulturePerkCard from "./CulturePerkCard";
import { CULTURE_COPY } from "../../constants/careers/careersPageData";
import { CULTURE_PERKS } from "../../constants/careers";
import { cn } from "../../utils/cn";


export default function CultureSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="culture" ref={ref} className="py-24 bg-white" aria-labelledby="culture-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{CULTURE_COPY.label}</span>
          <h2 id="culture-heading" className="section-title mx-auto mb-4">{CULTURE_COPY.heading}</h2>
          <p className="section-sub mx-auto max-w-lg">{CULTURE_COPY.subtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_PERKS.map((perk, i) => (
            <CulturePerkCard
              key={perk.title}
              icon={perk.icon}
              title={perk.title}
              desc={perk.desc}
              inView={inView}
              delayMs={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
