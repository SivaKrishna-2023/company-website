// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display font-bold text-[8rem] leading-none text-gray-100 select-none">404</p>
      <h1 className="font-display font-bold text-3xl text-gray-900 -mt-4 mb-3">Page Not Found</h1>
      <p className="text-gray-500 text-base mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}
