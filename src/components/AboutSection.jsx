// src/components/AboutSection.jsx
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { Link } from "react-router-dom";
import { STATS } from "../constants/services";
import { cn } from "../utils/cn";

function Stat({ value, suffix, label, triggered, gold }) {
  const count = useCountUp(value, triggered, 1800);
  return (
    <div className="text-center text-white">
      <p className={cn("font-display font-bold text-4xl md:text-5xl leading-none", gold && "text-yellow-300")}>
        {count}{suffix}
      </p>
      <p className="text-white/70 text-xs mt-1.5">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – Text */}
          <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title mb-6">
              About Innova Orbit<br />Global Solutions LLP
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              <strong className="text-gray-900">Innova Orbit Global Solutions LLP</strong> is a professional services
              company focused on delivering{" "}
              <strong className="text-gray-900">web development solutions</strong>,{" "}
              <strong className="text-gray-900">digital marketing services</strong>, and{" "}
              <strong className="text-gray-900">interview-ready preparation with placement support</strong>.
              We combine deep domain expertise with a results-first mindset to help businesses and careers flourish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-outline-dark">
                Our Services
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right – Image + Stats */}
          <div className={cn("relative transition-all duration-700 delay-200", inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Innova Orbit team at work"
              className="w-full rounded-2xl object-cover h-[440px]"
              loading="lazy"
            />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1A7AFF] rounded-b-2xl px-6 py-5 flex items-center justify-around gap-4">
              <Stat value={150} suffix="+" label="100+ Clients"       triggered={inView} />
              <div className="w-px h-12 bg-white/25 flex-shrink-0" />
              <Stat value={15}  suffix=""  label="Trusted Partners"   triggered={inView} gold />
              <div className="w-px h-12 bg-white/25 flex-shrink-0 hidden sm:block" />
              <Stat value={5}   suffix="+" label="Years Experience"   triggered={inView} className="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
