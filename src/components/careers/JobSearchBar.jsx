// src/components/careers/JobSearchBar.jsx
import { JOB_LISTINGS_COPY } from "../../constants/careers/careersPageData";

/**
 * Single responsibility: the search input in the job listings toolbar.
 *
 * @param {string}   value
 * @param {function} onChange
 */
export default function JobSearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 max-w-sm">
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none"
        aria-hidden="true"
      >
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={JOB_LISTINGS_COPY.searchPlaceholder}
        aria-label="Search jobs"
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A7AFF]/30 focus:border-[#1A7AFF] transition-all duration-200"
      />
    </div>
  );
}
