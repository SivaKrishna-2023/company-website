// src/components/HeroSection.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HERO_VIDEO = "https://videos.pexels.com/video-files/852421/852421-hd_1280_720_30fps.mp4";

const FEATURE_PILLS = [
  { title: "Web Dev",    desc: "Building websites that boost your business." },
  { title: "Marketing",  desc: "Custom designs with seamless user experience." },
  { title: "Career",     desc: "Optimized for performance and growth." },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const cls = (delay) =>
    `transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className={`${cls("delay-0")} mb-6`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A7AFF] animate-pulse" />
            Professional IT Services Company
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`${cls("delay-100")} font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] max-w-4xl`}
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}
        >
          Solutions That Drive{" "}
          <span className="text-[#1A7AFF]">Your Success</span>
        </h1>

        {/* Subtext */}
        <p className={`${cls("delay-200")} mt-6 text-lg md:text-xl text-white/78 max-w-lg leading-relaxed`}>
          Web development, marketing, and career support tailored for real results.
        </p>

        {/* CTAs */}
        <div className={`${cls("delay-300")} mt-10 flex flex-wrap justify-center gap-4`}>
          <Link to="/services" className="btn-outline-white">
            Explore Services
          </Link>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary"
          >
            Get Started
          </a>
        </div>

        {/* Feature strip */}
        <div className={`${cls("delay-500")} mt-20 grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl`}>
          {FEATURE_PILLS.map((f, i) => (
            <div
              key={f.title}
              className="glass px-8 py-10 text-left text-white hover:bg-white/15 transition-colors duration-300 cursor-default"
              style={{ transitionDelay: `${600 + i * 80}ms` }}
            >
              <h3 className="font-display font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${cls("delay-700")} absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2`}>
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
