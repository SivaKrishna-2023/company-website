// src/components/careers/ApplyModal.jsx
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { cn } from "../../utils/cn";
import { CAREER_DETAIL_COPY } from "../../constants/careers/careersPageData";

const applySchema = z.object({
  name:     z.string().min(1, "Full name is required"),
  email:    z.string().email("Enter a valid email address"),
  phone:    z.string().min(1, "Phone number is required"),
  linkedin: z.string().optional(),
  message:  z.string().optional(),
});

const INITIAL = { name: "", email: "", phone: "", linkedin: "", message: "" };

export default function ApplyModal({ job, onClose }) {
  const formik = useFormik({
    initialValues: INITIAL,
    validationSchema: toFormikValidationSchema(applySchema),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (_, { resetForm }) => {
      resetForm();
      formik._submitted = true;
      // Force re-render by touching submitted state via setSubmitting
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, submitCount } = formik;
  const isSuccess = submitCount > 0 && Object.keys(errors).length === 0 && !isSubmitting;

  const inputCls = (field) => cn(
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400",
    "focus:outline-none focus:ring-2 transition-all duration-200",
    touched[field] && errors[field]
      ? "border-red-300 focus:ring-red-200 bg-red-50/30"
      : "border-gray-200 focus:ring-[#1A7AFF]/25 focus:border-[#1A7AFF]"
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in">

        {/* Modal header */}
        <div
          className="px-7 py-5 border-b border-gray-100 flex items-start justify-between"
          style={{ backgroundColor: job.bgColor }}
        >
          <div>
            <span className="text-2xl">{job.icon}</span>
            <h2
              id="apply-modal-title"
              className="font-display font-bold text-xl text-gray-900 mt-1"
            >
              {job.title}
            </h2>
            <p className="text-sm text-gray-500">{job.department} · {job.location}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none ml-4 transition-colors"
            aria-label="Close application modal"
          >
            ×
          </button>
        </div>

        {/* Modal body */}
        <div className="px-7 py-6 overflow-y-auto max-h-[70vh]">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <div className="text-6xl">🎉</div>
              <h3 className="font-display font-bold text-2xl text-gray-900">
                {CAREER_DETAIL_COPY.applyModalTitle}
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thanks, <strong>{values.name || "there"}</strong>!{" "}
                {CAREER_DETAIL_COPY.applyModalThanks}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-full bg-[#1A7AFF] text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                {CAREER_DETAIL_COPY.applyModalClose}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {[
                { id: "name",     label: "Full Name",        type: "text",  required: true  },
                { id: "email",    label: "Email Address",    type: "email", required: true  },
                { id: "phone",    label: "Phone Number",     type: "tel",   required: true  },
                { id: "linkedin", label: "LinkedIn Profile", type: "url",   required: false },
              ].map(({ id, label, type, required }) => (
                <div key={id}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    {label} {required && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={values[id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls(id)}
                    aria-invalid={touched[id] && Boolean(errors[id])}
                  />
                  {touched[id] && errors[id] && (
                    <p className="text-red-500 text-xs mt-1">{errors[id]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Why are you a great fit?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us a bit about yourself…"
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
