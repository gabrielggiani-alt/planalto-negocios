"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./Icons";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 border-b border-gold-deep/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 h-[76px] flex items-center justify-between"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            aria-label="Planalto Negócios — Início"
            className="shrink-0 hover:opacity-90 transition-opacity"
          >
            <Logo variant="full" size={34} />
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary text-[12px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/sistema"
              className="group relative inline-flex items-center px-6 py-2.5 border border-gold/60 text-gold text-[11px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 hover:border-gold hover:text-background"
            >
              <span className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="relative">Sistema</span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-text-secondary hover:text-gold transition-colors"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon size={26} />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="flex items-center justify-between px-6 h-[76px] border-b border-gold-deep/40">
            <Logo variant="full" size={32} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text-secondary hover:text-gold transition-colors"
              aria-label="Fechar menu"
            >
              <CloseIcon size={26} />
            </button>
          </div>

          <nav
            className="flex flex-col items-center justify-center flex-1 gap-8 px-6"
            aria-label="Navegação mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text text-2xl tracking-[0.2em] uppercase hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sistema"
              onClick={() => setMobileOpen(false)}
              className="mt-6 px-10 py-3 border border-gold text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-background transition-colors"
            >
              Sistema
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
