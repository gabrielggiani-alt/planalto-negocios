"use client";

import { sair } from "@/app/login/actions";

export default function LogoutButton({ className }: { className?: string }) {
  return (
    <form action={sair} className="inline-flex">
      <button
        type="submit"
        className={
          className ??
          "text-[10px] tracking-[0.4em] uppercase text-text-muted/70 hover:text-gold transition-colors"
        }
      >
        Sair
      </button>
    </form>
  );
}
