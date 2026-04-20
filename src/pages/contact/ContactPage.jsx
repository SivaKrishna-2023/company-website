// src/pages/contact/ContactPage.jsx
import { useInView } from "../../hooks/useInView";
import ContactHeader from "../../components/contact/ContactHeader";
import ContactForm   from "../../components/contact/ContactForm";
import ContactInfo   from "../../components/contact/ContactInfo";
import ContactAbout  from "../../components/contact/ContactAbout";
import { CONTACT_DETAILS, ABOUT_STATS, CONTACT_PAGE_COPY } from "../../constants/contact/contactData";
import { cn } from "../../utils/cn";


export default function ContactPage() {
  const [heroRef,     heroInView]     = useInView(0.08);
  const [locationRef, locationInView] = useInView(0.06);
  const [aboutRef,    aboutInView]    = useInView(0.1);

  return (
    <>
      <section
        ref={heroRef}
        aria-labelledby="contact-main-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactHeader
              heading={CONTACT_PAGE_COPY.heroHeading}
              subtext={CONTACT_PAGE_COPY.heroSubtext}
              phone={CONTACT_DETAILS.phone}
              phoneTel={CONTACT_DETAILS.phoneTel}
              email={CONTACT_DETAILS.email}
              className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            />

            {/* Right: Formik-powered form */}
            <div
              className={cn(
                "transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div ref={locationRef}>
        <ContactInfo
          heading={CONTACT_PAGE_COPY.locationHeading}
          subtext={CONTACT_PAGE_COPY.locationSubtext}
          address={CONTACT_DETAILS.address}
          hours={CONTACT_DETAILS.hours}
          mapEmbedSrc={CONTACT_DETAILS.mapEmbedSrc}
          inView={locationInView}
        />
      </div>


      <div ref={aboutRef}>
        <ContactAbout
          heading={CONTACT_PAGE_COPY.aboutHeading}
          subtext={CONTACT_PAGE_COPY.aboutSubtext}
          stats={ABOUT_STATS}
          imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80"
          imageAlt="Innova Orbit team collaboration session"
          inView={aboutInView}
        />
      </div>
    </>
  );
}
