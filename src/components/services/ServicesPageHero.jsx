// src/components/services/ServicesPageHero.jsx
import DarkPageHero from "../shared/DarkPageHero";
import { SERVICES_PAGE_HERO } from "../../constants/services/servicesPageData";

/**
 * Single responsibility: hero banner for the /services page.
 * Delegates layout to DarkPageHero; passes Services-specific copy.
 */
export default function ServicesPageHero() {
  return (
    <DarkPageHero
      label={SERVICES_PAGE_HERO.label}
      heading={SERVICES_PAGE_HERO.heading}
      subtext={SERVICES_PAGE_HERO.subtext}
    />
  );
}
