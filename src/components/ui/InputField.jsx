// src/components/ui/InputField.jsx
import { cn } from "../../utils/cn";

/**
 * Reusable controlled input / textarea for contact forms.
 *
 * @param {"input"|"textarea"} as      - Element type
 * @param {string}  label              - Label text (shown above field)
 * @param {string}  name               - Field name (used for id + htmlFor)
 * @param {string}  type               - Input type (text, email, tel…)
 * @param {string}  placeholder
 * @param {string}  value
 * @param {function} onChange
 * @param {string}  error              - Validation error message
 * @param {boolean} required
 * @param {number}  rows               - textarea rows (default 5)
 * @param {string}  className
 * @param {"light"|"dark"} variant     - light = white bg, dark = dark bg (footer)
 */
export default function InputField({
  as = "input",
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 5,
  className = "",
  variant = "light",
}) {
  const isTextarea = as === "textarea";

  const baseInput = cn(
    "w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200",
    "focus:outline-none focus:ring-2",
    variant === "light"
      ? cn(
          "bg-white text-gray-800 placeholder-gray-400",
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-gray-200 focus:border-[#1A7AFF] focus:ring-[#1A7AFF]/15"
        )
      : cn(
          "bg-white/10 text-white placeholder-gray-500",
          error
            ? "border-red-400 focus:ring-red-300/30"
            : "border-white/10 focus:border-[#1A7AFF] focus:ring-[#1A7AFF]/20"
        ),
    isTextarea && "resize-none",
    className
  );

  const labelCls = cn(
    "block text-sm font-medium mb-1.5",
    variant === "light" ? "text-gray-700" : "text-gray-400"
  );

  return (
    <div>
      {label && (
        <label htmlFor={name} className={labelCls}>
          {label}
          {required && (
            <span className="text-red-400 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}

      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}
