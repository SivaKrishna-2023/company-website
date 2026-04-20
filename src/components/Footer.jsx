// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcon from "./ui/SocialIcon";
import { NAV_LINKS, SOCIAL_LINKS, SERVICES } from "../constants/services";

export default function Footer() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setErrors({});
    setTimeout(() => { setSubmitted(false); setForm({ name: "", mobile: "", email: "" }); }, 4000);
  };

  const inputClass = (field) =>
    `w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm
     focus:outline-none focus:ring-1 transition-all duration-200
     ${errors[field] ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:border-[#1A7AFF] focus:ring-[#1A7AFF]"}`;

  return (
    <footer id="contact" className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-14 border-b border-white/10">

          {/* Column 1 – Brand + Contact Info */}
          <div>
            <p className="font-display font-bold text-xl text-white mb-3">
              Innova Orbit Global Solutions LLP
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Reach out for tailored IT solutions in web development, digital marketing, and career support.
            </p>
            <div className="flex gap-3 mb-8">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon
                  key={s.name}
                  name={s.icon}
                  href={s.href}
                  className="text-gray-400 hover:text-white"
                  size="md"
                />
              ))}
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 uppercase text-[10px] font-bold tracking-widest mb-1">EMAIL</p>
                <a href="mailto:info@innovaorbitglobalsolutions.com" className="text-gray-300 text-sm hover:text-[#1A7AFF] transition-colors duration-200">
                  info@innovaorbitglobalsolutions.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px] font-bold tracking-widest mb-1">PHONE</p>
                <a href="tel:+918977876644" className="text-gray-300 text-sm hover:text-[#1A7AFF] transition-colors duration-200">
                  +91 – 8977876644
                </a>
              </div>
            </div>
          </div>

          
          <div>
            <p className="font-display font-bold text-base text-white mb-6 uppercase tracking-wide">Quick Links</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-[#1A7AFF] text-xs">›</span>{label}
                  </Link>
                </li>
              ))}
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-[#1A7AFF] text-xs">›</span>{s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact Form */}
          <div>
            <p className="font-display font-bold text-base text-white mb-6 uppercase tracking-wide">Get In Touch</p>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="text-5xl">✅</div>
                <p className="text-white font-semibold text-lg">Thank you!</p>
                <p className="text-gray-400 text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter name here"
                    className={inputClass("name")}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    placeholder="Enter your mobile number"
                    className={inputClass("mobile")}
                  />
                  {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email address"
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="mt-1 px-8 py-3 bg-[#1A7AFF] text-white rounded-full font-semibold text-sm hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-900/30"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© 2025 Innova Orbit Global Solutions LLP. All rights reserved.</p>
          <p>Built with ❤️ for real results.</p>
        </div>
      </div>
    </footer>
  );
}
