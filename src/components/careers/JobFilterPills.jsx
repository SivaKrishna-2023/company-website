// src/components/careers/JobFilterPills.jsx
import { JOB_DEPARTMENTS } from "../../constants/careers";
import { cn } from "../../utils/cn";


export default function JobFilterPills({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by department">
      {JOB_DEPARTMENTS.map((dept) => (
        <button
          key={dept}
          onClick={() => onChange(dept)}
          aria-pressed={active === dept}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
            active === dept
              ? "bg-[#1A7AFF] text-white border-[#1A7AFF] shadow-md shadow-blue-200"
              : "bg-white text-gray-600 border-gray-200 hover:border-[#1A7AFF] hover:text-[#1A7AFF]"
          )}
        >
          {dept}
        </button>
      ))}
    </div>
  );
}
