// src/constants/services.js
export const SERVICES = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    tagline: "Custom websites built to fit your unique business needs.",
    description:
      "We design and develop high-performance, scalable web applications tailored to your specific business goals. From landing pages to enterprise platforms, we deliver pixel-perfect, fast-loading websites with clean code architecture.",
    features: [
      "Responsive & mobile-first design",
      "React / Next.js / Vue.js frontends",
      "Node.js & Python backends",
      "REST & GraphQL APIs",
      "CMS integration (Strapi, Sanity, WordPress)",
      "Performance & SEO optimization",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    icon: "💻",
    color: "#1A7AFF",
    bgColor: "#EEF6FF",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Ads",
    tagline: "Targeted campaigns that connect you with the right customers.",
    description:
      "Data-driven digital marketing strategies that grow brand awareness, drive qualified leads, and convert visitors into loyal customers. We craft tailored campaigns across every major channel.",
    features: [
      "Google Ads & PPC campaigns",
      "Meta & Instagram advertising",
      "SEO & content marketing",
      "Email marketing automation",
      "Social media management",
      "Analytics & conversion tracking",
    ],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    icon: "📣",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
  {
    id: "career-support",
    slug: "career-support",
    title: "Career Support",
    shortTitle: "Career Help",
    tagline: "Interview prep and placement support to launch IT careers.",
    description:
      "From mock interviews to resume crafting and job placement assistance, we help IT professionals land their dream roles. Our career coaches have placed hundreds of candidates at top tech companies.",
    features: [
      "1-on-1 mock interview sessions",
      "Resume & LinkedIn optimization",
      "Job placement assistance",
      "Technical interview coaching",
      "Soft-skills & communication",
      "Industry-specific grooming",
    ],
    image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800&q=80",
    icon: "🎯",
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
];

export const STATS = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 15,  suffix: "",  label: "Trusted Partners" },
  { value: 5,   suffix: "+", label: "Years Experience" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
];

export const NAV_LINKS = [
  { label: "Home",     path: "/" },
  { label: "Services", path: "/services" },
  { label: "Careers",  path: "/careers" },
  { label: "Contact",  path: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "Facebook",  href: "#", icon: "facebook"  },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "LinkedIn",  href: "#", icon: "linkedin"  },
  { name: "X",         href: "#", icon: "x"         },
];

export const WHY_US = [
  { icon: "🚀", title: "Expert Team",       desc: "Seasoned professionals with deep domain expertise across web, marketing, and career coaching." },
  { icon: "🎯", title: "Result-Focused",    desc: "Every solution we craft is aligned with delivering measurable outcomes for your business." },
  { icon: "⚡", title: "Fast Delivery",     desc: "Agile processes mean you get high-quality work delivered on time, every time." },
  { icon: "🤝", title: "Dedicated Support", desc: "Round-the-clock support to ensure your operations never miss a beat." },
  { icon: "🛡️", title: "Secure & Reliable", desc: "Enterprise-grade security and reliability built into everything we build." },
  { icon: "💡", title: "Innovation-Led",    desc: "Constantly evolving with latest trends to keep you ahead of the competition." },
];
