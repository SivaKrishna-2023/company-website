// src/components/careers/CareerDetailBody.jsx
import { useInView } from "../../hooks/useInView";
import { CAREER_DETAIL_COPY } from "../../constants/careers/careersPageData";
import { cn } from "../../utils/cn";

export default function CareerDetailBody({ job, onApply }) {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Responsibilities + Requirements */}
          <div className="lg:col-span-3 space-y-10">

            {/* Responsibilities */}
            <div className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5 flex items-center gap-2">
                <span style={{ color: job.color }}>📋</span>
                {CAREER_DETAIL_COPY.responsibilitiesLabel}
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: job.color }}
                    >
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className={cn(
              "transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5 flex items-center gap-2">
                <span style={{ color: job.color }}>🎓</span>
                {CAREER_DETAIL_COPY.requirementsLabel}
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: job.color }}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile apply CTA */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={onApply}
                className="w-full py-4 rounded-full text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: job.color }}
              >
                {CAREER_DETAIL_COPY.applyLabel}
              </button>
            </div>
          </div>

          {/* Right: Company snippet */}
          <div className={cn(
            "lg:col-span-2 transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">
                {CAREER_DETAIL_COPY.aboutCompanyLabel}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {CAREER_DETAIL_COPY.aboutCompanyText}
              </p>
              <div className="space-y-2">
                {CAREER_DETAIL_COPY.companyMeta.map(({ label, val }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">{label}</span>
                    <span className="text-gray-700 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
