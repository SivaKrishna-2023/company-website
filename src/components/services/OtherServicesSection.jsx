// src/components/services/OtherServicesSection.jsx
import { useInView } from "../../hooks/useInView";
import ServiceCard from "../shared/ServiceCard";
import { SERVICE_DETAIL_COPY } from "../../constants/services/servicesPageData";
import { cn } from "../../utils/cn";

/**
 * "Other Services" section on the service detail page.
 * Owns its own useInView ref; renders remaining services as grid cards.
 *
 * @param {Array} services - Other service objects (excluding current)
 */
export default function OtherServicesSection({ services }) {
  const [ref, inView] = useInView(0.1);

  if (!services.length) return null;

  return (
    <section ref={ref} className="py-20 bg-[#EEF6FF]" aria-labelledby="other-services-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{SERVICE_DETAIL_COPY.otherServicesLabel}</span>
          <h2 id="other-services-heading" className="section-title mx-auto">
            {SERVICE_DETAIL_COPY.otherServicesHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "transition-all duration-600",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ServiceCard service={s} layout="grid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
