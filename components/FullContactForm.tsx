"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "./Icons";
import { useEnvioContato } from "@/lib/useEnvioContato";
import ContatoEnviado from "./ContatoEnviado";
import { empresa } from "@/lib/empresa";

type Fields = { nome: string; email: string; telefone: string; mensagem: string };

/**
 * Formulário de contato completo.
 * Se `servico` for informado (páginas de serviço), o envio é marcado com o
 * serviço escolhido — no assunto e no corpo do e-mail — e um selo é exibido.
 */
export default function FullContactForm({ servico }: { servico?: string } = {}) {
  const [fields, setFields] = useState<Fields>({ nome: "", email: "", telefone: "", mensagem: "" });
  const [website, setWebsite] = useState(""); // honeypot anti-spam (fica escondido)
  const { status, enviar } = useEnvioContato();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    enviar({ ...fields, servico, website }, () => {
      const body = encodeURIComponent(
        `${servico ? `Serviço de interesse: ${servico}\n\n` : ""}` +
          `Nome: ${fields.nome}\nTelefone: ${fields.telefone || "Não informado"}\n\nMensagem:\n${fields.mensagem}`
      );
      const subject = servico
        ? `Solicitação de serviço — ${servico}`
        : `Contato — ${fields.nome}`;
      return `mailto:${empresa.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }

  function update(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  if (status === "ok") {
    return (
      <ContatoEnviado
        titulo={servico ? "Solicitação recebida" : "Mensagem recebida"}
        descricao={
          servico
            ? `Recebemos seu interesse em ${servico}. Nossa equipe retornará em breve pelo e-mail ou telefone informados.`
            : "Nossa equipe retornará em breve pelo e-mail ou telefone informados."
        }
      />
    );
  }

  const inputClass =
    "w-full bg-background/60 border border-border focus:border-gold/70 px-5 py-3.5 text-text placeholder:text-text-muted outline-none transition-colors text-sm tracking-wide";
  const labelClass = "block text-[11px] tracking-[0.35em] uppercase text-gold mb-2.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label={servico ? `Solicitar ${servico}` : "Formulário de contato"}
    >
      {/* Honeypot anti-spam: escondido de humanos, bots preenchem. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
      />
      {servico && (
        <div className="flex items-center gap-3 border border-gold-deep/60 bg-gold/5 px-4 py-3">
          <span className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" aria-hidden="true" />
          <p className="text-[13px] text-text-secondary">
            Serviço de interesse:{" "}
            <span className="text-gold tracking-wide">{servico}</span>
          </p>
        </div>
      )}

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
          placeholder={
            servico
              ? "Conte sua situação: valor pretendido, tipo de benefício/órgão, prazo desejado…"
              : "Descreva sua necessidade ou dúvida…"
          }
          value={fields.mensagem}
          onChange={update("mensagem")}
          disabled={status === "submitting"}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-[12px] tracking-[0.3em] uppercase"
      >
        <span>
          {status === "submitting"
            ? "Enviando…"
            : servico
              ? "Enviar Solicitação"
              : "Enviar Mensagem"}
        </span>
        <ArrowUpRightIcon
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </button>
    </form>
  );
}
