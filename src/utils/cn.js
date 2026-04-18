// src/utils/cn.js
/**
 * Lightweight className combiner — joins truthy strings.
 * Usage: cn("base", condition && "extra", "another")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
