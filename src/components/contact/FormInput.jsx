// src/components/contact/FormInput.jsx
import { cn } from "../../utils/cn";

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
}) {
  const hasError = touched && Boolean(error);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 select-none"
      >
        {label}
        {required && (
          <span className="text-red-400 ml-0.5" aria-hidden="true">*</span>
        )}
      </label>

      {/* Input */}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 bg-white",
          "transition-all duration-200 focus:outline-none focus:ring-2",
          hasError
            ? "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
            : "border-gray-200 focus:border-[#1A7AFF] focus:ring-[#1A7AFF]/15 hover:border-gray-300"
        )}
      />

      {/* Error message */}
      {hasError && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-xs text-red-500 mt-0.5"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
