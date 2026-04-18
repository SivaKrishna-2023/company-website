// src/components/careers/SimilarJobsSection.jsx
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { CAREER_DETAIL_COPY } from "../../constants/careers/careersPageData";
import { cn } from "../../utils/cn";


export default function SimilarJobsSection({ jobs }) {
  const [ref, inView] = useInView(0.1);

  if (!jobs.length) return null;

  return (
    <section
      ref={ref}
      className="py-16 bg-[#EEF6FF]"
      aria-labelledby="similar-jobs-heading"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className={cn(
          "mb-10 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <span className="section-label">{CAREER_DETAIL_COPY.moreRolesLabel}</span>
          <h2 id="similar-jobs-heading" className="section-title">
            {CAREER_DETAIL_COPY.moreRolesHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className={cn(
                "group block bg-white rounded-2xl p-6 border border-gray-100",
                "hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="h-1 w-12 rounded-full mb-4 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: job.color }}
              />
              <div className="text-2xl mb-3">{job.icon}</div>
              <h3 className="font-display font-bold text-base text-gray-900 mb-1 group-hover:text-[#1A7AFF] transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-400 text-xs mb-3">{job.department} · {job.experience}</p>
              <span className="text-xs font-bold" style={{ color: job.color }}>
                View Role →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
