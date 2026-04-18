// src/components/services/ServiceFeatureItem.jsx
import { cn } from "../../utils/cn";

/**
 * Single responsibility: one feature item in the service detail features grid.
 *
 * @param {string}  text
 * @param {string}  accentColor  - Service brand colour for checkmark + border
 * @param {boolean} inView
 * @param {number}  delayMs
 */
export default function ServiceFeatureItem({ text, accentColor, inView, delayMs = 0 }) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-6 rounded-xl border border-gray-100",
        "hover:shadow-md transition-all duration-300",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${delayMs}ms`,
        borderColor: inView ? `${accentColor}33` : undefined,
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
        style={{ backgroundColor: accentColor }}
      >
        ✓
      </div>
      <span className="text-gray-700 text-sm leading-relaxed font-medium">{text}</span>
    </div>
  );
}
