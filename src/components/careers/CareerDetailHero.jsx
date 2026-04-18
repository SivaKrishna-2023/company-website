// src/components/careers/CareerDetailHero.jsx
import { Link } from "react-router-dom";
import { CAREER_DETAIL_COPY } from "../../constants/careers/careersPageData";

/**
 * Single responsibility: hero section of the Career Detail page.
 * Shows job title, meta chips, description, and sticky apply card.
 *
 * @param {object}   job
 * @param {function} onApply  - Opens the ApplyModal
 */
export default function CareerDetailHero({ job, onApply }) {
  return (
    <section
      className="relative pt-10 pb-0 overflow-hidden"
      style={{ backgroundColor: job.bgColor }}
      aria-label={`${job.title} details`}
    >
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start pb-14">

          {/* Left: job info */}
          <div className="lg:col-span-3 animate-fade-up">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-8 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {CAREER_DETAIL_COPY.backLabel}
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-white shadow-sm bg-white"
              >
                {job.icon}
              </div>
              {job.urgent && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold border border-red-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Urgent Hiring
                </span>
              )}
            </div>

            <h1
              className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4"
              style={{ color: job.color }}
            >
              {job.title}
            </h1>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: "🏢", label: job.department },
                { icon: "📍", label: job.location   },
                { icon: "💼", label: job.experience  },
                { icon: "⏱",  label: job.type       },
                { icon: "🖥",  label: job.mode       },
                { icon: "💰", label: job.salary      },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium shadow-sm"
                >
                  {icon} {label}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed">{job.description}</p>
          </div>

          {/* Right: Apply card (sticky) */}
          <div className="lg:col-span-2 animate-slide-right">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-1">
                Interested in this role?
              </h3>
              <p className="text-gray-500 text-sm mb-5">{CAREER_DETAIL_COPY.applySubtext}</p>

              <button
                type="button"
                onClick={onApply}
                className="w-full py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg mb-3"
                style={{ backgroundColor: job.color, boxShadow: `0 8px 24px ${job.color}33` }}
              >
                {CAREER_DETAIL_COPY.applyLabel}
              </button>

              <p className="text-center text-gray-400 text-xs">
                {CAREER_DETAIL_COPY.postedPrefix} {job.posted}
              </p>

              {/* Skills */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {CAREER_DETAIL_COPY.skillsLabel}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{ backgroundColor: job.bgColor, color: job.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
