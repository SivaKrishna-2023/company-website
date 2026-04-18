// src/components/home/HeroSection.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroVideoBg        from "./HeroVideoBg";
import HeroFeaturePill    from "./HeroFeaturePill";
import HeroScrollIndicator from "./HeroScrollIndicator";
import {
  HERO_VIDEO_URL,
  HERO_COPY,
  HERO_FEATURE_PILLS,
} from "../../constants/home/homeData";
import { cn } from "../../utils/cn";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) =>
    cn(
      "transition-all duration-700",
      delay,
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroVideoBg src={HERO_VIDEO_URL} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className={cn(anim("delay-0"), "mb-6")}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A7AFF] animate-pulse" />
            {HERO_COPY.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={cn(anim("delay-100"), "font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] max-w-4xl")}
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}
        >
          {HERO_COPY.headline}{" "}
          <span className="text-[#1A7AFF]">{HERO_COPY.accent}</span>
        </h1>

        {/* Subtext */}
        <p className={cn(anim("delay-200"), "mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed")}>
          {HERO_COPY.subtext}
        </p>

        {/* CTAs */}
        <div className={cn(anim("delay-300"), "mt-10 flex flex-wrap justify-center gap-4")}>
          <Link to="/services" className="btn-outline-white">
            {HERO_COPY.ctaSecondary}
          </Link>
          <Link to="/contact" className="btn-primary">
            {HERO_COPY.ctaPrimary}
          </Link>
        </div>

        {/* Feature strip */}
        <div className={cn(anim("delay-500"), "mt-20 grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl")}>
          {HERO_FEATURE_PILLS.map((pill, i) => (
            <HeroFeaturePill
              key={pill.id}
              title={pill.title}
              desc={pill.desc}
              delayMs={600 + i * 80}
            />
          ))}
        </div>
      </div>

      <HeroScrollIndicator visible={visible} />
    </section>
  );
}
