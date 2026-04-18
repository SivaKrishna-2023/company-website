// src/components/services/ServiceDetailHero.jsx
import { Link } from "react-router-dom";
import { SERVICE_DETAIL_COPY } from "../../constants/services/servicesPageData";

/**
 * Single responsibility: hero block for a service detail page.
 * Shows back link, icon, title, description, CTA, and hero image.
 *
 * @param {object} service
 */
export default function ServiceDetailHero({ service }) {
  return (
    <section
      className="relative pt-16 pb-0 overflow-hidden"
      style={{ backgroundColor: service.bgColor }}
      aria-label={`${service.title} hero`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          {/* Text column */}
          <div className="pb-16 animate-fade-up">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {SERVICE_DETAIL_COPY.backLabel}
            </Link>
            <div className="text-5xl mb-5">{service.icon}</div>
            <h1
              className="font-display font-bold text-5xl md:text-6xl leading-tight mb-5"
              style={{ color: service.color }}
            >
              {service.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
              {service.description}
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                backgroundColor: service.color,
                boxShadow: `0 8px 24px ${service.color}40`,
              }}
            >
              {SERVICE_DETAIL_COPY.ctaLabel}
            </Link>
          </div>

          {/* Image column */}
          <div className="animate-slide-right">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover object-center rounded-t-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
