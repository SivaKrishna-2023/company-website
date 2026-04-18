// src/pages/Careers.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { JOBS, JOB_DEPARTMENTS, CULTURE_PERKS } from "../constants/careers.js";
import { useInView } from "../hooks/useInView";
import JobCard from "../components/ui/JobCard";
import CTABanner from "../components/CTABanner";
import { cn } from "../utils/cn";

// ─────────────────────────────────────────────
// Page Hero
// ─────────────────────────────────────────────
function CareersHero() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] rounded-full bg-[#1A7AFF]/20 blur-[90px] pointer-events-none" />

      {/* Floating job-count chips */}
      <div className="absolute top-16 left-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm text-white/70 text-xs font-medium animate-fade-in delay-500">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        {JOBS.length} Open Positions
      </div>
      <div className="absolute bottom-16 right-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm text-white/70 text-xs font-medium animate-fade-in delay-700">
        🌐 Remote &amp; On-site Roles
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-fade-up">
        <span className="inline-block text-[#1A7AFF] font-semibold text-xs uppercase tracking-widest mb-4">
          Join Our Team
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-5">
          Build Your Career<br />
          <span className="text-[#1A7AFF]">With Us</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          We're looking for talented individuals who are passionate about technology,
          creativity, and making real impact. Explore our open roles below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#openings"
            onClick={(e) => { e.preventDefault(); document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary"
          >
            View Open Positions
          </a>
          <a
            href="#culture"
            onClick={(e) => { e.preventDefault(); document.getElementById("culture")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-outline-white"
          >
            Our Culture
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Stats bar
// ─────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "6",   label: "Open Roles" },
    { value: "4.9", label: "Glassdoor Rating" },
    { value: "98%", label: "Retention Rate" },
  ];

  return (
    <div className="bg-[#1A7AFF]">
      <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-white">
            <p className="font-display font-bold text-2xl md:text-3xl">{s.value}</p>
            <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Culture Perks
// ─────────────────────────────────────────────
function CultureSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="culture" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">Life at Innova Orbit</span>
          <h2 className="section-title mx-auto mb-4">Why Work With Us?</h2>
          <p className="section-sub mx-auto max-w-lg">
            We believe great work happens when people are empowered, valued, and challenged.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_PERKS.map((perk, i) => (
            <div
              key={perk.title}
              className={cn(
                "group p-7 rounded-2xl border border-gray-100 hover:border-[#1A7AFF]/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {perk.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Job Listings with filter
// ─────────────────────────────────────────────
function JobListings() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView(0.05);

  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesDept = activeFilter === "All" || job.department === activeFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDept && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="openings" ref={ref} className="py-24 bg-[#EEF6FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">Opportunities</span>
          <h2 className="section-title mx-auto mb-4">Open Positions</h2>
          <p className="section-sub mx-auto max-w-md">
            Find the role that matches your skills and ambitions.
          </p>
        </div>

        {/* Search + Filter toolbar */}
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-100",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, skill or tag…"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A7AFF]/30 focus:border-[#1A7AFF] transition-all duration-200"
            />
          </div>

          {/* Department filter pills */}
          <div className="flex flex-wrap gap-2">
            {JOB_DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                  activeFilter === dept
                    ? "bg-[#1A7AFF] text-white border-[#1A7AFF] shadow-md shadow-blue-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1A7AFF] hover:text-[#1A7AFF]"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing <strong className="text-gray-700">{filtered.length}</strong> of{" "}
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
            <p className="font-display font-bold text-xl text-gray-700 mb-2">No roles found</p>
            <p className="text-gray-400 text-sm">Try a different search term or department filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
              className="mt-6 px-6 py-2.5 rounded-full border-2 border-gray-300 text-gray-600 text-sm font-semibold hover:border-[#1A7AFF] hover:text-[#1A7AFF] transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Application process steps
// ─────────────────────────────────────────────
function HiringProcess() {
  const [ref, inView] = useInView(0.1);
  const steps = [
    { num: "01", icon: "📝", title: "Apply Online",       desc: "Submit your application with your resume and a short cover note." },
    { num: "02", icon: "📞", title: "Initial Screening",  desc: "Our recruiter reaches out for a quick 15-minute intro call." },
    { num: "03", icon: "🧠", title: "Technical Round",    desc: "A role-specific assessment or technical interview with the team." },
    { num: "04", icon: "🤝", title: "Offer & Onboarding", desc: "Receive your offer letter and get started with a smooth onboarding." },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title mx-auto mb-4">Our Hiring Process</h2>
          <p className="section-sub mx-auto max-w-md">
            Simple, transparent, and human — we respect your time at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={cn(
                "relative bg-[#EEF6FF] rounded-2xl p-7 transition-all duration-400 hover:shadow-md hover:-translate-y-1",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-display font-bold text-5xl text-[#1A7AFF]/12 leading-none block mb-3">
                {step.num}
              </span>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-display font-bold text-base text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-[#1A7AFF]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Main Page export
// ─────────────────────────────────────────────
export default function Careers() {
  return (
    <>
      <CareersHero />
      <StatsBar />
      <CultureSection />
      <JobListings />
      <HiringProcess />
      <CTABanner />
    </>
  );
}
