import Link from "next/link";
import Logo from "./Logo";
import { EnvelopeIcon, InstagramIcon, ArrowUpRightIcon } from "./Icons";
import { empresa, emailHref, instagramUrl } from "@/lib/empresa";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/seguranca", label: "Segurança" },
  { href: "/contato", label: "Contato" },
  { href: "/sistema", label: "Sistema" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-gold-deep/50 bg-surface/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <section className="md:col-span-5 space-y-5" aria-labelledby="footer-marca">
          <Logo variant="full" size={42} />
          <p
            id="footer-marca"
            className="text-text-secondary text-sm leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-serif)", fontSize: 16 }}
          >
            Solução em consignado.
          </p>
          <p className="text-text-muted text-[13px] leading-relaxed max-w-md">
            Correspondente bancário em Brasília-DF, atendendo aposentados, pensionistas e servidores públicos com mais de 20 anos de experiência no mercado de crédito consignado.
          </p>
        </section>

        <nav className="md:col-span-3" aria-labelledby="footer-nav">
          <h3
            id="footer-nav"
            className="text-gold text-[11px] tracking-[0.4em] uppercase mb-6"
          >
            Navegação
          </h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary text-[13px] tracking-wide hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span>{link.label}</span>
                  <ChevronArrow />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="md:col-span-4 space-y-6" aria-labelledby="footer-contato">
          <h3
            id="footer-contato"
            className="text-gold text-[11px] tracking-[0.4em] uppercase"
          >
            Contato
          </h3>

          <ul className="space-y-4">
            <li>
              <a
                href={emailHref}
                className="group inline-flex items-start gap-3 text-text-secondary text-[13px] hover:text-gold transition-colors"
              >
                <EnvelopeIcon size={18} className="mt-0.5 text-gold-dim group-hover:text-gold transition-colors shrink-0" />
                <span className="break-all">{empresa.email}</span>
              </a>
            </li>
            <li>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-text-secondary text-[13px] hover:text-gold transition-colors"
              >
                <InstagramIcon size={18} className="text-gold-dim group-hover:text-gold transition-colors shrink-0" />
                <span>@{empresa.instagram}</span>
                <ArrowUpRightIcon size={12} className="text-text-muted group-hover:text-gold transition-colors" />
              </a>
            </li>
          </ul>

          <div className="pt-4 border-t border-gold-deep/40 space-y-2 text-text-muted text-[12px] leading-relaxed">
            <p>
              {empresa.endereco}
              <br />
              {empresa.cidade}{empresa.cep ? ` · ${empresa.cep}` : ""}
            </p>
            <p className="pt-2 text-text-subtle text-[11px] tracking-wider">
              CNPJ {empresa.cnpj}
            </p>
          </div>
        </section>
      </div>

      <div className="border-t border-gold-deep/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-[11px] tracking-[0.3em] uppercase">
            &copy; 2003–{year} &middot; Planalto Negócios
          </p>
          <nav
            aria-label="Links legais"
            className="flex items-center gap-4 text-text-muted text-[11px] tracking-[0.2em] uppercase"
          >
            <Link href="/termos" className="hover:text-gold transition-colors">
              Termos de Uso
            </Link>
            <span className="diamond opacity-50" />
            <Link href="/privacidade" className="hover:text-gold transition-colors">
              Privacidade
            </Link>
          </nav>
          <p className="text-text-subtle text-[10px] tracking-[0.4em] uppercase">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

function ChevronArrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-3 h-px bg-gold-dim transition-all group-hover:w-5 group-hover:bg-gold"
    />
  );
}
