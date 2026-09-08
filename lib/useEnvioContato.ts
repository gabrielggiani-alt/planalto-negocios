"use client";

import { useState } from "react";

export type StatusEnvio = "idle" | "submitting" | "ok";

export type DadosContato = {
  nome?: string;
  email: string;
  telefone?: string;
  mensagem?: string;
  servico?: string;
  /** Honeypot anti-spam (campo escondido). */
  website?: string;
};

/**
 * Gerencia o envio dos formulários de contato.
 *
 * Tenta primeiro o envio real via `POST /api/contato` (que usa um serviço de
 * e-mail quando configurado). Se a API ainda não estiver configurada (responde
 * 501) ou falhar, cai no `fallback` — hoje um `mailto:` que abre o app de e-mail
 * do visitante. Assim o formulário funciona já, e "liga" o envio de verdade
 * automaticamente quando o serviço de e-mail for configurado no deploy.
 */
export function useEnvioContato() {
  const [status, setStatus] = useState<StatusEnvio>("idle");

  async function enviar(dados: DadosContato, fallbackMailto: () => string) {
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (res.ok) {
        setStatus("ok");
        return;
      }
    } catch {
      // rede indisponível → cai no fallback abaixo
    }

    // Fallback: abre o app de e-mail do visitante (comportamento atual).
    setStatus("ok");
    window.location.href = fallbackMailto();
  }

  return { status, enviar };
}
