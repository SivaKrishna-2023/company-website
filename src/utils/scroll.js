// src/utils/scroll.js

/**
 * Smoothly scrolls to an element by ID.
 * @param {string} id - DOM element id (without #)
 * @param {number} offset - Optional pixel offset from top (e.g. for sticky navbar)
 */
export function scrollToId(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
