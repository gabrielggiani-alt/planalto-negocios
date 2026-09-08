"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import SearchBar from "@/components/SearchBar";
import ClienteCard from "@/components/ClienteCard";
import Particles from "@/components/Particles";
import LogoutButton from "@/components/LogoutButton";

interface Cliente {
  nome: string;
  totalDocs: number;
}

export default function SistemaPage() {
  // Termo de busca já com debounce — é a chave do SWR.
  const [busca, setBusca] = useState("");
  const [timeNow, setTimeNow] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Estado de servidor via SWR: cache, dedup e sem re-fetch repetido.
  // Lista completa (uma vez) só para o contador de cadastros.
  const { data: listaCompleta } = useSWR<Cliente[]>("/api/clientes?q=", fetcher);
  const totalCadastro = Array.isArray(listaCompleta) ? listaCompleta.length : null;

  // Resultado da busca (só dispara quando há termo).
  const { data: resultado, isLoading } = useSWR<Cliente[]>(
    busca ? `/api/clientes?q=${encodeURIComponent(busca)}` : null,
    fetcher
  );

  const hasSearched = busca.length > 0;
  const clientes: Cliente[] = Array.isArray(resultado) ? resultado : [];
  const loading = hasSearched && isLoading;

  // Relógio do header — estado de UI local (não é estado de servidor).
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeNow(
        now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = useCallback((query: string) => {
    const termo = query.trim();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!termo) {
      setBusca("");
      return;
    }
    debounceRef.current = setTimeout(() => setBusca(termo), 250);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="atmosphere" />
      <div className="light-rays" />
      <Particles count={22} />
      <div className="vignette" />
      <div className="grain" />

      <div className="fixed top-8 left-8 ornament-corner tl reveal-fade delay-4" />
      <div className="fixed top-8 right-8 ornament-corner tr reveal-fade delay-4" />
      <div className="fixed bottom-8 left-8 ornament-corner bl reveal-fade delay-4" />
      <div className="fixed bottom-8 right-8 ornament-corner br reveal-fade delay-4" />

      <header className="relative z-10 flex items-center justify-between px-12 pt-8 text-[10px] tracking-[0.4em] uppercase text-text-muted/70 reveal-fade delay-1">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>Sistema Ativo</span>
        </div>
        <div className="hidden md:block">
          {timeNow && <span>{timeNow}</span>}
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2">
            <span className="diamond" />
            <span>BR</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div
        className="relative z-10 flex flex-col items-center px-6 transition-all duration-700"
        style={{
          minHeight: "calc(100vh - 80px)",
          justifyContent: "center",
          paddingTop: hasSearched ? "6vh" : "4vh",
          paddingBottom: "6vh",
        }}
      >
        <div
          className={`text-center transition-all duration-700 ease-out ${
            hasSearched ? "scale-[0.82] mb-4" : "mb-16"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6 reveal-fade delay-1">
            <div className="h-px w-8 bg-gold-dim" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-gold/70">
              Cadastro Privado
            </span>
            <div className="h-px w-8 bg-gold-dim" />
          </div>

          <h1
            className="text-6xl md:text-7xl lg:text-8xl text-gold reveal-up delay-2"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              lineHeight: 1,
            }}
          >
            Planalto Negócios
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6 reveal-expand delay-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-dim to-gold" />
            <span className="diamond" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold-dim to-gold" />
          </div>

          <p
            className="mt-5 text-sm md:text-base tracking-[0.35em] uppercase text-text-muted reveal-fade delay-4"
            style={{ fontWeight: 300 }}
          >
            Crédito Consignado &nbsp;&middot;&nbsp; Gestão de Clientes
          </p>
        </div>

        <div className="w-full reveal-up delay-5">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="w-full max-w-xl mx-auto mt-10">
          {loading && (
            <div className="flex flex-col items-center py-10 gap-3">
              <div className="w-8 h-8 border border-gold-dim border-t-gold rounded-full animate-spin" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-text-muted/60">
                consultando registros
              </span>
            </div>
          )}

          {!loading && hasSearched && clientes.length === 0 && (
            <div className="text-center py-10 reveal-fade">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold-deep rounded-sm">
                <span className="diamond opacity-60" />
                <p className="text-sm tracking-[0.2em] uppercase text-text-muted">
                  Nenhum registro localizado
                </p>
                <span className="diamond opacity-60" />
              </div>
            </div>
          )}

          {!loading && clientes.length > 0 && (
            <>
              <div className="text-center mb-5 text-[10px] tracking-[0.5em] uppercase text-gold/70 reveal-fade">
                {clientes.length}{" "}
                {clientes.length === 1 ? "registro encontrado" : "registros encontrados"}
              </div>
              <div className="space-y-2.5 stagger-children">
                {clientes.map((cliente) => (
                  <ClienteCard
                    key={cliente.nome}
                    nome={cliente.nome}
                    totalDocs={cliente.totalDocs}
                  />
                ))}
              </div>
            </>
          )}

          {!hasSearched && !loading && totalCadastro !== null && (
            <div className="flex items-center justify-center mt-16 reveal-fade delay-6">
              <StatBlock
                label="Cadastros"
                value={totalCadastro.toString().padStart(3, "0")}
              />
            </div>
          )}
        </div>
      </div>

      <footer className="relative z-10 px-12 pb-8 flex items-center justify-between text-[9px] tracking-[0.5em] uppercase text-text-muted/40 reveal-fade delay-6">
        <span>Planalto Negócios &middot; Sistema Interno</span>
        <span>v 1.0</span>
      </footer>
    </main>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div
        className="text-2xl md:text-3xl text-gold"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
      >
        {value}
      </div>
      <div className="text-[9px] tracking-[0.4em] uppercase text-text-muted/60 mt-1">
        {label}
      </div>
    </div>
  );
}
