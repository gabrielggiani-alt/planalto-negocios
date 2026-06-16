"use client";

import { useEffect } from "react";

interface Documento {
  nome: string;
  extensao: string;
  caminho: string;
}

interface DocumentoViewerProps {
  documento: Documento | null;
  onClose: () => void;
}

export default function DocumentoViewer({
  documento,
  onClose,
}: DocumentoViewerProps) {
  // Fechar com ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (documento) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [documento, onClose]);

  if (!documento) return null;

  const url = `/api/documento?path=${encodeURIComponent(documento.caminho)}`;
  const isImage = [".jpeg", ".jpg", ".png"].includes(documento.extensao);
  const isPdf = documento.extensao === ".pdf";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in-up"
      style={{ animationDuration: "0.2s" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[95vw] h-[92vh] max-w-7xl bg-surface border border-border rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/90">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <h3 className="text-text font-medium">{documento.nome}</h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Download button */}
            <a
              href={url}
              download={documento.nome}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-muted hover:text-gold hover:border-gold/40 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Baixar
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text-muted hover:text-gold hover:border-gold/40 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto flex items-center justify-center bg-background/50 p-4">
          {isPdf && (
            <iframe
              src={url}
              className="w-full h-full rounded-lg border border-border"
              title={documento.nome}
            />
          )}

          {isImage && (
            <img
              src={url}
              alt={documento.nome}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          )}

          {!isPdf && !isImage && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto mb-6 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p className="text-text-muted mb-4">
                Visualização não disponível para este tipo de arquivo
              </p>
              <a
                href={url}
                download={documento.nome}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Baixar arquivo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
