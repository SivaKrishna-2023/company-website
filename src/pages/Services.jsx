// src/pages/Services.jsx
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../constants/services";
import ServiceCard from "../components/ui/ServiceCard";
import CTABanner from "../components/CTABanner";
import { cn } from "../utils/cn";

function PageHero() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#1A7AFF]/20 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
        <span className="inline-block text-[#1A7AFF] font-semibold text-xs uppercase tracking-widest mb-4">
          What We Offer
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-5">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          From high-performance websites to data-driven marketing and career coaching — we have the expertise to
          take your ambitions further.
        </p>
      </div>
    </section>
  );
}

function ServicesList() {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${i * 140}ms` }}
          >
            <ServiceCard service={service} layout="list" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const [ref, inView] = useInView(0.1);
  const steps = [
    { num: "01", title: "Discovery",     desc: "We understand your goals, audience, and technical requirements in depth." },
    { num: "02", title: "Strategy",      desc: "We craft a tailored action plan with clear milestones and deliverables." },
    { num: "03", title: "Execution",     desc: "Our experts build, test, and refine with meticulous attention to detail." },
    { num: "04", title: "Launch & Grow", desc: "We go live, monitor results, and iterate to keep improving performance." },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#EEF6FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title mx-auto mb-4">Our Process</h2>
          <p className="section-sub mx-auto max-w-md">
            A proven 4-step approach that turns ideas into results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={cn(
                "relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-400",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-display font-bold text-5xl text-[#1A7AFF]/15 leading-none block mb-3">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-[#1A7AFF]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesList />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
