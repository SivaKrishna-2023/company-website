// src/pages/career-detail/CareerDetailPage.jsx
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { JOBS } from "../../constants/careers";
import CareerDetailHero  from "../../components/careers/CareerDetailHero";
import CareerDetailBody  from "../../components/careers/CareerDetailBody";
import SimilarJobsSection from "../../components/careers/SimilarJobsSection";
import ApplyModal        from "../../components/careers/ApplyModal";
import CTABannerSection  from "../../components/shared/CTABannerSection";

/**
 * Career detail page orchestrator.
 *
 * Responsibilities (ONLY):
 *  - Resolve :id param → job data (guard redirect on miss)
 *  - Own modal open/close UI state (page-level state, not business logic)
 *  - Compose page sections in the correct order
 *  - Pass resolved data as props — no rendering logic
 */
export default function CareerDetailPage() {
  const { id }     = useParams();
  const job        = JOBS.find((j) => j.id === id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!job) return <Navigate to="/careers" replace />;

  const similarJobs = JOBS.filter((j) => j.id !== id).slice(0, 3);

  return (
    <>
      <CareerDetailHero job={job} onApply={() => setModalOpen(true)} />
      <CareerDetailBody job={job} onApply={() => setModalOpen(true)} />
      <SimilarJobsSection jobs={similarJobs} />
      <CTABannerSection />

      {modalOpen && (
        <ApplyModal job={job} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
