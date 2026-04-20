// src/pages/services/ServicesPage.jsx
import ServicesPageHero from "../../components/services/ServicesPageHero";
import ServicesList     from "../../components/services/ServicesList";
import ProcessSection   from "../../components/services/ProcessSection";
import CTABannerSection from "../../components/shared/CTABannerSection";

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
