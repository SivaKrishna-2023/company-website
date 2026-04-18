// src/components/contact/ContactAbout.jsx
import { useCountUp } from "../../hooks/useCountUp";
import { cn } from "../../utils/cn";


function StatItem({ value, suffix, label, triggered }) {
  const count = useCountUp(value, triggered, 1800);
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display font-bold text-5xl text-[#1A7AFF] leading-none tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-gray-500 text-sm">{label}</span>
    </div>
  );
}

export default function ContactAbout({
  heading,
  subtext,
  stats = [],
  imageSrc,
  imageAlt = "Innova Orbit team",
  inView = true,
  className = "",
}) {
  const animBase = "transition-all duration-700";

  return (
    <section
      aria-labelledby="about-contact-heading"
      className={cn("py-20 bg-white", className)}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – text + stats */}
          <div
            className={cn(
              animBase,
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2
              id="about-contact-heading"
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-6 whitespace-pre-line"
            >
              {heading}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              {subtext}
            </p>

            {/* Animated stats row */}
            <div className="flex items-start gap-14">
              {stats.map((stat) => (
                <StatItem
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  triggered={inView}
                />
              ))}
            </div>
          </div>

          {/* Right – team photo */}
          <div
            className={cn(
              animBase,
              "delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-[440px] object-cover object-center rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
