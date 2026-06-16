import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import {
  ShieldIcon,
  ChevronRightIcon,
  CloseIcon,
  EnvelopeIcon,
  InstagramIcon,
} from "@/components/Icons";
import { empresa, emailHref, instagramUrl, enderecoCompleto } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Segurança e Prevenção a Fraudes — Planalto Negócios",
  description:
    "Como se proteger de golpes em nome da Planalto Negócios. Não cobramos pagamento antecipado para liberar crédito. Saiba o que nunca pedimos e como confirmar nossos canais oficiais.",
};

const NUNCA_PEDIMOS = [
  "Depósito, Pix ou transferência adiantada para “liberar”, “destravar” ou “antecipar” o crédito.",
  "Pagamento de “taxa”, “seguro” ou “caução” antes da operação ser concluída.",
  "Senha do seu banco, do aplicativo gov.br ou do cartão.",
  "Código de verificação recebido por SMS, e-mail ou WhatsApp.",
  "Pagamentos em contas de pessoa física (CPF) em nome de “funcionários”.",
];

const COMO_CONFIRMAR = [
  "O crédito consignado é descontado direto no benefício ou na folha — você não precisa pagar nada antes para recebê-lo.",
  "Toda proposta passa por uma instituição financeira regulamentada; o dinheiro é liberado pelo banco, não por um intermediário em conta pessoal.",
  "Na dúvida sobre qualquer contato, não responda na hora: procure a Planalto pelos canais oficiais abaixo e confirme.",
];

export default function SegurancaPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden pt-[76px]">
        <div className="atmosphere" />
        <Particles count={10} />
        <div className="vignette" />
        <div className="grain" />

        {/* Cabeçalho */}
        <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
                Sua Segurança
              </span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
            >
              Proteja-se contra golpes.
            </h1>
            <p className="mt-6 text-text-secondary text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
              A confiança de quem nos acompanha há mais de duas décadas é o nosso
              maior patrimônio. Por isso, reunimos aqui orientações claras para
              você reconhecer e evitar fraudes praticadas em nome da empresa.
            </p>
          </div>
        </section>

        {/* Aviso central */}
        <section className="relative z-10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative border border-gold/40 bg-surface/85 p-10 md:p-14 overflow-hidden">
              <span aria-hidden="true" className="absolute top-0 left-0 w-16 h-px bg-gold" />
              <span aria-hidden="true" className="absolute top-0 left-0 w-px h-16 bg-gold" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 w-16 h-px bg-gold" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 w-px h-16 bg-gold" />

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="shrink-0 inline-flex items-center justify-center w-16 h-16 border border-gold/60 text-gold">
                  <ShieldIcon size={32} />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-gold">
                    Alerta de Segurança
                  </p>
                  <h2
                    className="text-2xl md:text-3xl text-text leading-tight"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                  >
                    A Planalto Negócios não cobra nenhum pagamento antecipado para liberação de crédito.
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-relaxed max-w-2xl">
                    Desconfie de qualquer pessoa que se identifique como funcionário
                    da empresa e solicite depósitos, transferências ou taxas prévias.
                    Em caso de dúvida, fale conosco diretamente pelos canais oficiais
                    informados neste site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que nunca pedimos */}
        <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
                Fique atento
              </p>
              <h2
                className="text-3xl md:text-4xl text-text leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                O que a Planalto nunca vai pedir
              </h2>
            </header>

            <ul className="space-y-4">
              {NUNCA_PEDIMOS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border border-border-subtle bg-surface/80 p-5"
                >
                  <span className="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center border border-error/50 text-error">
                    <CloseIcon size={16} />
                  </span>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como confirmar */}
        <section className="relative z-10 pb-20 md:pb-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
                Como se proteger
              </p>
              <h2
                className="text-3xl md:text-4xl text-text leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                Como confirmar que o contato é mesmo da Planalto
              </h2>
            </header>

            <ul className="space-y-3">
              {COMO_CONFIRMAR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-[15px] leading-relaxed">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 bg-gold rotate-45" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Canais oficiais */}
            <div className="mt-10 border border-gold/30 bg-surface/85 p-8 md:p-10">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-7">
                Canais oficiais
              </p>
              <ul className="space-y-6">
                <li>
                  <a
                    href={emailHref}
                    className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <span className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-gold-dim group-hover:border-gold transition-colors text-gold-dim group-hover:text-gold">
                      <EnvelopeIcon size={18} />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">E-mail</p>
                      <p className="text-text-secondary text-sm break-all">{empresa.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <span className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-gold-dim group-hover:border-gold transition-colors text-gold-dim group-hover:text-gold">
                      <InstagramIcon size={18} />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">Instagram</p>
                      <p className="text-text-secondary text-sm">@{empresa.instagram}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-gold-dim text-gold-dim">
                      <ShieldIcon size={18} />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">Endereço</p>
                      <address className="not-italic text-text-secondary text-sm leading-relaxed">
                        {enderecoCompleto}
                      </address>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Desconfiou? */}
        <section className="relative z-10 pb-20 md:pb-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto border border-border-subtle bg-surface/70 p-8 md:p-12">
            <h2
              className="text-2xl md:text-3xl text-text leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              Desconfiou de um golpe?
            </h2>
            <ul className="space-y-3">
              {[
                "Não faça nenhum pagamento e não compartilhe dados, senhas ou códigos.",
                "Encerre o contato e procure a Planalto pelos canais oficiais acima para confirmar.",
                "Se já tiver sido vítima, registre um boletim de ocorrência e comunique o seu banco imediatamente.",
                "Você também pode acionar o Procon ou os canais de denúncia do Banco Central (consumidor.bcb.gov.br).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-[15px] leading-relaxed">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 bg-gold rotate-45" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 pb-24 md:pb-32 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-gold">Ainda com dúvida?</span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h2
              className="text-3xl md:text-4xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              Fale direto com a nossa equipe.
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed">
              Prefere confirmar uma informação ou tirar uma dúvida? Entre em contato
              pelos nossos canais oficiais — teremos prazer em ajudar.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background text-[12px] tracking-[0.3em] uppercase hover:bg-gold-light transition-colors"
            >
              <span>Fale Conosco</span>
              <ChevronRightIcon size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
