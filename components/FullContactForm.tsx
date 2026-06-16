"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "./Icons";
import { useEnvioContato } from "@/lib/useEnvioContato";
import ContatoEnviado from "./ContatoEnviado";
import { empresa } from "@/lib/empresa";

type Fields = { nome: string; email: string; telefone: string; mensagem: string };

export default function FullContactForm() {
  const [fields, setFields] = useState<Fields>({ nome: "", email: "", telefone: "", mensagem: "" });
  const { status, enviar } = useEnvioContato();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    enviar(() => {
      const body = encodeURIComponent(
        `Nome: ${fields.nome}\nTelefone: ${fields.telefone || "Não informado"}\n\nMensagem:\n${fields.mensagem}`
      );
      return `mailto:${empresa.email}?subject=${encodeURIComponent(`Contato — ${fields.nome}`)}&body=${body}`;
    });
  }

  function update(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  if (status === "ok") {
    return (
      <ContatoEnviado
        titulo="Mensagem recebida"
        descricao="Nossa equipe retornará em breve pelo e-mail ou telefone informados."
      />
    );
  }

  const inputClass =
    "w-full bg-background/60 border border-border focus:border-gold/70 px-5 py-3.5 text-text placeholder:text-text-subtle outline-none transition-colors text-sm tracking-wide";
  const labelClass = "block text-[11px] tracking-[0.35em] uppercase text-gold mb-2.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de contato">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fc-nome" className={labelClass}>Nome completo</label>
          <input
            id="fc-nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            value={fields.nome}
            onChange={update("nome")}
            disabled={status === "submitting"}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="fc-telefone" className={labelClass}>Telefone</label>
          <input
            id="fc-telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(61) 9 0000-0000"
            value={fields.telefone}
            onChange={update("telefone")}
            disabled={status === "submitting"}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="fc-email" className={labelClass}>E-mail</label>
        <input
          id="fc-email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          value={fields.email}
          onChange={update("email")}
          disabled={status === "submitting"}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="fc-mensagem" className={labelClass}>Mensagem</label>
        <textarea
          id="fc-mensagem"
          required
          rows={5}
          placeholder="Descreva sua necessidade ou dúvida..."
          value={fields.mensagem}
          onChange={update("mensagem")}
          disabled={status === "submitting"}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background text-[12px] tracking-[0.3em] uppercase hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span>{status === "submitting" ? "Enviando..." : "Enviar Mensagem"}</span>
        <ArrowUpRightIcon
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </button>
    </form>
  );
}
