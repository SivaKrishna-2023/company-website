// src/components/services/ServicesPageHero.jsx
import DarkPageHero from "../shared/DarkPageHero";
import { SERVICES_PAGE_HERO } from "../../constants/services/servicesPageData";

export default function ServicesPageHero() {
  return (
    <DarkPageHero
      label={SERVICES_PAGE_HERO.label}
      heading={SERVICES_PAGE_HERO.heading}
      subtext={SERVICES_PAGE_HERO.subtext}
    />
  );
}
