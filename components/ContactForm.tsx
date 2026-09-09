"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "./Icons";
import { useEnvioContato } from "@/lib/useEnvioContato";
import ContatoEnviado from "./ContatoEnviado";
import { empresa } from "@/lib/empresa";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const { status, enviar } = useEnvioContato();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    enviar(
      { email, mensagem: "Gostaria de mais informações." },
      () =>
        `mailto:${empresa.email}?subject=Contato%20-%20Planalto%20Neg%C3%B3cios&body=Olá,%20meu%20e-mail%20é%20${encodeURIComponent(
          email
        )}%20e%20gostaria%20de%20mais%20informações.`
    );
  }

  if (status === "ok") {
    return (
      <ContatoEnviado
        titulo="Recebemos seu contato"
        descricao="Nossa equipe retornará no e-mail informado em breve."
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-[minmax(0,1fr)_auto] gap-3 max-w-xl mx-auto text-left"
      aria-label="Formulário de contato rápido"
    >
      <label htmlFor="contato-email" className="sm:col-span-2 text-base font-medium text-text-secondary">
        Seu e-mail
      </label>
      <input
        id="contato-email"
        type="email"
        required
        autoComplete="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
        className="w-full min-w-0 bg-background/60 border border-border-strong focus:border-gold/70 px-5 py-3.5 text-text placeholder:text-text-muted transition-colors text-base disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-primary action-link"
      >
        <span>{status === "submitting" ? "Enviando" : "Enviar"}</span>
        <ArrowUpRightIcon size={14} />
      </button>
    </form>
  );
}
