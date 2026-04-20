// src/components/contact/ContactInfo.jsx
import { cn } from "../../utils/cn";

export default function ContactInfo({
  heading,
  subtext,
  address,
  hours,
  mapEmbedSrc,
  inView = true,
  className = "",
}) {
  const animBase = "transition-all duration-700";

  return (
    <section
      aria-labelledby="location-heading"
      className={cn("bg-[#0F172A]", className)}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={cn(
              animBase,
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h2
              id="location-heading"
              className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5"
            >
              {heading}
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              {subtext}
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col gap-7",
              animBase,
              "delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {/* Address */}
            <div>
              <p className="font-display font-bold text-white text-base mb-2">
                Address
              </p>
              <address className="not-italic text-gray-300 text-sm leading-relaxed">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.line3}
              </address>
            </div>

            <div>
              <p className="font-display font-bold text-white text-base mb-2">
                Hours
              </p>
              <p className="text-gray-300 text-sm">{hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "mx-6 max-w-[calc(100%-3rem)] mx-auto overflow-hidden rounded-t-2xl",
          animBase,
          "delay-300",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
        style={{ height: 400 }}
      >
        <iframe
          title="Innova Orbit Global Solutions — Vishnu Plaza, Ameerpet, Hyderabad"
          src={mapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
