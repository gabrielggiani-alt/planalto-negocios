/**
 * Configuração base do site (usada por metadados, sitemap e robots).
 *
 * A URL de produção vem de `NEXT_PUBLIC_SITE_URL` (definir no deploy). O
 * fallback é o domínio pretendido — pode ser trocado quando o domínio for
 * confirmado/comprado.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://planaltonegocios.com"
).replace(/\/$/, "");

/** Rotas públicas do site (para o sitemap). Áreas internas ficam de fora. */
export const rotasPublicas = [
  "/",
  "/servicos",
  "/sobre",
  "/seguranca",
  "/contato",
  "/termos",
  "/privacidade",
] as const;
