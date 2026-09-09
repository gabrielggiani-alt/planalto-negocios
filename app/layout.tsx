import RevealOnScroll from "@/components/RevealOnScroll";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const titulo = "Planalto Negócios — Crédito Consignado em Brasília";
const descricao =
  "Correspondente bancário dos principais bancos do mercado. Crédito consignado para aposentados, pensionistas e servidores públicos. Brasília-DF desde 2003.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descricao,
  applicationName: "Planalto Negócios",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "crédito consignado",
    "consignado INSS",
    "consignado servidor público",
    "correspondente bancário",
    "empréstimo consignado",
    "Brasília",
    "Planalto Negócios",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Planalto Negócios",
    url: siteUrl,
    title: titulo,
    description: descricao,
    // A imagem (og:image + twitter:image) vem de app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050d2b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen antialiased">
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
