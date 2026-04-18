// src/pages/services/ServicesPage.jsx
import ServicesPageHero from "../../components/services/ServicesPageHero";
import ServicesList     from "../../components/services/ServicesList";
import ProcessSection   from "../../components/services/ProcessSection";
import CTABannerSection from "../../components/shared/CTABannerSection";

/**
 * Services page orchestrator.
 *
 * Responsibilities (ONLY):
 *  - Compose page sections in the correct order
 *  - No logic, no data, no inline JSX sections
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesList />
      <ProcessSection />
      <CTABannerSection />
    </>
  );
}
