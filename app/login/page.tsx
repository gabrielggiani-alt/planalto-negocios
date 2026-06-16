import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Acesso ao Sistema — Planalto Negócios",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  const destino = typeof from === "string" ? from : "";

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-16">
      <div className="atmosphere" />
      <div className="vignette" />
      <div className="grain" />

      <div className="fixed top-8 left-8 ornament-corner tl reveal-fade delay-3 pointer-events-none" />
      <div className="fixed top-8 right-8 ornament-corner tr reveal-fade delay-3 pointer-events-none" />
      <div className="fixed bottom-8 left-8 ornament-corner bl reveal-fade delay-3 pointer-events-none" />
      <div className="fixed bottom-8 right-8 ornament-corner br reveal-fade delay-3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md reveal-up delay-1">
        <div className="flex flex-col items-center text-center mb-10">
          <Link href="/" aria-label="Planalto Negócios — Início" className="mb-8">
            <Logo variant="full" size={40} />
          </Link>

          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-8 bg-gold-dim" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
              Área Restrita
            </span>
            <span className="h-px w-8 bg-gold-dim" />
          </div>

          <h1
            className="text-3xl md:text-4xl text-text leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            Acesso ao Sistema
          </h1>
          <p className="mt-4 text-text-muted text-sm leading-relaxed max-w-xs">
            Use suas credenciais para acessar a gestão de clientes.
          </p>
        </div>

        <div className="border border-border-subtle bg-surface/80 p-8 md:p-10">
          <LoginForm from={destino} />
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-[10px] tracking-[0.3em] uppercase text-text-muted/60">
          <Link href="/" className="hover:text-gold transition-colors">
            Voltar ao site
          </Link>
          <span className="diamond" />
          <Link href="/termos" className="hover:text-gold transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </main>
  );
}
