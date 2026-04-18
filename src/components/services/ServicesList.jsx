// src/components/services/ServicesList.jsx
import { useInView } from "../../hooks/useInView";
import ServicesListItem from "./ServicesListItem";
import { SERVICES } from "../../constants/services";

/**
 * Single responsibility: renders the full list of services on /services page.
 * Owns its own useInView ref; maps data to ServicesListItem atoms.
 */
export default function ServicesList() {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-20 bg-white" aria-label="Services list">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {SERVICES.map((service, i) => (
          <ServicesListItem
            key={service.id}
            service={service}
            inView={inView}
            delayMs={i * 140}
          />
        ))}
      </div>
    </section>
  );
}
