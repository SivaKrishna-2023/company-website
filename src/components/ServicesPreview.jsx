// src/components/ServicesPreview.jsx
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../constants/services";
import ServiceCard from "./ui/ServiceCard";
import { cn } from "../utils/cn";

export default function ServicesPreview() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="services" ref={ref} className="py-24 bg-[#EEF6FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title mx-auto mb-4">Our Services</h2>
          <p className="section-sub mx-auto max-w-md">
            Practical solutions to grow your business and career.
          </p>
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
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
