// src/components/ui/JobCard.jsx
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function JobCard({ job, layout = "grid", className = "" }) {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl border border-gray-100 overflow-hidden",
        "hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {job.urgent && (
        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-wider border border-red-100">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Urgent
        </span>
      )}

      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: job.color }}
      />

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ backgroundColor: job.bgColor }}
          >
            {job.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-[1rem] text-gray-900 leading-tight mb-1 group-hover:text-[#1A7AFF] transition-colors duration-200 pr-16">
              {job.title}
            </h3>
            <p className="text-gray-400 text-xs">{job.department} · {job.posted}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <MetaChip icon="📍" label={job.location} />
          <MetaChip icon="⏱" label={job.type} />
          <MetaChip icon="💼" label={job.experience} />
          <MetaChip icon="🖥" label={job.mode} />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {job.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
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

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-gray-900 font-bold text-sm">{job.salary}</span>
          <Link
            to={`/careers/${job.id}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{
              backgroundColor: job.color,
              boxShadow: `0 4px 14px ${job.color}33`,
            }}
          >
            Apply Now
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetaChip({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 text-[11px] font-medium border border-gray-100">
      <span>{icon}</span>
      {label}
    </span>
  );
}
