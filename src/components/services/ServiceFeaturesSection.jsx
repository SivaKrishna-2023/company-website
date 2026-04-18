// src/components/services/ServiceFeaturesSection.jsx
import { useInView } from "../../hooks/useInView";
import ServiceFeatureItem from "./ServiceFeatureItem";
import { SERVICE_DETAIL_COPY } from "../../constants/services/servicesPageData";
import { cn } from "../../utils/cn";

/**
 * "Key Features" section on the service detail page.
 * Owns its own useInView ref; maps service.features to ServiceFeatureItem atoms.
 *
 * @param {object} service
 */
export default function ServiceFeaturesSection({ service }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className={cn(
          "mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{SERVICE_DETAIL_COPY.featuresLabel}</span>
          <h2 id="features-heading" className="section-title">
            {SERVICE_DETAIL_COPY.featuresHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.features.map((f, i) => (
            <ServiceFeatureItem
              key={f}
              text={f}
              accentColor={service.color}
              inView={inView}
              delayMs={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
