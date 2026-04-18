// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import SocialIcon from "./ui/SocialIcon";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants/services";
import { cn } from "../utils/cn";

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-[1.05rem] font-bold text-[#1A7AFF] leading-tight tracking-tight max-w-[220px] hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          Innova Orbit Global Solutions LLP
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                cn(
                  "nav-underline text-[0.9rem] font-medium transition-colors duration-200",
                  isActive ? "active text-[#1A7AFF]" : "text-gray-700 hover:text-[#1A7AFF]"
                )
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2 border-l border-gray-200 pl-4">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon
                key={s.name}
                name={s.icon}
                href={s.href}
                className="text-gray-500 hover:text-[#1A7AFF]"
                size="sm"
              />
            ))}
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={cn("block w-6 h-[2px] bg-gray-700 transition-transform duration-300 origin-center", menuOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block w-6 h-[2px] bg-gray-700 transition-opacity duration-300", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-[2px] bg-gray-700 transition-transform duration-300 origin-center", menuOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn("text-base font-medium transition-colors", isActive ? "text-[#1A7AFF]" : "text-gray-700")
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex gap-4 pt-3 border-t border-gray-100 text-gray-500">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.name} name={s.icon} href={s.href} className="hover:text-[#1A7AFF]" size="sm" />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
