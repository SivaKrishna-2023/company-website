// src/components/CTABanner.jsx
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

export default function CTABanner() {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className="py-20 bg-[#1A7AFF] relative overflow-hidden"
    >
      {/* decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/08 pointer-events-none" />

      <div
        className={cn(
          "relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8">
          Partner with Innova Orbit and unlock tailored solutions designed to accelerate growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-9 py-3.5 rounded-full bg-white text-[#1A7AFF] font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </a>
          <Link
            to="/services"
            className="px-9 py-3.5 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#1A7AFF] transition-all duration-300"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
