// src/components/WhyUsSection.jsx
import { useInView } from "../hooks/useInView";
import { WHY_US } from "../constants/services";
import { cn } from "../utils/cn";

export default function WhyUsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="why-us" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title mx-auto mb-4">Built for Real Results</h2>
          <p className="section-sub mx-auto max-w-xl">
            We combine expertise, speed, and innovation to deliver solutions that genuinely move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "group p-8 rounded-2xl border border-gray-100 hover:border-[#1A7AFF]/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 cursor-default",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
