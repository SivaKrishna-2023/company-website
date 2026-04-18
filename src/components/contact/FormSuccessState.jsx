// src/components/contact/FormSuccessState.jsx

/**
 * Single-responsibility: renders the post-submission success UI.
 *
 * @param {function} onReset - Callback to allow sending another message
 */
export default function FormSuccessState({ onReset }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-start gap-5 py-10"
    >
      {/* Checkmark icon */}
      <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          stroke="#22c55e"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <div>
        <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Thank you for reaching out. Our team will get back to you within&nbsp;
          <strong className="text-gray-700">24 business hours</strong>.
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#1A7AFF] text-[#1A7AFF] text-sm font-semibold hover:bg-[#1A7AFF] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A7AFF]/30"
      >
        ← Send Another Message
      </button>
    </div>
  );
}
