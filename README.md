# Innova Orbit Global Solutions LLP — Production Website

A fully production-ready React.js company website with proper architecture, React Router, Tailwind CSS, custom hooks, and reusable component system.

---

## 🚀 Quick Start

```bash
npm install       # Install all dependencies
npm run dev       # Start dev server → http://localhost:5173
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
```

---

## 📁 Complete Folder Structure

```
innova-orbit-pro/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── App.jsx                        ← Root app (renders AppRouter)
    ├── main.jsx                       ← React DOM mount
    │
    ├── styles/
    │   └── globals.css                ← Tailwind + custom classes + fonts
    │
    ├── constants/
    │   └── services.js                ← All static data (services, nav, stats)
    │
    ├── hooks/
    │   ├── useInView.js               ← IntersectionObserver scroll detection
    │   ├── useScrolled.js             ← Window scroll threshold hook
    │   └── useCountUp.js             ← rAF-based animated number counter
    │
    ├── utils/
    │   ├── cn.js                      ← className combiner utility
    │   └── scroll.js                  ← Smooth scroll-to-id helper
    │
    ├── components/
    │   ├── ui/
    │   │   ├── AnimatedSection.jsx    ← Scroll-triggered animation wrapper
    │   │   ├── ServiceCard.jsx        ← Reusable card (grid & list layouts)
    │   │   ├── SocialIcon.jsx         ← SVG social icons component
    │   │   └── StatCard.jsx           ← Animated stats counter card
    │   │
    │   ├── Navbar.jsx                 ← Sticky responsive navbar
    │   ├── Footer.jsx                 ← Footer + validated contact form
    │   ├── HeroSection.jsx            ← Full-screen Pexels video hero
    │   ├── AboutSection.jsx           ← About + animated count-up stats
    │   ├── ServicesPreview.jsx        ← 3-col services grid (homepage)
    │   ├── WhyUsSection.jsx           ← Why Choose Us feature grid
    │   └── CTABanner.jsx              ← Call-to-action blue banner
    │
    ├── layouts/
    │   └── MainLayout.jsx             ← Navbar + Footer + scroll-to-top
    │
    ├── pages/
    │   ├── Home.jsx                   ← / route
    │   ├── Services.jsx               ← /services route
    │   ├── ServiceDetail.jsx          ← /services/:slug dynamic route
    │   └── NotFound.jsx               ← * 404 route
    │
    └── routes/
        └── AppRouter.jsx              ← Centralized routing config
```

---

## 🔀 Routes

| URL                        | Page            | Notes                            |
|----------------------------|-----------------|----------------------------------|
| `/`                        | Home            | Full homepage with all sections  |
| `/services`                | Services        | Listing + Our Process section    |
| `/services/web-development`| ServiceDetail   | Web Dev detail page              |
| `/services/digital-marketing`| ServiceDetail | Digital Marketing detail         |
| `/services/career-support` | ServiceDetail   | Career Support detail            |
| `/careers`                 | Services        | Alias → services page            |
| `/contact`                 | Home            | Alias → scrolls to footer form   |
| `*`                        | NotFound        | 404 page                         |

---

## 🛠️ Tech Stack

- **React 19** — functional components + hooks
- **React Router v7** — client-side routing
- **Tailwind CSS v3** — utility-first styling
- **Vite 8** — build tool

---

## 🎨 Design Tokens

| Token        | Value       |
|--------------|-------------|
| Brand Blue   | `#1A7AFF`   |
| Dark Navy    | `#0F172A`   |
| Light BG     | `#EEF6FF`   |
| Display Font | Syne        |
| Body Font    | DM Sans     |

## 🌐 Deploy

**Vercel:** `npx vercel --prod`
**Netlify:** Upload `dist/` — add `_redirects`: `/* /index.html 200`
