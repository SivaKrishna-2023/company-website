// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

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
