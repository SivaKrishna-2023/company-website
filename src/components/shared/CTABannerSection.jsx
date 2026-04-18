// src/components/shared/CTABannerSection.jsx
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { CTA_BANNER_COPY } from "../../constants/home/homeData";
import { cn } from "../../utils/cn";

/**
 * Shared CTA banner used at the bottom of Home, Services, and Careers pages.
 * Props-driven so copy can be overridden per page if needed.
 *
 * @param {string} heading
 * @param {string} subtext
 * @param {string} ctaPrimary
 * @param {string} ctaSecondary
 */
export default function CTABannerSection({
  heading     = CTA_BANNER_COPY.heading,
  subtext     = CTA_BANNER_COPY.subtext,
  ctaPrimary  = CTA_BANNER_COPY.ctaPrimary,
  ctaSecondary = CTA_BANNER_COPY.ctaSecondary,
}) {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className="py-20 bg-[#1A7AFF] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.08] pointer-events-none" aria-hidden="true" />

      <div className={cn(
        "relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <h2
          id="cta-heading"
          className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight"
        >
          {heading}
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8">
          {subtext}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-9 py-3.5 rounded-full bg-white text-[#1A7AFF] font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {ctaPrimary}
          </Link>
          <Link
            to="/services"
            className="px-9 py-3.5 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#1A7AFF] transition-all duration-300"
          >
            {ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
