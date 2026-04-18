// src/components/services/ServicesListItem.jsx
import ServiceCard from "../shared/ServiceCard";
import { cn } from "../../utils/cn";


export default function ServicesListItem({ service, inView, delayMs = 0 }) {
  return (
    <div
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <ServiceCard service={service} layout="list" />
    </div>
  );
}
