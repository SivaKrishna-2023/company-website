// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesPreview from "../components/ServicesPreview";
import WhyUsSection from "../components/WhyUsSection";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <WhyUsSection />
      <CTABanner />
    </>
  );
}
