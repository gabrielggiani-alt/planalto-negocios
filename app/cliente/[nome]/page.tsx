"use client";

import { useState, useCallback, use } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import DocumentoList from "@/components/DocumentoList";
import DocumentoViewer from "@/components/DocumentoViewer";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";

interface Documento {
  nome: string;
  extensao: string;
  caminho: string;
}

export default function ClientePage({
  params,
}: {
  params: Promise<{ nome: string }>;
}) {
  const { nome } = use(params);
  const nomeDecodificado = decodeURIComponent(nome);

  // Documentos do cliente via SWR — cache: voltar à ficha não re-busca.
  const { data, isLoading } = useSWR<{ nome: string; documentos: Documento[] }>(
    `/api/clientes?nome=${encodeURIComponent(nomeDecodificado)}`,
    fetcher
  );
  const documentos: Documento[] = data?.documentos ?? [];
  const loading = isLoading;

  const [docAberto, setDocAberto] = useState<Documento | null>(null);

  const handleDocumentoClick = useCallback((doc: Documento) => {
    if (doc.extensao === ".docx" || doc.extensao === ".doc") {
      const url = `/api/documento?path=${encodeURIComponent(doc.caminho)}`;
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.nome;
      a.click();
      return;
    }
    setDocAberto(doc);
  }, []);

  const iniciais = nomeDecodificado
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden pt-[76px]">
        <div className="atmosphere" />
        <Particles count={14} />
        <div className="vignette" />
        <div className="grain" />

        <div className="fixed top-[100px] left-8 ornament-corner tl reveal-fade pointer-events-none" />
        <div className="fixed top-[100px] right-8 ornament-corner tr reveal-fade pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 flex items-center justify-between gap-4">
          <Link
            href="/sistema"
            className="group inline-flex items-center gap-3 text-text-muted hover:text-gold transition-colors text-[10px] tracking-[0.4em] uppercase reveal-fade delay-1"
          >
            <svg
              className="w-3 h-3 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span>Retornar à Busca</span>
          </Link>
          <div className="reveal-fade delay-1">
            <LogoutButton />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-14">
          <div className="text-center mb-14 reveal-up delay-2">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                Registro Ativo
              </span>
              <div className="h-px w-12 bg-gold-dim" />
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative">
                <div
                  className="w-24 h-24 border border-gold-dim flex items-center justify-center"
                  style={{ borderRadius: "2px" }}
                >
                  <span
                    className="text-gold text-3xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {iniciais}
                  </span>
                </div>
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-gold" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl text-text mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                fontWeight: 500,
              }}
            >
              {nomeDecodificado}
            </h1>

            <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.4em] uppercase text-text-muted mt-4">
              <span>
                {loading
                  ? "..."
                  : `${documentos.length.toString().padStart(2, "0")} ${
                      documentos.length === 1 ? "documento" : "documentos"
                    }`}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-dim" />
              <span className="diamond" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-dim" />
            </div>
          </div>

          <div className="reveal-fade delay-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                  Arquivos Anexados
                </span>
                <div className="h-px w-16 bg-gold-deep" />
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center py-20 gap-3">
                <div className="w-8 h-8 border border-gold-dim border-t-gold rounded-full animate-spin" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-text-muted/60">
                  carregando arquivos
                </span>
              </div>
            ) : (
              <DocumentoList
                documentos={documentos}
                onDocumentoClick={handleDocumentoClick}
              />
            )}
          </div>
        </div>

        <DocumentoViewer
          documento={docAberto}
          onClose={() => setDocAberto(null)}
        />
      </main>

      <Footer />
    </>
  );
}
