"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "/services" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Calculadora ROI", href: "#roi-calculator" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    // Clear any previous color frequency theme preference
    const root = document.documentElement;
    root.classList.remove("theme-purple", "theme-green", "theme-amber");
    try {
      localStorage.removeItem("theme-tone");
    } catch (e) {
      console.warn("Storage access is blocked:", e);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Scroll Spy Observer
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = NAV_ITEMS
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // triggers when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    }, observerOptions);

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      for (const section of sections) {
        observer.unobserve(section);
      }
    };
  }, [pathname]);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-white/5 backdrop-blur-md transition-all duration-500 ease-out",
        scrolled
          ? "bg-[rgba(5,15,30,0.8)] shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-[var(--nav-height)] items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl tracking-tight text-white hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Carlos Rivadeneyra<sup className="text-xs">®</sup>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href.startsWith("#")
                ? pathname === "/" && activeSection === item.href.substring(1)
                : pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
                      isActive
                        ? "text-white bg-white/10 border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                        : "text-[#a8a8a8] border border-transparent hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-5 py-2 text-sm text-white hover:scale-[1.03] transition-all cursor-pointer inline-flex items-center justify-center"
          >
            Agenda una demo
          </a>


        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] text-text transition-colors hover:border-[color:var(--border-glow)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:hidden"
          aria-label="Abrir o cerrar el menú de navegación"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-[color:var(--border-subtle)] bg-[color:rgba(5,10,28,0.96)] px-6 pb-8 pt-6 shadow-[0_20px_60px_rgba(2,6,23,0.9)] backdrop-blur-2xl absolute left-0 right-0 top-[var(--nav-height)] z-40"
          >
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href.startsWith("#")
                  ? pathname === "/" && activeSection === item.href.substring(1)
                  : pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleNavigate}
                      className={cn(
                        "block rounded-2xl border px-4 py-3 text-base font-medium transition-all duration-300",
                        isActive
                          ? "border-[color:var(--border-strong)] bg-[color:rgba(124,58,237,0.15)] text-primary shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                          : "border-transparent bg-[color:rgba(12,20,37,0.72)] text-text hover:border-[color:var(--border-strong)] hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>


            <a
              href="https://cal.com/carlos-rivadeneyra/descubrimiento-de-negocio-plan-de-ia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigate}
              className="liquid-glass mt-6 w-full rounded-full py-3 text-base text-white hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center justify-center"
            >
              Agenda una demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
