import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Layout compartilhado das páginas legais (Termos, Privacidade).
// A tipografia das seções é estilizada via seletores de descendente,
// então cada página escreve apenas <h2>/<p>/<ul> semânticos.
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden pt-[76px]">
        <div className="atmosphere" />
        <div className="vignette" />
        <div className="grain" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <header className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold-dim" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-gold">
                Documento Legal
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl text-text leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.005em" }}
            >
              {title}
            </h1>
            <p className="mt-5 text-text-muted text-[13px] tracking-wide">
              Última atualização: {updated}
            </p>
          </header>

          <article
            className="space-y-5 text-text-secondary text-[15px] leading-relaxed
              [&_h2]:text-text [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-medium [&_h2]:[font-family:var(--font-serif)]
              [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_li]:marker:text-gold-dim
              [&_strong]:text-text
              [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2"
          >
            {children}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
