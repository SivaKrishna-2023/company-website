// src/components/ui/ContactInfoCard.jsx
import { cn } from "../../utils/cn";

export default function ContactInfoCard({
  icon,
  label,
  value,
  href,
  className = "",
  variant = "light",
}) {
  const labelCls = cn(
    "font-display font-bold text-base mb-1",
    variant === "dark" ? "text-white" : "text-gray-900"
  );

  const valueCls = cn(
    "text-sm leading-relaxed",
    variant === "dark" ? "text-gray-300" : "text-gray-600"
  );

  const content = href ? (
    <a
      href={href}
      className={cn(valueCls, "hover:text-[#1A7AFF] transition-colors duration-200")}
    >
      {value}
    </a>
  ) : (
    <span className={valueCls}>{value}</span>
  );

  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <p className={labelCls}>{label}</p>
      {content}
    </div>
  );
}
