import Link from "next/link";
import { ChevronRightIcon } from "./Icons";
import type { ReactNode } from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
};

export default function ServiceCard({ number, title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative h-full block p-8 md:p-9 border border-border-subtle bg-surface/80 hover:border-gold/50 hover:bg-surface/90 transition-all duration-500 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-12 h-px bg-gold-dim group-hover:w-full group-hover:bg-gold transition-all duration-700"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-12 h-px bg-gold-dim group-hover:w-full group-hover:bg-gold transition-all duration-700"
      />

      <div className="flex items-center justify-between mb-7">
        <span className="text-[10px] tracking-[0.5em] uppercase text-gold/70 group-hover:text-gold transition-colors">
          {number}
        </span>
        <span className="text-gold/70 group-hover:text-gold transition-colors">
          {icon}
        </span>
      </div>

      <h3
        className="text-text text-2xl md:text-3xl mb-4 leading-tight"
        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.02em", fontWeight: 500 }}
      >
        {title}
      </h3>

      <p className="text-text-muted text-[14px] leading-relaxed mb-8 min-h-[80px]">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase">
        <span>Saiba mais</span>
        <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
