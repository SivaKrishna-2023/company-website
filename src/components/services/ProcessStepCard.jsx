// src/components/services/ProcessStepCard.jsx
import { cn } from "../../utils/cn";

/**
 * Single responsibility: renders one step card in the "Our Process" section.
 *
 * @param {string}  num        - Step number string e.g. "01"
 * @param {string}  title
 * @param {string}  desc
 * @param {boolean} inView
 * @param {number}  delayMs
 * @param {boolean} showConnector - Show right-side connector line on desktop
 */
export default function ProcessStepCard({ num, title, desc, inView, delayMs = 0, showConnector = false }) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md",
        "transition-all duration-400 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <span className="font-display font-bold text-5xl text-[#1A7AFF]/15 leading-none block mb-3">
        {num}
      </span>
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

      {showConnector && (
        <div
          className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-[#1A7AFF]/30"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
