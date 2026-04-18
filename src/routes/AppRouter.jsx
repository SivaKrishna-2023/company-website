// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout       from "../layouts/MainLayout";
import HomePage         from "../pages/home/HomePage";
import ServicesPage     from "../pages/services/ServicesPage";
import ServiceDetailPage from "../pages/service-detail/ServiceDetailPage";
import CareersPage      from "../pages/careers/CareersPage";
import CareerDetailPage from "../pages/career-detail/CareerDetailPage";
import ContactPage      from "../pages/contact/ContactPage";
import NotFound         from "../pages/NotFound";

/**
 * Centralized routing configuration.
 *
 * Every route is wrapped in MainLayout (Navbar + Footer + scroll-to-top).
 * All page components are thin orchestrators — no logic lives here.
 *
 * Routes:
 *   /                    → HomePage
 *   /services            → ServicesPage
 *   /services/:slug      → ServiceDetailPage
 *   /careers             → CareersPage
 *   /careers/:id         → CareerDetailPage
 *   /contact             → ContactPage
 *   *                    → NotFound (404)
 */
export default function AppRouter() {
  const wrap = (PageComponent) => (
    <MainLayout>
      <PageComponent />
    </MainLayout>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={wrap(HomePage)} />
        <Route path="/services"       element={wrap(ServicesPage)} />
        <Route path="/services/:slug" element={wrap(ServiceDetailPage)} />
        <Route path="/careers"        element={wrap(CareersPage)} />
        <Route path="/careers/:id"    element={wrap(CareerDetailPage)} />
        <Route path="/contact"        element={wrap(ContactPage)} />
        <Route path="*"               element={wrap(NotFound)} />
      </Routes>
    </BrowserRouter>
  );
}
