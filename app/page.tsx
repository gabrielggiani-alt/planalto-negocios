import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import { SERVICOS } from "@/lib/servicos";
import { empresa, telefoneHref } from "@/lib/empresa";
import {
  ShieldIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@/components/Icons";

const ALGARISMOS = ["I", "II", "III", "IV", "V"];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="public-site relative">
        <Hero />

        {/* Miolo claro: o conteúdo que a pessoa lê para decidir mora no papel.
            O escuro fica no hero e no fechamento, como moldura. */}
        <div className="on-paper">
          <Services />
          <hr className="rule-gold" aria-hidden="true" />
          <AntiFraud />
          <hr className="rule-gold" aria-hidden="true" />
          <About />
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[min(680px,86svh)] overflow-hidden flex items-center pt-[76px]">
      <div className="atmosphere" />
      <div className="guilloche" />
      <div className="light-rays" />
      <div className="vignette" />
      <div className="grain" />

      <div aria-hidden="true" className="hidden lg:block absolute top-28 left-8 ornament-corner tl pointer-events-none" />
      <div aria-hidden="true" className="hidden lg:block absolute top-28 right-8 ornament-corner tr pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-14 pb-32 md:pt-20 md:pb-36 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4">
            <span className="diamond" />
            <span className="text-[13px] tracking-[0.12em] uppercase text-gold/70">
              Brasília-DF &middot; Desde 2003
            </span>
          </div>

          <p className="text-text-muted text-[13px] tracking-[0.12em] uppercase">
            Bem-vindo à Planalto Negócios
          </p>

          <h1
            className="text-[clamp(3.25rem,11vw,7.5rem)] text-text leading-[0.94] text-balance"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
            }}
          >
            Solução em
            <br />
            <span className="text-gold">consignado</span>.
          </h1>

          <p
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
          >
            Correspondente bancário dos principais bancos do mercado.
            Crédito consignado para aposentados, pensionistas e servidores
            públicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary action-link"
            >
              <span>Fale Conosco</span>
              <EnvelopeIcon size={16} />
            </Link>
            <Link
              href="/servicos"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 action-link text-gold hover:bg-gold/10 hover:border-gold transition-all"
            >
              <span>Nossos Serviços</span>
              <ChevronRightIcon size={14} />
            </Link>
          </div>
        </div>

        <div className="flex lg:col-span-5 items-center justify-center order-first lg:order-none">
          <HeroEmblem />
        </div>
      </div>

    </section>
  );
}

function HeroEmblem() {
  return (
    <div className="hero-emblem relative w-[164px] h-[164px] sm:w-[210px] sm:h-[210px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 border border-gold-deep rotate-45" />
      <div className="absolute inset-5 border border-gold/25" />

      <div className="relative text-center">
        <Image
          src="/Brasao_Transparente.png"
          alt="Planalto Negócios"
          width={170}
          height={170}
          priority
          className="w-[86px] sm:w-[112px] lg:w-[170px] h-auto"
        />
        <div className="mt-3 lg:mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-5 lg:w-8 bg-gold-dim" />
          <span className="text-[11px] lg:text-[13px] tracking-[0.12em] uppercase text-gold/70">
            Est. 2003
          </span>
          <span className="h-px w-5 lg:w-8 bg-gold-dim" />
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-10 bg-gold-dim" />
      <span className="text-[13px] tracking-[0.12em] uppercase text-gold">
        {label}
      </span>
      <span className="h-px w-10 bg-gold-dim" />
    </div>
  );
}

