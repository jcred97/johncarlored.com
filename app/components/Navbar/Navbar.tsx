"use client";

import Link from "next/link";
import { useEffect, useState, ViewTransition } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 text-foreground backdrop-blur-md"
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto w-full max-w-6xl px-6 py-4 text-sm font-medium sm:px-8 md:py-5"
        >
          <div className="flex items-center justify-between gap-8">
            <Link
              href="/"
              className="font-semibold text-zinc-100 transition-colors hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              JOHN CARLO RED
            </Link>
            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 place-items-center rounded-md border border-white/10 text-zinc-300 transition-colors hover:border-red-300/40 hover:text-red-300 md:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <FaBars className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="hidden items-center justify-end gap-8 text-center md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-300 transition-colors hover:text-red-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <ViewTransition>
        <div
          className={`fixed inset-0 z-[70] md:hidden ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className={`absolute inset-0 bg-slate-950/45 backdrop-blur-md transition-opacity duration-200 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          />
          <div
            id="mobile-navigation"
            className={`absolute inset-y-0 right-0 z-10 flex w-[min(74vw,19rem)] flex-col border-l border-white/10 bg-[#090a18] shadow-2xl shadow-black/40 transition-transform duration-200 ease-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <p className="font-display text-sm font-semibold tracking-normal text-zinc-100">
                Navigation
              </p>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="grid size-10 place-items-center rounded-md text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-red-300"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <FaXmark className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid gap-2 px-3 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-semibold text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-red-300"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ViewTransition>
    </>
  );
}
