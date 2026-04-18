// src/hooks/useContactForm.js
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import { contactSchema, contactInitialValues } from "../validation/contactValidation";


export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,  setIsSubmitted]  = useState(false);
  const [submitError,  setSubmitError]  = useState(null);

  const submitToApi = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { success: true };
  };

  const formik = useFormik({
    initialValues: contactInitialValues,

    validationSchema: toFormikValidationSchema(contactSchema),

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

  const resetSuccess = () => setIsSubmitted(false);

  return {
    formik,
    isSubmitting,
    isSubmitted,
    submitError,
    resetSuccess,
  };
}
