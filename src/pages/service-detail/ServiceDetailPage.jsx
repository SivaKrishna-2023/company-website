// src/pages/service-detail/ServiceDetailPage.jsx
import { useParams, Navigate } from "react-router-dom";
import { SERVICES } from "../../constants/services";
import ServiceDetailHero     from "../../components/services/ServiceDetailHero";
import ServiceFeaturesSection from "../../components/services/ServiceFeaturesSection";
import OtherServicesSection  from "../../components/services/OtherServicesSection";
import CTABannerSection      from "../../components/shared/CTABannerSection";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service  = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceFeaturesSection service={service} />
      <OtherServicesSection services={others} />
      <CTABannerSection />
    </>
  );
}
