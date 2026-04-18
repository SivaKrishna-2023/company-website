// src/components/careers/CareersPageHero.jsx
import DarkPageHero from "../shared/DarkPageHero";
import { JOBS } from "../../constants/careers";
import { CAREERS_HERO_COPY } from "../../constants/careers/careersPageData";

/**
 * Single responsibility: hero banner for the /careers page.
 * Passes careers-specific copy and floating badges to DarkPageHero.
 */
export default function CareersPageHero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DarkPageHero
      label={CAREERS_HERO_COPY.label}
      heading={CAREERS_HERO_COPY.heading}
      accent={CAREERS_HERO_COPY.accent}
      subtext={CAREERS_HERO_COPY.subtext}
      floatingStart={
        <>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {JOBS.length} Open Positions
        </>
      }
      floatingEnd={
        <span>🌐 {CAREERS_HERO_COPY.floatingBadge}</span>
      }
      actions={
        <>
          <a href="#openings" onClick={scrollTo("openings")} className="btn-primary">
            {CAREERS_HERO_COPY.ctaOpenings}
          </a>
          <a href="#culture" onClick={scrollTo("culture")} className="btn-outline-white">
            {CAREERS_HERO_COPY.ctaCulture}
          </a>
        </>
      }
    />
  );
}
