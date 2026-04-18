// src/pages/CareerDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { JOBS } from "../constants/careers.js";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

// ─────────────────────────────────────────────
// Apply Modal
// ─────────────────────────────────────────────
function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputCls = (field) => cn(
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400",
    "focus:outline-none focus:ring-2 transition-all duration-200",
    errors[field]
      ? "border-red-300 focus:ring-red-200"
      : "border-gray-200 focus:ring-[#1A7AFF]/25 focus:border-[#1A7AFF]"
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Modal header */}
        <div className="px-7 py-5 border-b border-gray-100 flex items-start justify-between" style={{ backgroundColor: job.bgColor }}>
          <div>
            <span className="text-2xl">{job.icon}</span>
            <h2 className="font-display font-bold text-xl text-gray-900 mt-1">{job.title}</h2>
            <p className="text-sm text-gray-500">{job.department} · {job.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none ml-4 transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="px-7 py-6 overflow-y-auto max-h-[70vh]">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <div className="text-6xl">🎉</div>
              <h3 className="font-display font-bold text-2xl text-gray-900">Application Submitted!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thanks, <strong>{form.name}</strong>! Our team will review your application and reach out within 3–5 business days.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-full bg-[#1A7AFF] text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                <input type="text" placeholder="John Doe" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls("name")} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                <input type="email" placeholder="john@example.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls("email")} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls("phone")} />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">LinkedIn Profile</label>
                <input type="url" placeholder="https://linkedin.com/in/your-profile" value={form.linkedin}
                  onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className={inputCls("linkedin")} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Why are you a great fit?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about yourself and why you're excited about this role…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(inputCls("message"), "resize-none")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-white font-bold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg"
                style={{ backgroundColor: job.color }}
              >
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Career Detail Page
// ─────────────────────────────────────────────
export default function CareerDetail() {
  const { id } = useParams();
  const job = JOBS.find((j) => j.id === id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!job) return <Navigate to="/careers" replace />;

  const others = JOBS.filter((j) => j.id !== id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-10 pb-0 overflow-hidden"
        style={{ backgroundColor: job.bgColor }}
      >
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-0">
          {/* Breadcrumb */}
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-8 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Careers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start pb-14">
            {/* Left: job info */}
            <div className="lg:col-span-3 animate-fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-white shadow-sm"
                  style={{ backgroundColor: "white" }}
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
                  { icon: "📍", label: job.location },
                  { icon: "💼", label: job.experience },
                  { icon: "⏱", label: job.type },
                  { icon: "🖥", label: job.mode },
                  { icon: "💰", label: job.salary },
                ].map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium shadow-sm">
                    {icon} {label}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-base leading-relaxed">{job.description}</p>
            </div>

            {/* Right: Apply card */}
            <div className="lg:col-span-2 animate-slide-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Interested in this role?</h3>
                <p className="text-gray-500 text-sm mb-5">Apply now and our team will reach out within 3–5 business days.</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg mb-3"
                  style={{ backgroundColor: job.color, boxShadow: `0 8px 24px ${job.color}33` }}
                >
                  Apply for this Role →
                </button>
                <p className="text-center text-gray-400 text-xs">Posted {job.posted}</p>

                {/* Skills */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Skills Required</p>
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

      {/* Details */}
      <JobDetails job={job} onApply={() => setModalOpen(true)} />

      {/* Similar jobs */}
      <SimilarJobs jobs={others} />

      {/* Apply modal */}
      {modalOpen && <ApplyModal job={job} onClose={() => setModalOpen(false)} />}
    </>
  );
}

function JobDetails({ job, onApply }) {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-10">

            {/* Responsibilities */}
            <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5 flex items-center gap-2">
                <span style={{ color: job.color }}>📋</span> Responsibilities
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
            <div className={cn("transition-all duration-700 delay-100", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5 flex items-center gap-2">
                <span style={{ color: job.color }}>🎓</span> Requirements
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
                onClick={onApply}
                className="w-full py-4 rounded-full text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: job.color }}
              >
                Apply for this Role →
              </button>
            </div>
          </div>

          {/* Right: Company snippet */}
          <div className={cn(
            "lg:col-span-2 transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">About Innova Orbit</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Innova Orbit Global Solutions LLP is a professional services company specializing in web development,
                digital marketing, and career support for IT professionals. We are a fast-growing, people-first team
                based in Hyderabad, India.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Industry",   val: "IT Services & Consulting" },
                  { label: "Founded",    val: "2020" },
                  { label: "Team Size",  val: "11–50 employees" },
                  { label: "Location",   val: "Hyderabad, India" },
                ].map(({ label, val }) => (
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

function SimilarJobs({ jobs }) {
  const [ref, inView] = useInView(0.1);
  if (!jobs.length) return null;

  return (
    <section ref={ref} className="py-16 bg-[#EEF6FF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className={cn("mb-10 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <span className="section-label">More Roles</span>
          <h2 className="section-title">Similar Positions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className={cn(
                "group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-1 w-12 rounded-full mb-4 transition-all duration-300 group-hover:w-20" style={{ backgroundColor: job.color }} />
              <div className="text-2xl mb-3">{job.icon}</div>
              <h3 className="font-display font-bold text-base text-gray-900 mb-1 group-hover:text-[#1A7AFF] transition-colors">{job.title}</h3>
              <p className="text-gray-400 text-xs mb-3">{job.department} · {job.experience}</p>
              <span
                className="text-xs font-bold"
                style={{ color: job.color }}
              >
                View Role →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
