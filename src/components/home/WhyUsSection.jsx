// src/components/home/WhyUsSection.jsx
import { useInView } from "../../hooks/useInView";
import WhyUsFeatureCard from "./WhyUsFeatureCard";
import { WHY_US_COPY } from "../../constants/home/homeData";
import { WHY_US } from "../../constants/services";
import { cn } from "../../utils/cn";


export default function WhyUsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="why-us" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{WHY_US_COPY.label}</span>
          <h2 className="section-title mx-auto mb-4">{WHY_US_COPY.heading}</h2>
          <p className="section-sub mx-auto max-w-xl">{WHY_US_COPY.subtext}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <WhyUsFeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              inView={inView}
              delayMs={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
