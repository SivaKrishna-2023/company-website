// src/components/contact/SubmitButton.jsx
import { cn } from "../../utils/cn";

/**
 * Single-responsibility: renders the form submit button.
 *
 * Handles three visual states:
 *  - idle     → "submit" label
 *  - loading  → spinner + "Sending…"
 *  - disabled → muted appearance + no pointer events
 *
 * @param {boolean}  isSubmitting  - Show loading spinner
 * @param {boolean}  disabled      - Disable interaction
 * @param {string}   label         - Idle label (default "submit")
 * @param {string}   className
 */
export default function SubmitButton({
  isSubmitting = false,
  disabled = false,
  label = "submit",
  className = "",
}) {
  return (
    <button
      type="submit"
      disabled={disabled || isSubmitting}
      aria-busy={isSubmitting}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-10 py-3.5 rounded-full font-semibold text-sm text-white",
        "bg-[#1A7AFF] hover:bg-blue-600",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#1A7AFF]/40 focus:ring-offset-2",
        "disabled:opacity-65 disabled:cursor-not-allowed disabled:scale-100",
        !disabled && !isSubmitting && "hover:scale-105 shadow-lg shadow-blue-200",
        className
      )}
    >
      {isSubmitting ? (
        <>
          {/* Spinner */}
          <svg
            className="animate-spin w-4 h-4 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          <span>Sending…</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}
