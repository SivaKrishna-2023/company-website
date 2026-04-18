// src/components/home/WhyUsFeatureCard.jsx
import { cn } from "../../utils/cn";

/**
 * Single responsibility: one feature card in the "Why Us" grid.
 * @param {string}  icon
 * @param {string}  title
 * @param {string}  desc
 * @param {boolean} inView
 * @param {number}  delayMs
 */
export default function WhyUsFeatureCard({ icon, title, desc, inView, delayMs = 0 }) {
  return (
    <div
      className={cn(
        "group p-8 rounded-2xl border border-gray-100",
        "hover:border-[#1A7AFF]/25 hover:shadow-lg hover:-translate-y-1",
        "transition-all duration-400 cursor-default",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
