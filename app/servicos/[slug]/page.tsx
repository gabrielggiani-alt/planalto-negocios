import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import FullContactForm from "@/components/FullContactForm";
import { ChevronRightIcon, ShieldIcon } from "@/components/Icons";
import { SERVICOS, slugsServicos, getServico } from "@/lib/servicos";

export function generateStaticParams() {
  return slugsServicos.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return { title: "Serviço não encontrado — Planalto Negócios" };
  return {
    title: `${servico.titulo} — Planalto Negócios`,
    description: servico.descricao,
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) notFound();

  const outros = SERVICOS.filter((s) => s.slug !== slug);

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden pt-[76px]">
        <div className="atmosphere" />
        <Particles count={10} />
        <div className="vignette" />
        <div className="grain" />

        {/* Voltar */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-10">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-3 text-text-muted hover:text-gold transition-colors text-[10px] tracking-[0.4em] uppercase"
          >
            <ChevronRightIcon
              size={14}
              className="rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            <span>Ver todos os serviços</span>
          </Link>
        </div>

        {/* Cabeçalho do serviço */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-gold/70 text-[11px] tracking-[0.5em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {servico.numero}
            </span>
            <span className="h-px w-10 bg-gold-dim" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
              {servico.subtitulo}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            {servico.titulo}
          </h1>

          <p className="mt-6 text-text-secondary text-[15px] md:text-lg leading-relaxed max-w-2xl">
            {servico.descricao}
          </p>
        </section>

        {/* Benefícios + público-alvo */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
                Benefícios
              </p>
              <ul className="space-y-4">
                {servico.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary text-[15px] leading-relaxed"
                  >
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-gold rotate-45"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-border-subtle bg-surface/80 p-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-3">
                  Público-alvo
                </p>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {servico.publico}
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Ação — solicitar o serviço */}
        <section
          id="solicitar"
          className="relative z-10 bg-surface-elevated/40 border-y border-gold-deep/40 py-20 md:py-28 px-6 md:px-12 scroll-mt-[92px]"
        >
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold-dim" />
                <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
                  Solicite sem compromisso
                </span>
                <span className="h-px w-10 bg-gold-dim" />
              </div>
              <h2
                className="text-3xl md:text-4xl text-text leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                Solicite sua proposta de {servico.titulo}.
              </h2>
              <p className="mt-5 text-text-secondary text-[15px] leading-relaxed max-w-xl mx-auto">
                Preencha seus dados e nossa equipe entrará em contato para
                apresentar as melhores condições para o seu perfil.
              </p>
            </header>

            <div className="border border-border-subtle bg-surface/80 p-8 md:p-10">
              <FullContactForm servico={servico.titulo} />
            </div>
          </div>
        </section>

        {/* Nota anti-fraude */}
        <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col sm:flex-row items-start gap-6 border border-gold/30 bg-surface/80 p-8 md:p-10">
            <span className="shrink-0 w-12 h-12 flex items-center justify-center border border-gold/60 text-gold">
              <ShieldIcon size={24} />
            </span>
            <div className="flex-1">
              <p
                className="text-text text-lg md:text-xl leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                A Planalto Negócios não cobra pagamento antecipado para liberação de crédito.
              </p>
              <Link
                href="/seguranca"
                className="group inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase hover:text-gold-light transition-colors"
              >
                <span>Saiba mais sobre segurança</span>
                <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Outros serviços */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
              Outros serviços
            </span>
            <span className="h-px flex-1 bg-gold-deep/50" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {outros.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group border border-border-subtle bg-surface/80 p-7 hover:border-gold/50 hover:bg-surface/90 transition-all duration-500"
              >
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 group-hover:text-gold transition-colors mb-3">
                  {s.subtitulo}
                </p>
                <h3
                  className="text-2xl text-text leading-tight mb-4"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                >
                  {s.titulo}
                </h3>
                <span className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase">
                  <span>Ver serviço</span>
                  <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
