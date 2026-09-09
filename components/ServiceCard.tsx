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
      className="group relative h-full flex flex-col p-6 sm:p-8 border border-border bg-surface/80 hover:border-gold/50 hover:bg-surface/90 transition-colors duration-200 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-12 h-px bg-gold-dim group-hover:bg-gold transition-colors duration-200"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-12 h-px bg-gold-dim group-hover:bg-gold transition-colors duration-200"
      />

      <div className="flex items-center justify-between mb-7">
        <span className="text-[13px] tracking-[0.12em] uppercase text-gold/70 group-hover:text-gold transition-colors">
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

      <p className="text-text-secondary text-base leading-relaxed mb-6">
        {description}
      </p>

      <span className="action-link mt-auto inline-flex items-center gap-2 text-gold">
        <span>Saiba mais</span>
        <ChevronRightIcon size={14} />
      </span>
    </Link>
  );
}
