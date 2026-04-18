// src/components/careers/HiringStepCard.jsx
import { cn } from "../../utils/cn";


export default function HiringStepCard({
  num,
  icon,
  title,
  desc,
  inView,
  delayMs = 0,
  showConnector = false,
}) {
  return (
    <div
      className={cn(
        "relative bg-[#EEF6FF] rounded-2xl p-7",
        "transition-all duration-400 hover:shadow-md hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <span className="font-display font-bold text-5xl text-[#1A7AFF]/[0.12] leading-none block mb-3">
        {num}
      </span>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-display font-bold text-base text-gray-900 mb-2">{title}</h3>
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
