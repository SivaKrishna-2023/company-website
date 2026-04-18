// src/components/home/ServicesPreviewSection.jsx
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import ServiceCard from "../shared/ServiceCard";
import { SERVICES_PREVIEW_COPY } from "../../constants/home/homeData";
import { SERVICES } from "../../constants/services";
import { cn } from "../../utils/cn";

/**
 * Services preview section on the Home page.
 * Owns its own useInView ref; maps SERVICES to ServiceCard atoms.
 */
export default function ServicesPreviewSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="services" ref={ref} className="py-24 bg-[#EEF6FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{SERVICES_PREVIEW_COPY.label}</span>
          <h2 className="section-title mx-auto mb-4">{SERVICES_PREVIEW_COPY.heading}</h2>
          <p className="section-sub mx-auto max-w-md">{SERVICES_PREVIEW_COPY.subtext}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={cn(
                "transition-all duration-600",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ServiceCard service={service} layout="grid" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-14 transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <Link to="/services" className="btn-primary">
            {SERVICES_PREVIEW_COPY.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
