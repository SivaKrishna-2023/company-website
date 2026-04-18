// src/components/contact/ContactForm.jsx
import { useContactForm } from "../../hooks/useContactForm";
import FormInput        from "./FormInput";
import FormTextArea     from "./FormTextArea";
import SubmitButton     from "./SubmitButton";
import FormSuccessState from "./FormSuccessState";
import { cn } from "../../utils/cn";


export default function ContactForm({ className = "" }) {
  const {
    formik,
    isSubmitting,
    isSubmitted,
    submitError,
    resetSuccess,
  } = useContactForm();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  // ── Success state ──────────────────────────────────────────────────────
  if (isSubmitted) {
    return <FormSuccessState onReset={resetSuccess} />;
  }

  // ── Form UI ────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact us form"
      className={cn("flex flex-col gap-5", className)}
    >
      {/* Name */}
      <FormInput
        id="name"
        label="Your Full Name"
        type="text"
        placeholder="Enter your name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
        required
      />

      {/* Email */}
      <FormInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
        required
      />

      {/* Mobile */}
      <FormInput
        id="mobile"
        label="Mobile number"
        type="tel"
        placeholder="Enter your mobile number"
        value={values.mobile}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.mobile}
        touched={touched.mobile}
        required
      />

      {/* Message */}
      <FormTextArea
        id="message"
        label="Message"
        placeholder="Write your message"
        rows={5}
        maxLength={1000}
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.message}
        touched={touched.message}
        required
      />

      {/* Server-level error (non-field) */}
      {submitError && (
        <p
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
        >
          ⚠ {submitError}
        </p>
      )}

      {/* Submit */}
      <div>
        <SubmitButton isSubmitting={isSubmitting} label="submit" />
      </div>
    </form>
  );
}
