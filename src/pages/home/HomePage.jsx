// src/pages/home/HomePage.jsx
import HeroSection            from "../../components/home/HeroSection";
import AboutSection           from "../../components/home/AboutSection";
import ServicesPreviewSection from "../../components/home/ServicesPreviewSection";
import WhyUsSection           from "../../components/home/WhyUsSection";
import CTABannerSection       from "../../components/shared/CTABannerSection";

/**
 * Home page orchestrator.
 *
 * Responsibilities (ONLY):
 *  - Compose page sections in the correct order
 *  - No logic, no data, no inline JSX sections
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <CTABannerSection />
    </>
  );
}
