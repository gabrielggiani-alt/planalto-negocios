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
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
      aria-label="Formulário de contato rápido"
    >
      <label htmlFor="contato-email" className="sr-only">
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
        className="flex-1 bg-background/60 border border-border focus:border-gold/70 px-5 py-3.5 text-text placeholder:text-text-subtle outline-none transition-colors text-sm tracking-wide"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-background text-[12px] tracking-[0.3em] uppercase hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span>{status === "submitting" ? "Enviando" : "Enviar"}</span>
        <ArrowUpRightIcon size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </form>
  );
}
