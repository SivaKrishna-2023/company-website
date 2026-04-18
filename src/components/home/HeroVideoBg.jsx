// src/components/home/HeroVideoBg.jsx

/**
 * Single responsibility: renders the full-screen background video + overlay.
 * @param {string} src - Video URL
 */
export default function HeroVideoBg({ src }) {
  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
    </>
  );
}
