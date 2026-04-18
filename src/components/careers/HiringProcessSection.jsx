// src/components/careers/HiringProcessSection.jsx
import { useInView } from "../../hooks/useInView";
import HiringStepCard from "./HiringStepCard";
import { HIRING_PROCESS_COPY, HIRING_STEPS } from "../../constants/careers/careersPageData";
import { cn } from "../../utils/cn";

/**
 * "Our Hiring Process" section composer.
 * Owns its own useInView ref; maps HIRING_STEPS data to HiringStepCard atoms.
 */
export default function HiringProcessSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      ref={ref}
      className="py-24 bg-white"
      aria-labelledby="hiring-process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{HIRING_PROCESS_COPY.label}</span>
          <h2
            id="hiring-process-heading"
            className="section-title mx-auto mb-4"
          >
            {HIRING_PROCESS_COPY.heading}
          </h2>
          <p className="section-sub mx-auto max-w-md">{HIRING_PROCESS_COPY.subtext}</p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIRING_STEPS.map((step, i) => (
            <HiringStepCard
              key={step.id}
              num={step.num}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
              inView={inView}
              delayMs={i * 100}
              showConnector={i < HIRING_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
