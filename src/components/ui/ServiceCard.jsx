// src/components/ui/ServiceCard.jsx
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function ServiceCard({ service, layout = "grid", className = "" }) {

  // ── LIST layout (used on /services page) ──────────────────────────────────
  if (layout === "list") {
    return (
      <div className={cn(
        "group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm",
        "hover:shadow-xl transition-all duration-400",
        className
      )}>
  
        <div className="relative w-full md:w-2/5 h-60 md:h-auto md:min-h-[320px] flex-shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Service color tag */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wide"
            style={{ backgroundColor: service.color }}
          >
            {service.shortTitle || service.title}
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <span className="text-3xl mb-4 block">{service.icon}</span>
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-6">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                />
                {f}
              </li>
            ))}
          </ul>

          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:text-white"
            style={{
              borderColor: service.color,
              color: service.color,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = service.color; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = service.color; }}
          >
            Learn More →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "group bg-white rounded-2xl overflow-hidden shadow-sm",
      "hover:shadow-xl hover:-translate-y-1 transition-all duration-400",
      className
    )}>
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "58%" }}>
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Color accent bar at image bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
          style={{ backgroundColor: service.color }}
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-2xl mb-4"
          style={{ backgroundColor: service.bgColor }}
        >
          {service.icon}
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
          {service.shortTitle || service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {service.tagline}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold group/link transition-all duration-200"
          style={{ color: service.color }}
        >
          Learn more
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
