// src/components/services/ProcessSection.jsx
import { useInView } from "../../hooks/useInView";
import ProcessStepCard from "./ProcessStepCard";
import { PROCESS_COPY, PROCESS_STEPS } from "../../constants/services/servicesPageData";
import { cn } from "../../utils/cn";


export default function ProcessSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-24 bg-[#EEF6FF]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{PROCESS_COPY.label}</span>
          <h2 id="process-heading" className="section-title mx-auto mb-4">{PROCESS_COPY.heading}</h2>
          <p className="section-sub mx-auto max-w-md">{PROCESS_COPY.subtext}</p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStepCard
              key={step.id}
              num={step.num}
              title={step.title}
              desc={step.desc}
              inView={inView}
              delayMs={i * 100}
              showConnector={i < PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
