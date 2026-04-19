// src/pages/careers/CareersPage.jsx
import CareersPageHero      from "../../components/careers/CareersPageHero";
import CareersStatsBar      from "../../components/careers/CareersStatsBar";
import CultureSection       from "../../components/careers/CultureSection";
import JobListings          from "../../components/careers/JobListings";
import HiringProcessSection from "../../components/careers/HiringProcessSection";
import CTABannerSection     from "../../components/shared/CTABannerSection";


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
