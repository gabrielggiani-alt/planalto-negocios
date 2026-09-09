"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";
import { empresa, telefoneHref } from "@/lib/empresa";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const previousOverflow = document.body.style.overflow;
      const desktop = window.matchMedia("(min-width: 1024px)");
      const closeOnDesktop = () => {
        if (desktop.matches) setMobileOpen(false);
      };
      document.body.style.overflow = "hidden";
      menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
        if (e.key !== "Tab") return;
        const controls = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      desktop.addEventListener("change", closeOnDesktop);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", onKey);
        desktop.removeEventListener("change", closeOnDesktop);
        openerRef.current?.focus();
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "bg-background/95 border-b border-gold-deep/40"
            : "bg-background border-b border-border-subtle"
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
            <Logo variant="full" size={42} />
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="site-nav-link transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={telefoneHref}
              className="inline-flex min-h-12 items-center gap-3 px-5 py-3 btn-primary text-base font-medium"
            >
              <PhoneIcon size={16} className="relative shrink-0" />
              <span className="relative tabular-nums">{empresa.telefone}</span>
            </a>
          </div>

          <button
            ref={openerRef}
            onClick={() => setMobileOpen(true)}
            className="lg:hidden min-w-12 min-h-12 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon size={26} />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          ref={menuRef}
          className="site-header lg:hidden fixed inset-0 z-50 bg-background flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="flex shrink-0 items-center justify-between px-6 h-[76px] border-b border-gold-deep/40">
            <Logo variant="full" size={42} />
            <button
              onClick={() => setMobileOpen(false)}
              className="min-w-12 min-h-12 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
              aria-label="Fechar menu"
            >
              <CloseIcon size={26} />
            </button>
          </div>

          <nav
            className="flex flex-col items-stretch justify-center flex-1 gap-3 px-6 py-6 w-full max-w-md mx-auto"
            aria-label="Navegação mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="site-nav-link justify-center py-3 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={telefoneHref}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-3 px-4 py-4 btn-primary text-lg font-medium"
            >
              <PhoneIcon size={20} className="shrink-0" />
              <span className="tabular-nums">{empresa.telefone}</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
