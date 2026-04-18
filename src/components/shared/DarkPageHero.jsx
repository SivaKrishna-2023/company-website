// src/components/shared/DarkPageHero.jsx
import { cn } from "../../utils/cn";

/**
 * Reusable dark-navy page hero used by Services and Careers pages.
 * Accepts all copy as props — zero hardcoded strings.
 *
 * @param {string}      label       - Small eyebrow label
 * @param {string}      heading     - Main h1
 * @param {string}      accent      - Coloured word appended to heading (optional)
 * @param {string}      subtext
 * @param {ReactNode}   actions     - CTA button(s) slot
 * @param {ReactNode}   floatingStart - Floating badge top-left (optional)
 * @param {ReactNode}   floatingEnd   - Floating badge bottom-right (optional)
 */
export default function DarkPageHero({
  label,
  heading,
  accent,
  subtext,
  actions,
  floatingStart,
  floatingEnd,
}) {
  return (
    <section
      className="relative py-28 bg-[#0F172A] overflow-hidden"
      aria-label="Page hero"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] rounded-full bg-[#1A7AFF]/20 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Optional floating badges */}
      {floatingStart && (
        <div className="absolute top-16 left-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-sm text-white/70 text-xs font-medium animate-fade-in delay-500">
          {floatingStart}
        </div>
      )}
      {floatingEnd && (
        <div className="absolute bottom-16 right-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-sm text-white/70 text-xs font-medium animate-fade-in delay-700">
          {floatingEnd}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-fade-up">
        {label && (
          <span className="inline-block text-[#1A7AFF] font-semibold text-xs uppercase tracking-widest mb-4">
            {label}
          </span>
        )}
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-5">
          {heading}
          {accent && (
            <>
              <br />
              <span className="text-[#1A7AFF]">{accent}</span>
            </>
          )}
        </h1>
        {subtext && (
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {subtext}
          </p>
        )}
        {actions && (
          <div className="flex flex-wrap justify-center gap-4">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
