/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease both",
        "fade-in":    "fadeIn 0.6s ease both",
        "slide-left": "slideLeft 0.7s ease both",
        "slide-right":"slideRight 0.7s ease both",
        "scale-in":   "scaleIn 0.5s ease both",
      },
      keyframes: {
        fadeUp:     { from: { opacity:"0", transform:"translateY(28px)" }, to: { opacity:"1", transform:"translateY(0)" } },
        fadeIn:     { from: { opacity:"0" }, to: { opacity:"1" } },
        slideLeft:  { from: { opacity:"0", transform:"translateX(-36px)" }, to: { opacity:"1", transform:"translateX(0)" } },
        slideRight: { from: { opacity:"0", transform:"translateX(36px)"  }, to: { opacity:"1", transform:"translateX(0)" } },
        scaleIn:    { from: { opacity:"0", transform:"scale(0.94)" }, to: { opacity:"1", transform:"scale(1)" } },
      },
    },
  },
  plugins: [],
};
