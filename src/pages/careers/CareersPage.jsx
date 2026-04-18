// src/pages/careers/CareersPage.jsx
import CareersPageHero      from "../../components/careers/CareersPageHero";
import CareersStatsBar      from "../../components/careers/CareersStatsBar";
import CultureSection       from "../../components/careers/CultureSection";
import JobListings          from "../../components/careers/JobListings";
import HiringProcessSection from "../../components/careers/HiringProcessSection";
import CTABannerSection     from "../../components/shared/CTABannerSection";

/**
 * Careers page orchestrator.
 *
 * Responsibilities (ONLY):
 *  - Compose page sections in the correct order
 *  - No logic, no data, no inline JSX sections
 */
export default function CareersPage() {
  return (
    <>
      <CareersPageHero />
      <CareersStatsBar />
      <CultureSection />
      <JobListings />
      <HiringProcessSection />
      <CTABannerSection />
    </>
  );
}
