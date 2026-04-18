// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView] — triggers once when element enters viewport.
 * @param {number} threshold - 0..1 visibility threshold
 * @param {string} rootMargin - CSS margin string e.g. "0px 0px -80px 0px"
 */
export function useInView(threshold = 0.15, rootMargin = "0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
