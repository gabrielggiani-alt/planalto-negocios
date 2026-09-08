"use client";

import Link from "next/link";

interface ClienteCardProps {
  nome: string;
  totalDocs: number;
}

export default function ClienteCard({ nome, totalDocs }: ClienteCardProps) {
  const iniciais = nome
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <Link
      href={`/cliente/${encodeURIComponent(nome)}`}
      className="group block"
    >
      <div
        className="relative overflow-hidden border border-border bg-surface/80 transition-all duration-500 hover:border-gold-dim hover:bg-surface/90"
        style={{ borderRadius: "2px" }}
      >
        {/* Gold left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold-deep group-hover:bg-gold transition-all duration-500" />

        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
             style={{
               background: "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)"
             }}
        />

        <div className="relative flex items-center justify-between gap-5 pl-6 pr-5 py-4">
          <div className="flex items-center gap-5 min-w-0">
            {/* Initials monogram */}
            <div className="relative shrink-0">
              <div
                className="w-11 h-11 border border-gold-dim flex items-center justify-center group-hover:border-gold transition-colors duration-500"
                style={{ borderRadius: "2px" }}
              >
                <span
                  className="text-gold text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {iniciais}
                </span>
              </div>
              {/* Corner dots */}
              <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="min-w-0">
              <h3
                className="text-text text-base truncate group-hover:text-gold-light transition-colors duration-500"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                {nome}
              </h3>
              <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase mt-1">
                {totalDocs.toString().padStart(2, "0")} &middot;{" "}
                {totalDocs === 1 ? "documento" : "documentos"}
              </p>
            </div>
          </div>

          {/* Right side — arrow + code */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden sm:block text-[9px] tracking-[0.3em] text-text-muted/40 group-hover:text-gold/70 transition-colors duration-500">
              ABRIR
            </span>
            <svg
              className="w-4 h-4 text-text-muted/60 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
