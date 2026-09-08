"use client";

interface Documento {
  nome: string;
  extensao: string;
  caminho: string;
}

interface DocumentoListProps {
  documentos: Documento[];
  onDocumentoClick: (doc: Documento) => void;
}

function getIconForExtension(ext: string) {
  switch (ext) {
    case ".pdf":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case ".jpeg":
    case ".jpg":
    case ".png":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      );
    case ".docx":
    case ".doc":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    default:
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
  }
}

function getLabelForExtension(ext: string): string {
  const map: Record<string, string> = {
    ".pdf": "PDF",
    ".jpeg": "IMG",
    ".jpg": "IMG",
    ".png": "IMG",
    ".docx": "DOC",
    ".doc": "DOC",
  };
  return map[ext] || "ARQ";
}

export default function DocumentoList({
  documentos,
  onDocumentoClick,
}: DocumentoListProps) {
  if (documentos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold-deep">
          <span className="diamond opacity-60" />
          <p className="text-sm tracking-[0.2em] uppercase text-text-muted">
            Nenhum arquivo anexado
          </p>
          <span className="diamond opacity-60" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 stagger-children">
      {documentos.map((doc, idx) => {
        const isDownload = doc.extensao === ".docx" || doc.extensao === ".doc";
        return (
          <button
            key={doc.caminho}
            onClick={() => onDocumentoClick(doc)}
            className="group relative flex flex-col border border-border bg-surface/80 hover:border-gold-dim hover:bg-surface/90 transition-all duration-500 text-left overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            {/* Shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "linear-gradient(115deg, transparent 40%, rgba(201,168,76,0.05) 50%, transparent 60%)",
              }}
            />

            {/* Top bar with type label */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60">
              <span className="text-[9px] tracking-[0.4em] text-gold/70 group-hover:text-gold transition-colors duration-500">
                {getLabelForExtension(doc.extensao)}
              </span>
              <span className="text-[8px] tracking-[0.3em] text-text-muted/50 font-mono">
                {(idx + 1).toString().padStart(3, "0")}
              </span>
            </div>

            {/* Icon area */}
            <div className="flex-1 flex items-center justify-center py-7 text-gold-dim group-hover:text-gold transition-colors duration-500">
              {getIconForExtension(doc.extensao)}
            </div>

            {/* Bottom — filename */}
            <div className="px-4 py-3 border-t border-border/60 min-h-[52px] flex items-center">
              <p
                className="text-text text-xs leading-tight line-clamp-2 group-hover:text-gold-light transition-colors duration-500"
                style={{ fontFamily: "var(--font-serif)" }}
                title={doc.nome}
              >
                {doc.nome}
              </p>
            </div>

            {/* Download indicator */}
            {isDownload && (
              <div className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <svg className="w-3 h-3 text-gold-dim group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
