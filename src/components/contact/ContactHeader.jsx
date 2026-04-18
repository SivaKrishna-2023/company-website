// src/components/contact/ContactHeader.jsx
import { cn } from "../../utils/cn";

/**
 * Renders the left-side heading + subtext + contact details
 * shown in the top "Get in Touch" section of the Contact page.
 *
 * @param {string} heading
 * @param {string} subtext
 * @param {string} phone
 * @param {string} phoneTel   - href-safe phone string
 * @param {string} email
 * @param {string} className
 */
export default function ContactHeader({
  heading,
  subtext,
  phone,
  phoneTel,
  email,
  className = "",
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      {/* Page heading */}
      <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
        {heading}
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
        {subtext}
      </p>

      {/* Contact details list */}
      <div className="flex flex-col gap-7">
        {/* Phone */}
        <div>
          <p className="font-display font-bold text-base text-gray-900 mb-1">Phone</p>
          <a
            href={`tel:${phoneTel}`}
            className="text-gray-600 text-sm hover:text-[#1A7AFF] transition-colors duration-200"
          >
            {phone}
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="font-display font-bold text-base text-gray-900 mb-1">Email</p>
          <a
            href={`mailto:${email}`}
            className="text-gray-600 text-sm hover:text-[#1A7AFF] transition-colors duration-200 break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
