import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança aplicados a todas as rotas.
 * Conjunto conservador (não quebra fontes/estilos). CSP e HSTS ficam pro
 * ambiente de deploy (precisam de teste com HTTPS ativo) — ver PONTOS-DE-ATENCAO.
 */
const securityHeaders = [
  // Evita que o navegador "adivinhe" tipos de arquivo (anti-XSS).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Impede que o site seja embutido em iframe de outro domínio (anti-clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Não vaza a URL completa de origem para outros sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desliga APIs sensíveis que o site não usa.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
