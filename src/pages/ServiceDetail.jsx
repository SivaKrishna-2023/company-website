// src/pages/ServiceDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { SERVICES } from "../constants/services";
import { useInView } from "../hooks/useInView";
import CTABanner from "../components/CTABanner";
import ServiceCard from "../components/ui/ServiceCard";
import { cn } from "../utils/cn";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 pb-0 overflow-hidden"
        style={{ backgroundColor: service.bgColor }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Text */}
            <div className="pb-16 animate-fade-up">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6 group">
                <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Services
              </Link>
              <div className="text-5xl mb-5">{service.icon}</div>
              <h1
                className="font-display font-bold text-5xl md:text-6xl leading-tight mb-5"
                style={{ color: service.color }}
              >
                {service.title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">{service.description}</p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
                style={{ backgroundColor: service.color, boxShadow: `0 8px 24px ${service.color}40` }}
              >
                Get Started Today
              </a>
            </div>

            {/* Image */}
            <div className="animate-slide-right">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-t-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesList service={service} />

      {/* Other services */}
      <OtherServices others={others} />

      <CTABanner />
    </>
  );
}

function FeaturesList({ service }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn("mb-12 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="section-label">What's Included</span>
          <h2 className="section-title">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.features.map((f, i) => (
            <div
              key={f}
              className={cn(
                "flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-opacity-50 hover:shadow-md transition-all duration-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${i * 80}ms`,
                borderColor: inView ? service.color + "33" : undefined,
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                style={{ backgroundColor: service.color }}
              >
                ✓
              </div>
              <span className="text-gray-700 text-sm leading-relaxed font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherServices({ others }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 bg-[#EEF6FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn("text-center mb-12 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="section-label">More From Us</span>
          <h2 className="section-title mx-auto">Other Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {others.map((s, i) => (
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
