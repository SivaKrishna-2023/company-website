// src/components/home/HeroFeaturePill.jsx

/**
 * Single responsibility: renders one glass feature pill in the hero strip.
 * @param {string} title
 * @param {string} desc
 * @param {number} delayMs - CSS animation delay in ms
 */
export default function HeroFeaturePill({ title, desc, delayMs = 0 }) {
  return (
    <div
      className="glass px-8 py-10 text-left text-white hover:bg-white/15 transition-colors duration-300 cursor-default"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
