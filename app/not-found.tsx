import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Página não encontrada — Planalto Negócios",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="public-site relative min-h-[80vh] overflow-hidden flex items-center pt-[76px]">
        <div className="atmosphere" />
        <div className="vignette" />
        <div className="grain" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 py-24 text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-dim" />
            <span className="text-[13px] tracking-[0.12em] uppercase text-gold">Erro 404</span>
            <span className="h-px w-10 bg-gold-dim" />
          </div>

          <p
            className="text-gold text-7xl md:text-8xl leading-none"
            style={{ fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
          >
            404
          </p>

          <h1
            className="text-3xl md:text-4xl text-text leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Página não encontrada.
          </h1>

          <p className="text-text-secondary text-base leading-relaxed max-w-md mx-auto">
            O endereço que você procura não existe ou foi movido. Volte ao início
            ou fale com a nossa equipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary action-link"
            >
              <span>Voltar ao início</span>
              <ChevronRightIcon size={14} />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 action-link text-gold hover:bg-gold/10 hover:border-gold transition-all"
            >
              <span>Fale conosco</span>
              <ChevronRightIcon size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
