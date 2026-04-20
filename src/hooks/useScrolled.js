// src/hooks/useScrolled.js
import { useEffect, useState } from "react";

export function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // check on mount
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}
