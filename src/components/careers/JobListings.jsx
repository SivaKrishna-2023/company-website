// src/components/careers/JobListings.jsx
import { useState, useMemo } from "react";
import { useInView } from "../../hooks/useInView";
import JobCard from "./JobCard";
import JobSearchBar from "./JobSearchBar";
import JobFilterPills from "./JobFilterPills";
import { JOBS } from "../../constants/careers";
import { JOB_LISTINGS_COPY } from "../../constants/careers/careersPageData";
import { cn } from "../../utils/cn";


export default function JobListings() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery,  setSearchQuery]  = useState("");
  const [ref, inView] = useInView(0.05);

  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesDept   = activeFilter === "All" || job.department === activeFilter;
      const q             = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDept && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleClear = () => {
    setSearchQuery("");
    setActiveFilter("All");
  };

  return (
    <section
      id="openings"
      ref={ref}
      className="py-24 bg-[#EEF6FF]"
      aria-labelledby="openings-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">{JOB_LISTINGS_COPY.label}</span>
          <h2 id="openings-heading" className="section-title mx-auto mb-4">
            {JOB_LISTINGS_COPY.heading}
          </h2>
          <p className="section-sub mx-auto max-w-md">{JOB_LISTINGS_COPY.subtext}</p>
        </div>

        {/* Toolbar: search + filters */}
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-100",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <JobSearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <JobFilterPills active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing{" "}
          <strong className="text-gray-700">{filtered.length}</strong> of{" "}
          <strong className="text-gray-700">{JOBS.length}</strong> positions
        </p>

        {/* Job cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((job, i) => (
              <div
                key={job.id}
                className={cn(
                  "transition-all duration-500",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${Math.min(i * 80, 500)}ms` }}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-display font-bold text-xl text-gray-700 mb-2">
              {JOB_LISTINGS_COPY.noResultsTitle}
            </p>
            <p className="text-gray-400 text-sm">{JOB_LISTINGS_COPY.noResultsSubtext}</p>
            <button
              onClick={handleClear}
              className="mt-6 px-6 py-2.5 rounded-full border-2 border-gray-300 text-gray-600 text-sm font-semibold hover:border-[#1A7AFF] hover:text-[#1A7AFF] transition-all duration-200"
            >
              {JOB_LISTINGS_COPY.clearFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
