// src/hooks/useContactForm.js
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import { contactSchema, contactInitialValues } from "../validation/contactValidation";

/**
 * Custom hook that encapsulates ALL contact form logic.
 *
 * Responsibilities:
 *  - Formik setup (values, errors, touched, handlers)
 *  - Zod schema wired via zod-formik-adapter
 *  - Async submit simulation (replace with real API call)
 *  - Loading and success state management
 *
 * Returns everything the <ContactForm /> UI component needs — no logic in the UI.
 */
export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,  setIsSubmitted]  = useState(false);
  const [submitError,  setSubmitError]  = useState(null);

  // ─── Simulated API submit (swap for real endpoint) ───────────────────────
  const submitToApi = async (values) => {
    // Example real call:
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    // if (!res.ok) throw new Error("Server error, please try again.");
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { success: true };
  };

  const formik = useFormik({
    initialValues: contactInitialValues,

    // Zod schema → Formik validation (fully decoupled from UI)
    validationSchema: toFormikValidationSchema(contactSchema),

    // Only validate on submit + on field blur (not on every keystroke)
    validateOnChange: false,
    validateOnBlur:   true,

    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        await submitToApi(values);
        resetForm();
        setIsSubmitted(true);
      } catch (err) {
        setSubmitError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  /** Allow user to send another message after success */
  const resetSuccess = () => setIsSubmitted(false);

  return {
    formik,
    isSubmitting,
    isSubmitted,
    submitError,
    resetSuccess,
  };
}
