import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { ChevronRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sobre — Planalto Negócios",
  description:
    "Há mais de 20 anos em Brasília-DF, a Planalto Negócios é correspondente bancário em crédito consignado para aposentados, pensionistas e servidores públicos.",
};

/*
 * PLACEHOLDERS pendentes do proprietário (preencher quando o padrasto enviar):
 *  - [Nome do proprietário] — usado na seção "Liderança". Resposta recebida foi a
 *    razão social ("Planalto Negócios e Serviços Ltda."), não um nome de pessoa —
 *    confirmar se é isso mesmo que deve aparecer aqui.
 *  - Fotos do escritório/equipe — substituir os blocos de placeholder por <Image>.
 */

const STATS = [
  { value: "20+", label: "Anos de mercado" },
  { value: "5.000+", label: "Clientes atendidos/ano" },
  { value: "4", label: "Bancos parceiros" },
];

const VALORES = [
  {
    titulo: "Transparência",
    descricao:
      "Condições claras, sem letras miúdas. Você entende cada etapa da operação antes de decidir.",
  },
  {
    titulo: "Atendimento humano",
    descricao:
      "Acompanhamento personalizado do início ao fim, com uma equipe que conhece o seu perfil.",
  },
  {
    titulo: "Operação regulamentada",
    descricao:
      "Atuamos como correspondente bancário sob as regras do Banco Central do Brasil.",
  },
  {
    titulo: "Experiência",
    descricao:
      "Mais de duas décadas de relacionamento com os principais bancos do mercado.",
  },
];

const PUBLICO = [
  "Aposentados e pensionistas do INSS",
  "Servidores públicos federais, estaduais e municipais",
];

export default function SobrePage() {
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
                Quem Somos
              </span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
            >
              Mais de duas décadas atendendo Brasília com seriedade.
            </h1>
            <p className="mt-6 text-text-secondary text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
              Desde 2003, ajudamos aposentados, pensionistas e servidores públicos
              a encontrar as melhores condições de crédito consignado, com confiança
              e atendimento próximo.
            </p>
          </div>
        </section>

        {/* História + estatísticas */}
        <section className="relative z-10 pb-20 md:pb-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <span className="diamond" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                  Nossa História
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl text-text leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
              >
                Uma referência em consignado no coração do Distrito Federal.
              </h2>
              <div className="space-y-5 text-text-secondary text-[15px] md:text-base leading-relaxed max-w-xl">
                <p>
                  Fundada em 2003, a Planalto Negócios consolidou-se como referência
                  no mercado de crédito consignado em Brasília-DF, atuando como
                  correspondente bancário dos principais bancos do país.
                </p>
                <p>
                  Nossa atuação é pautada em transparência, atendimento personalizado
                  e compromisso com a saúde financeira de cada cliente — aposentados,
                  pensionistas e servidores públicos que confiam em nós há gerações.
                </p>
                <p>
                  Acreditamos que crédito bem orientado é instrumento de tranquilidade,
                  e não de preocupação. Por isso, cada operação começa entendendo o que
                  faz sentido para a sua realidade.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-gold-deep">
              <ul className="space-y-10">
                {STATS.map((stat) => (
                  <li key={stat.label} className="flex items-baseline gap-6">
                    <span
                      className="text-gold text-5xl md:text-6xl tabular-nums leading-none"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-text-muted text-[11px] tracking-[0.4em] uppercase">
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Valores */}
        <section className="relative z-10 py-20 md:py-28 px-6 md:px-12 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold-dim" />
                <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
                  No Que Acreditamos
                </span>
                <span className="h-px w-10 bg-gold-dim" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl text-text leading-tight max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
              >
                Os valores que guiam cada atendimento.
              </h2>
            </header>

            <div className="grid sm:grid-cols-2 gap-6">
              {VALORES.map((v, i) => (
                <article
                  key={v.titulo}
                  className="border border-border-subtle bg-surface/80 p-8 hover:border-gold/30 transition-colors duration-500"
                >
                  <span
                    className="text-gold/70 text-[11px] tracking-[0.5em] uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-4 text-2xl text-text leading-tight"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                  >
                    {v.titulo}
                  </h3>
                  <p className="mt-3 text-text-secondary text-[15px] leading-relaxed">
                    {v.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Público atendido */}
        <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
                Para Quem Atendemos
              </span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h2
              className="text-3xl md:text-4xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              Soluções pensadas para o seu perfil.
            </h2>
            <ul className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-6">
              {PUBLICO.map((p) => (
                <li
                  key={p}
                  className="flex-1 max-w-sm mx-auto border border-gold-deep/60 bg-surface/80 p-8 text-text-secondary text-[15px] leading-relaxed"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/*
          PLACEHOLDER — Galeria/Liderança. Substituir pelos dados reais quando o
          proprietário enviar fotos e o nome. Mantido visível e marcado de propósito
          (não publicar assim): comunica o que falta sem deixar a página "quebrada".
        */}
        <section className="relative z-10 pb-20 md:pb-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="border border-dashed border-border bg-surface/20 p-10 md:p-14 text-center">
              <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-4">
                Em breve
              </p>
              <h2
                className="text-2xl md:text-3xl text-text-muted leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                Conheça nosso escritório e nossa equipe.
              </h2>
              <p className="mt-4 text-text-muted text-sm max-w-xl mx-auto leading-relaxed">
                Estamos preparando fotos do nosso espaço e da equipe que atende você
                pessoalmente em Brasília-DF.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 pb-24 md:pb-32 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2
              className="text-3xl md:text-4xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              Vamos conversar sobre o seu crédito?
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed">
              Nossa equipe está pronta para apresentar as melhores condições para o
              seu perfil, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-[12px] tracking-[0.3em] uppercase"
              >
                <span>Fale Conosco</span>
                <ChevronRightIcon size={14} />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 text-gold text-[12px] tracking-[0.3em] uppercase hover:bg-gold/10 hover:border-gold transition-all"
              >
                <span>Nossos Serviços</span>
                <ChevronRightIcon size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
