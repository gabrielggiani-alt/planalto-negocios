import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import {
  ShieldIcon,
  EnvelopeIcon,
  ChevronRightIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <AntiFraud />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center pt-[76px]">
      <div className="atmosphere" />
      <div className="light-rays" />
      <Particles count={12} />
      <div className="vignette" />
      <div className="grain" />

      <div className="fixed top-8 left-8 ornament-corner tl reveal-fade delay-3 pointer-events-none" />
      <div className="fixed top-8 right-8 ornament-corner tr reveal-fade delay-3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4 reveal-fade delay-1">
            <span className="diamond" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold-dim">
              Brasília-DF &middot; Desde 2003
            </span>
          </div>

          <p className="text-text-muted text-[13px] tracking-[0.3em] uppercase reveal-fade delay-2">
            Bem-vindo à Planalto Negócios
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] text-text leading-[1.05] reveal-up delay-2"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Solução em <span className="text-gold">consignado</span>.
          </h1>

          <p
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl reveal-fade delay-4"
            style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 400 }}
          >
            Correspondente bancário dos principais bancos do mercado.
            Crédito consignado para aposentados, pensionistas e servidores
            públicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 reveal-up delay-5">
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background text-[12px] tracking-[0.3em] uppercase hover:bg-gold-light transition-colors"
            >
              <span>Fale Conosco</span>
              <EnvelopeIcon size={16} />
            </Link>
            <Link
              href="/servicos"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 text-gold text-[12px] tracking-[0.3em] uppercase hover:bg-gold/10 hover:border-gold transition-all"
            >
              <span>Nossos Serviços</span>
              <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 items-center justify-center reveal-fade delay-3">
          <HeroEmblem />
        </div>
      </div>

      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-text-muted hover:text-gold transition-colors group"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase">Explore</span>
        <span className="block w-px h-8 bg-gold-dim group-hover:bg-gold transition-colors" />
      </a>
    </section>
  );
}

function HeroEmblem() {
  return (
    <div className="relative w-[360px] h-[360px] flex items-center justify-center">
      <div className="absolute inset-0 border border-gold-deep rotate-45" />
      <div className="absolute inset-6 border border-gold-dim/60 rotate-45" />
      <div className="absolute inset-12 border border-gold-deep" />
      <div className="absolute inset-20 border border-gold/40" />

      <div className="relative text-center">
        <Image
          src="/Brasao_Transparente.png"
          alt="Planalto Negócios"
          width={170}
          height={170}
          priority
          style={{ width: 170, height: "auto" }}
        />
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold-dim" />
          <span className="text-[9px] tracking-[0.5em] uppercase text-gold-dim">
            Est. 2003
          </span>
          <span className="h-px w-8 bg-gold-dim" />
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-10 bg-gold-dim" />
      <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
        {label}
      </span>
      <span className="h-px w-10 bg-gold-dim" />
    </div>
  );
}

function Services() {
  const SERVICES = [
    {
      number: "01",
      href: "/servicos#consignado-inss",
      title: "Consignado INSS",
      description:
        "Crédito consignado para aposentados e pensionistas do INSS, com taxas competitivas e atendimento personalizado em todas as etapas.",
      icon: <ServiceMark>I</ServiceMark>,
    },
    {
      number: "02",
      href: "/servicos#consignado-publico",
      title: "Consignado Público",
      description:
        "Operações para servidores públicos federais, estaduais e municipais, com averbação direta em folha e processo simplificado.",
      icon: <ServiceMark>II</ServiceMark>,
    },
    {
      number: "03",
      href: "/servicos#correspondente-bancario",
      title: "Correspondente Bancário",
      description:
        "Atuamos como correspondente dos principais bancos do mercado, oferecendo soluções de crédito consignado adaptadas ao seu perfil.",
      icon: <ServiceMark>III</ServiceMark>,
    },
  ];

  return (
    <section
      id="servicos"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <SectionEyebrow label="O Que Oferecemos" />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            Soluções financeiras sob medida para quem confia há mais de duas décadas.
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase hover:text-gold-light transition-colors"
          >
            <span>Ver todos os serviços</span>
            <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
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
        fontFamily: "var(--font-display)",
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
    <section className="relative py-20 md:py-24 px-6 md:px-12 bg-surface-elevated/60">
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
                A Planalto Negócios não cobra pagamento antecipado para liberação de crédito.
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed max-w-2xl">
                Desconfie de contatos suspeitos solicitando depósitos, taxas ou
                pagamentos prévios em nome da empresa. Em caso de dúvida, entre em
                contato diretamente pelos canais oficiais informados neste site.
              </p>
              <Link
                href="/seguranca"
                className="group inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase hover:text-gold-light transition-colors pt-1"
              >
                <span>Saiba mais sobre segurança</span>
                <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
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
    { value: "352", label: "Clientes ativos" },
    { value: "5+", label: "Bancos parceiros" },
  ];

  return (
    <section
      id="sobre"
      className="relative py-28 md:py-36 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4">
            <span className="diamond" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
              Quem Somos
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
          >
            Mais de duas décadas atendendo Brasília com seriedade.
          </h2>
          <div className="space-y-5 text-text-secondary text-[15px] md:text-base leading-relaxed max-w-xl">
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
              className="group inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.3em] uppercase hover:text-gold-light transition-colors"
            >
              <span>Conheça nossa história</span>
              <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
  );
}

function Contact() {
  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-surface-elevated/40 overflow-hidden"
    >
      <div className="atmosphere opacity-60" />
      <div className="grain opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <SectionEyebrow label="Fale Conosco" />

        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
        >
          Precisa falar com nosso gerente comercial?
        </h2>

        <p className="text-text-secondary text-[15px] md:text-base max-w-xl mx-auto">
          Deixe seu e-mail abaixo. Nossa equipe entrará em contato em breve para
          apresentar as melhores condições para o seu perfil.
        </p>

        <div className="pt-4">
          <ContactForm />
        </div>

        <p className="text-text-subtle text-[11px] tracking-[0.3em] uppercase pt-2">
          Após inserir seu e-mail, aguarde o contato
        </p>
      </div>
    </section>
  );
}
