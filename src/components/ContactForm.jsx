// src/components/ContactForm.jsx
import { useState } from "react";
import InputField from "./ui/InputField";
import { cn } from "../utils/cn";

const INITIAL = { name: "", email: "", mobile: "", message: "" };

export default function ContactForm({ variant = "light", className = "" }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ── validation ──────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.mobile.trim()) e.mobile = "Mobile number is required";
    if (!form.message.trim()) e.message = "Please write a message";
    return e;
  };

  // ── submit ───────────────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate async submit (wire to API/EmailJS in production)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setErrors({});
    }, 900);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(INITIAL);
  };

  // ── success state ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center py-16 gap-5",
          className,
        )}
      >
        <div className="text-6xl animate-bounce">✅</div>
        <h3
          className={cn(
            "font-display font-bold text-2xl",
            variant === "dark" ? "text-white" : "text-gray-900",
          )}
        >
          Message Sent!
        </h3>
        <p
          className={cn(
            "text-sm max-w-xs",
            variant === "dark" ? "text-gray-400" : "text-gray-500",
          )}
        >
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={handleReset}
          className="mt-2 px-6 py-2.5 rounded-full border-2 border-[#1A7AFF] text-[#1A7AFF] text-sm font-semibold hover:bg-[#1A7AFF] hover:text-white transition-all duration-200"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-5", className)}
      aria-label="Contact form"
    >
      {/* Name */}
      <InputField
        label="Your Full Name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        required
        variant={variant}
      />

      {/* Email */}
      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        required
        variant={variant}
      />

      {/* Mobile */}
      <InputField
        label="Mobile number"
        name="mobile"
        type="tel"
        placeholder="Enter your mobile number"
        value={form.mobile}
        onChange={handleChange}
        error={errors.mobile}
        required
        variant={variant}
      />

      {/* Message */}
      <InputField
        as="textarea"
        label="Message"
        name="message"
        rows={5}
        placeholder="Write your message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        required
        variant={variant}
      />

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "px-10 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300",
            "bg-[#1A7AFF] hover:bg-blue-600 hover:scale-105 shadow-lg shadow-blue-200",
            "disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100",
            "focus:outline-none focus:ring-2 focus:ring-[#1A7AFF]/40 focus:ring-offset-2",
          )}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending…
            </span>
          ) : (
            "submit"
          )}
        </button>
      </div>
    </form>
  );
}
