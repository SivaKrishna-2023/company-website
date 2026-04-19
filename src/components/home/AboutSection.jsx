// src/components/home/AboutSection.jsx
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import AboutStatsOverlay from "./AboutStatsOverlay";
import { ABOUT_COPY, ABOUT_IMAGE } from "../../constants/home/homeData";
import { cn } from "../../utils/cn";

export default function AboutSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="section-label">{ABOUT_COPY.label}</span>
            <h2 className="section-title mb-6 whitespace-pre-line">{ABOUT_COPY.heading}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {ABOUT_COPY.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-outline-dark">
                {ABOUT_COPY.ctaSecondary}
              </Link>
              <Link to="/contact" className="btn-primary">
                {ABOUT_COPY.ctaPrimary}
              </Link>
            </div>
          </div>

          {/* Right – image + stats overlay */}
          <div className={cn(
            "relative transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <img
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              className="w-full rounded-2xl object-cover h-[440px]"
              loading="lazy"
            />
            <AboutStatsOverlay triggered={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
