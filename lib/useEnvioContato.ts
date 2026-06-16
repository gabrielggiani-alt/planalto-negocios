"use client";

import { useState } from "react";

export type StatusEnvio = "idle" | "submitting" | "ok";

/**
 * Gerencia o envio dos formulários de contato (estado + abertura do mailto).
 * Recebe uma função que monta a URL `mailto:`, chamada após um pequeno atraso
 * que dá o feedback de "Enviando" ao visitante.
 *
 * Observação: hoje o envio é via `mailto:` (abre o app de e-mail do visitante).
 * Quando definirmos um serviço de e-mail / back-end de verdade, basta trocar o
 * corpo de `enviar` aqui — os formulários não mudam.
 */
export function useEnvioContato() {
  const [status, setStatus] = useState<StatusEnvio>("idle");

  function enviar(construirMailto: () => string) {
    if (status === "submitting") return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("ok");
      window.location.href = construirMailto();
    }, 350);
  }

  return { status, enviar };
}