function Services() {
  return (
    <section
      id="servicos"
      className="relative py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="rise text-center mb-12 md:mb-16">
          <SectionEyebrow label="O Que Oferecemos" />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            Soluções financeiras sob medida para quem confia há mais de duas décadas.
          </h2>
        </header>

        {/* Grade assimétrica: o primeiro serviço ocupa mais e os outros dois
            se apoiam nele. Três colunas idênticas é o layout mais previsível
            que existe, e é o que faz uma página parecer template. */}
        <div className="rise grid gap-6 lg:gap-8 lg:grid-cols-12 lg:[grid-auto-rows:1fr]">
          {SERVICOS.map((s, i) => (
            <div
              key={s.slug}
              className={
                i === 0
                  ? "lg:col-span-7 lg:row-span-2"
                  : "lg:col-span-5"
              }
            >
              <ServiceCard
                number={s.numero}
                href={`/servicos/${s.slug}`}
                title={s.titulo}
                description={s.resumo}
                icon={<ServiceMark>{ALGARISMOS[i]}</ServiceMark>}
              />
            </div>
          ))}
        </div>

        <div className="rise mt-14 text-center">
          <Link
            href="/servicos"
            className="group action-link inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <span>Ver todos os serviços</span>
            <ChevronRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceMark({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 border border-current"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 18,
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </span>
  );
}

function AntiFraud() {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="rise surface-raised relative border-gold/40 p-6 sm:p-8 md:p-12 overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 w-16 h-px bg-gold" />
          <span aria-hidden="true" className="absolute top-0 left-0 w-px h-16 bg-gold" />
          <span aria-hidden="true" className="absolute bottom-0 right-0 w-16 h-px bg-gold" />
          <span aria-hidden="true" className="absolute bottom-0 right-0 w-px h-16 bg-gold" />

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="shrink-0 inline-flex items-center justify-center w-16 h-16 border border-gold/60 text-gold">
              <ShieldIcon size={32} />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-[13px] tracking-[0.12em] uppercase text-gold">
                Alerta de Segurança
              </p>
              <h2
                className="text-2xl md:text-3xl text-text leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                A Planalto Negócios não cobra pagamento antecipado para liberação de crédito.
              </h2>
              <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
                Desconfie de contatos suspeitos solicitando depósitos, taxas ou
                pagamentos prévios em nome da empresa. Em caso de dúvida, entre em
                contato diretamente pelos canais oficiais informados neste site.
              </p>
              <Link
                href="/seguranca"
                className="group action-link inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors pt-1"
              >
                <span>Saiba mais sobre segurança</span>
                <ChevronRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const STATS = [
    { value: "20+", label: "Anos de mercado" },
    { value: "5.000+", label: "Clientes atendidos/ano" },
    { value: "4", label: "Bancos parceiros" },
  ];

  return (
    <section
      id="sobre"
      className="relative py-16 md:py-24 px-6 md:px-12"
    >
      <div className="rise max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4">
            <span className="diamond" />
            <span className="text-[13px] tracking-[0.12em] uppercase text-gold">
              Quem Somos
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            Mais de duas décadas atendendo Brasília com seriedade.
          </h2>
          <div className="space-y-5 text-text-secondary text-base leading-relaxed max-w-xl">
            <p>
              Fundada em 2003, a Planalto Negócios consolidou-se como referência
              no mercado de crédito consignado em Brasília-DF, atuando como
              correspondente bancário dos principais bancos do país.
            </p>
            <p>
              Nossa atuação é pautada em transparência, atendimento personalizado e
              compromisso com a saúde financeira de cada cliente — aposentados,
              pensionistas e servidores públicos que confiam em nós há gerações.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/sobre"
              className="group action-link inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <span>Conheça nossa história</span>
              <ChevronRightIcon size={14} />
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
          <ul className="divide-y divide-border">
            {STATS.map((stat) => (
              <li key={stat.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-4 py-6 first:pt-0 last:pb-0">
                <span
                  className="figure text-gold text-5xl sm:text-6xl lg:text-7xl leading-none"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
                >
                  {stat.value}
                </span>
                <span className="text-text-secondary text-base leading-relaxed">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contato"
      className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="rise relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <SectionEyebrow label="Fale Conosco" />

        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
        >
          Fale com a gente sobre o seu crédito.
        </h2>

        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Ligue e converse com nossa equipe — atendemos por telefone de segunda
          a sexta, das 9h às 18h.
        </p>

        <div className="pt-2">
          <a
            href={telefoneHref}
            className="group inline-flex items-center gap-5 border border-gold/50 bg-surface/70 px-8 py-5 hover:border-gold hover:bg-surface/90 transition-colors"
          >
            <PhoneIcon size={26} className="text-gold shrink-0" />
            <span className="flex flex-col items-start gap-2 leading-none">
              <span className="text-sm tracking-[0.08em] uppercase text-gold/70">
                Ligue para nós
              </span>
              <span
                className="text-text text-2xl md:text-3xl tabular-nums"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                {empresa.telefone}
              </span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-4 max-w-xl mx-auto pt-2">
          <span className="h-px flex-1 bg-border-subtle" />
          <span className="text-sm tracking-[0.08em] uppercase text-text-muted">
            Ou deixe seu e-mail
          </span>
          <span className="h-px flex-1 bg-border-subtle" />
        </div>

        <div>
          <ContactForm />
        </div>

        <p className="text-text-muted text-base tracking-[0.08em] uppercase pt-2">
          Após inserir seu e-mail, aguarde o contato
        </p>
      </div>
    </section>
  );
}
