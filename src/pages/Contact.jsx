// src/pages/Contact.jsx
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import ContactForm from "../components/ContactForm";
import ContactInfoCard from "../components/ui/ContactInfoCard";
import { cn } from "../utils/cn";

// ─── Contact data constants ──────────────────────────────────────────────────
const CONTACT_INFO = {
  phone: "+91 - 8977876644",
  email: "info@innovaorbitglobalsolutions.com",
  address: "Flat no.4, 2nd Floor, Vishnu Plaza, Dharam Karan Road, Ameerpet, Hyderabad, Telangana - 500016",
  hours: "Mon-Sat 9am-9pm",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2938613709856!2d78.44768031487671!3d17.43730388804153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0f5526d31%3A0xe2e79f39d1a8a41a!2sVishnu%20Plaza%2C%20Swathi%20Ave%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1713430000000!5m2!1sen!2sin",
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 1: Get in Touch  (screenshot 1)
// Left: heading + contact details  |  Right: contact form
// ─────────────────────────────────────────────────────────────────────────────
function GetInTouchSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left – heading + info */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
              Reach out to innova orbit global solutions llp for tailored IT and marketing support.
            </p>

            {/* Phone */}
            <div className="mb-7">
              <ContactInfoCard
                label="Phone"
                value={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone.replace(/\s|-/g, "")}`}
                variant="light"
              />
            </div>

            {/* Email */}
            <div>
              <ContactInfoCard
                label="Email"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
                variant="light"
              />
            </div>
          </div>

          {/* Right – form */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <ContactForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2: Our Location  (screenshots 2 & 3)
// Dark bg – heading + address/hours left  |  Google Map embed right + below
// ─────────────────────────────────────────────────────────────────────────────
function LocationSection() {
  const [ref, inView] = useInView(0.06);

  return (
    <section ref={ref} className="bg-[#0F172A]">
      {/* Top part: text */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
              Our Location
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Find us at the heart of the city, where innovation meets opportunity for your business and career growth.
            </p>
          </div>

          {/* Right – Address + Hours */}
          <div
            className={cn(
              "space-y-7 transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <p className="font-display font-bold text-white text-base mb-2">Address</p>
              <p className="text-gray-300 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
            </div>
            <div>
              <p className="font-display font-bold text-white text-base mb-2">Hours</p>
              <p className="text-gray-300 text-sm">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map embed – full-width inside the dark section */}
      <div
        className={cn(
          "mx-6 mb-0 rounded-t-2xl overflow-hidden transition-all duration-700 delay-300",
          "max-w-[calc(100%-3rem)] mx-auto",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ height: "400px" }}
      >
        <iframe
          title="Innova Orbit Location – Vishnu Plaza, Ameerpet, Hyderabad"
          src={CONTACT_INFO.mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3: About mini  (screenshot 4)
// Left: heading + stats  |  Right: team photo
// ─────────────────────────────────────────────────────────────────────────────
function AboutMiniSection() {
  const [ref, inView] = useInView(0.1);
  const clients  = useCountUp(150, inView, 1800);
  const partners = useCountUp(15,  inView, 1600);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              About Innova Orbit<br />Global Solutions LLP
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              Helping businesses grow with practical web solutions and guiding professionals toward successful IT careers.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-14">
              <div>
                <p className="font-display font-bold text-5xl text-[#1A7AFF] leading-none">
                  {clients}+
                </p>
                <p className="text-gray-500 text-sm mt-1.5">100+</p>
              </div>
              <div>
                <p className="font-display font-bold text-5xl text-[#1A7AFF] leading-none">
                  {partners}
                </p>
                <p className="text-gray-500 text-sm mt-1.5">Trusted Globally</p>
              </div>
            </div>
          </div>

          {/* Right – photo */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80"
              alt="Innova Orbit team collaboration"
              className="w-full h-[440px] object-cover object-center rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page export
// ─────────────────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <GetInTouchSection />
      <LocationSection />
      <AboutMiniSection />
    </>
  );
}
