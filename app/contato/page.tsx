import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import FullContactForm from "@/components/FullContactForm";
import { EnvelopeIcon, InstagramIcon, PhoneIcon, ArrowUpRightIcon } from "@/components/Icons";
import { empresa, emailHref, telefoneHref, instagramUrl, mapsUrl } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Contato — Planalto Negócios",
  description:
    "Entre em contato com a Planalto Negócios. Atendimento personalizado para crédito consignado em Brasília-DF.",
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden pt-[76px]">
        <div className="atmosphere" />
        <Particles count={10} />
        <div className="vignette" />
        <div className="grain" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <header className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-gold">Fale Conosco</span>
              <span className="h-px w-10 bg-gold-dim" />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
            >
              Entre em contato.
            </h1>
            <p className="mt-6 text-text-secondary text-[15px] md:text-base max-w-xl mx-auto leading-relaxed">
              Nossa equipe está pronta para apresentar as melhores condições de crédito consignado
              para o seu perfil.
            </p>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="border border-border-subtle bg-surface/80 p-8 md:p-10">
                <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                  Formulário de Contato
                </span>
                <div className="mt-8">
                  <FullContactForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="border border-border-subtle bg-surface/70 p-8">
                <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-7">
                  Canais de Atendimento
                </p>
                <ul className="space-y-7">
                  <li>
                    <a
                      href={telefoneHref}
                      className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <span className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-gold-dim group-hover:border-gold transition-colors text-gold-dim group-hover:text-gold">
                        <PhoneIcon size={18} />
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">
                          Telefone
                        </p>
                        <p className="text-text-secondary text-sm">
                          {empresa.telefone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={emailHref}
                      className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <span className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-gold-dim group-hover:border-gold transition-colors text-gold-dim group-hover:text-gold">
                        <EnvelopeIcon size={18} />
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">
                          E-mail
                        </p>
                        <p className="text-text-secondary text-sm break-all">
                          {empresa.email}
                        </p>
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
                        <p className="text-[10px] tracking-[0.4em] uppercase text-text-muted mb-1.5">
                          Instagram
                        </p>
                        <p className="text-text-secondary text-sm flex items-center gap-2">
                          @{empresa.instagram}
                          <ArrowUpRightIcon size={12} className="text-text-muted" />
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-border-subtle bg-surface/70 p-8">
                <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-6">Endereço</p>
                <address className="not-italic space-y-2 text-text-secondary text-sm leading-relaxed">
                  <p>{empresa.endereco}</p>
                  <p>{empresa.cidade}</p>
                  {empresa.cep && (
                    <p className="text-text-muted text-xs tracking-wider pt-1">CEP {empresa.cep}</p>
                  )}
                </address>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-5 text-gold text-[11px] tracking-[0.3em] uppercase hover:text-gold-light transition-colors"
                >
                  <span>Ver no Google Maps</span>
                  <ArrowUpRightIcon
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              <div className="border border-border-subtle bg-surface/70 p-6 text-center">
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Horário de Atendimento</p>
                <p className="text-text-secondary text-sm tracking-wide">Segunda a Sexta · 9h às 18h</p>
                <p className="text-text-muted text-xs mt-1">Sábado e Domingo · Fechado</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
