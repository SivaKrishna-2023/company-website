// // src/routes/AppRouter.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import HomePage from "../pages/home/HomePage";
// import ServicesPage from "../pages/services/ServicesPage";
// import ServiceDetailPage from "../pages/service-detail/ServiceDetailPage";
// import CareersPage from "../pages/careers/CareersPage";
// import CareerDetailPage from "../pages/career-detail/CareerDetailPage";
// import ContactPage from "../pages/contact/ContactPage";
// import NotFound from "../pages/NotFound";

// /**
//  * Centralized routing configuration.
//  *
//  * Every route is wrapped in MainLayout (Navbar + Footer + scroll-to-top).
//  * All page components are thin orchestrators — no logic lives here.
//  *
//  * Routes:
//  *   /                    → HomePage
//  *   /services            → ServicesPage
//  *   /services/:slug      → ServiceDetailPage
//  *   /careers             → CareersPage
//  *   /careers/:id         → CareerDetailPage
//  *   /contact             → ContactPage
//  *   *                    → NotFound (404)
//  */
// export default function AppRouter() {
//   const wrap = (PageComponent) => (
//     <MainLayout>
//       <PageComponent />
//     </MainLayout>
//   );

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={wrap(HomePage)} />
//         <Route path="/services" element={wrap(ServicesPage)} />
//         <Route path="/services/:slug" element={wrap(ServiceDetailPage)} />
//         <Route path="/careers" element={wrap(CareersPage)} />
//         <Route path="/careers/:id" element={wrap(CareerDetailPage)} />
//         <Route path="/contact" element={wrap(ContactPage)} />
//         <Route path="*" element={wrap(NotFound)} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/common/Loader";

// Lazy imports
const HomePage = lazy(() => import("../pages/home/HomePage"));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage"));
const ServiceDetailPage = lazy(() => import("../pages/service-detail/ServiceDetailPage"));
const CareersPage = lazy(() => import("../pages/careers/CareersPage"));
const CareerDetailPage = lazy(() => import("../pages/career-detail/CareerDetailPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRouter() {
  const wrap = (PageComponent) => (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <PageComponent />
      </Suspense>
    </MainLayout>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={wrap(HomePage)} />
        <Route path="/services" element={wrap(ServicesPage)} />
        <Route path="/services/:slug" element={wrap(ServiceDetailPage)} />
        <Route path="/careers" element={wrap(CareersPage)} />
        <Route path="/careers/:id" element={wrap(CareerDetailPage)} />
        <Route path="/contact" element={wrap(ContactPage)} />
        <Route path="*" element={wrap(NotFound)} />
      </Routes>
    </BrowserRouter>
  );
}