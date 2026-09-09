import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";
import { ChevronRightIcon, ShieldIcon } from "@/components/Icons";
import { SERVICOS } from "@/lib/servicos";

export const metadata: Metadata = {
  title: "Serviços — Planalto Negócios",
  description:
    "Crédito consignado para aposentados, pensionistas e servidores públicos. Correspondente bancário em Brasília-DF.",
};

export default function ServicosPage() {
  return (
    <>
      <ScrollToHash />
      <Navbar />

      <main className="public-site on-paper relative overflow-hidden pt-[76px]">

        <section className="relative z-10 py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <header className="rise text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold-dim" />
                <span className="text-[13px] tracking-[0.12em] uppercase text-gold">
                  O Que Oferecemos
                </span>
                <span className="h-px w-10 bg-gold-dim" />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
              >
                Soluções em crédito consignado para quem mais precisa.
              </h1>
              <p className="mt-6 text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
                Com mais de duas décadas de experiência, oferecemos produtos consignados com as melhores
                taxas e atendimento personalizado em Brasília-DF.
              </p>
            </header>

            <div className="space-y-6">
              {SERVICOS.map((s) => (
                <article
                  key={s.numero}
                  id={s.slug}
                  className="rise group border border-border-subtle bg-surface/80 p-6 sm:p-8 md:p-10 hover:border-gold/30 transition-colors duration-200 relative overflow-hidden scroll-mt-[100px]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-16 h-px bg-gold-dim group-hover:bg-gold transition-colors duration-200"
                  />

                  <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-1 lg:pt-1">
                      <span
                        className="text-gold/70 text-sm tracking-[0.12em] uppercase"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {s.numero}
                      </span>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <p className="text-[13px] tracking-[0.12em] uppercase text-gold mb-2">
                          {s.subtitulo}
                        </p>
                        <h2
                          className="text-3xl md:text-4xl text-text leading-tight"
                          style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "0.01em" }}
                        >
                          {s.titulo}
                        </h2>
                      </div>
                      <p className="text-text-secondary text-base leading-relaxed">{s.descricao}</p>
                      <Link
                        href={`/servicos/${s.slug}`}
                        className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 btn-primary action-link"
                      >
                        <span>Solicitar este serviço</span>
                        <ChevronRightIcon size={14} />
                      </Link>
                    </div>

                    <div className="lg:col-span-6 lg:border-l lg:border-border lg:pl-8">
                      <p className="text-[13px] tracking-[0.12em] uppercase text-text-muted mb-5">
                        Benefícios
                      </p>
                      <ul className="space-y-3">
                        {s.itens.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-text-secondary text-base">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-gold rotate-45" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-gold-deep/40">
                        <p className="text-[13px] tracking-[0.12em] uppercase text-text-muted mb-1">
                          Público-alvo
                        </p>
                        <p className="text-text-secondary text-base">{s.publico}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16 md:py-20 px-6 md:px-12 bg-surface/30">
          <div className="max-w-4xl mx-auto">
            <div className="rise border border-gold/30 bg-surface/85 p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <span className="shrink-0 w-12 h-12 flex items-center justify-center border border-gold/60 text-gold">
                  <ShieldIcon size={24} />
                </span>
                <div className="flex-1">
                  <p className="text-[13px] tracking-[0.12em] uppercase text-gold mb-3">
                    Alerta Importante
                  </p>
                  <p
                    className="text-text text-lg md:text-xl leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                  >
                    A Planalto Negócios não cobra pagamento antecipado para liberação de crédito.
                  </p>
                  <Link
                    href="/seguranca"
                    className="group action-link inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                  >
                    <span>Saiba mais sobre segurança</span>
                    <ChevronRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 md:py-24 px-6 md:px-12 text-center">
          <div className="rise max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[13px] tracking-[0.12em] uppercase text-gold">Próximo Passo</span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h2
              className="text-3xl md:text-4xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              Pronto para simular?
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Entre em contato e nossa equipe preparará uma proposta personalizada para o seu perfil.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary action-link"
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
