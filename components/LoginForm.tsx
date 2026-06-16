"use client";

import { useActionState } from "react";
import { entrar, type EstadoLogin } from "@/app/login/actions";
import { ArrowUpRightIcon } from "./Icons";

const estadoInicial: EstadoLogin = {};

export default function LoginForm({ from = "" }: { from?: string }) {
  const [estado, formAction, pending] = useActionState(entrar, estadoInicial);

  const inputClass =
    "w-full bg-background/60 border border-border focus:border-gold/70 px-5 py-3.5 text-text placeholder:text-text-subtle outline-none transition-colors text-sm tracking-wide";
  const labelClass =
    "block text-[11px] tracking-[0.35em] uppercase text-gold mb-2.5";

  return (
    <form action={formAction} className="space-y-6" aria-label="Formulário de login">
      <input type="hidden" name="from" value={from} />

      <div>
        <label htmlFor="usuario" className={labelClass}>
          Usuário
        </label>
        <input
          id="usuario"
          name="usuario"
          type="text"
          required
          autoComplete="username"
          autoFocus
          disabled={pending}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="senha" className={labelClass}>
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          required
          autoComplete="current-password"
          disabled={pending}
          className={inputClass}
        />
      </div>

      {estado.erro && (
        <p
          role="alert"
          className="border border-error/40 bg-error/10 text-error text-sm px-4 py-3"
        >
          {estado.erro}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background text-[12px] tracking-[0.3em] uppercase hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span>{pending ? "Entrando..." : "Entrar"}</span>
        <ArrowUpRightIcon
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </button>
    </form>
  );
}
