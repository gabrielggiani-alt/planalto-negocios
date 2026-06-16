/**
 * Dados de contato / identificação da empresa.
 *
 * Os valores REAIS ficam em variáveis de ambiente (`.env.local`, fora do Git).
 * No repositório público ficam apenas os placeholders genéricos abaixo — assim o
 * portfólio mostra a engenharia sem expor os dados do cliente.
 *
 * Para exibir os dados verdadeiros (local ou em produção), defina as variáveis
 * `NEXT_PUBLIC_EMPRESA_*` (ver `.env.example`). Como são `NEXT_PUBLIC_`, são
 * embutidas no build — defina-as antes de buildar/deployar.
 */
export const empresa = {
  nome: "Planalto Negócios",
  cnpj: process.env.NEXT_PUBLIC_EMPRESA_CNPJ ?? "00.000.000/0001-00",
  email: process.env.NEXT_PUBLIC_EMPRESA_EMAIL ?? "contato@planaltonegocios.com.br",
  instagram: process.env.NEXT_PUBLIC_EMPRESA_INSTAGRAM ?? "planaltonegocios",
  endereco: process.env.NEXT_PUBLIC_EMPRESA_ENDERECO ?? "Setor Comercial Sul",
  cidade: process.env.NEXT_PUBLIC_EMPRESA_CIDADE ?? "Brasília-DF",
  cep: process.env.NEXT_PUBLIC_EMPRESA_CEP ?? "",
} as const;

export const instagramUrl = `https://www.instagram.com/${empresa.instagram}`;
export const emailHref = `mailto:${empresa.email}`;

export const enderecoCompleto = empresa.cep
  ? `${empresa.endereco}, ${empresa.cidade} · CEP ${empresa.cep}`
  : `${empresa.endereco}, ${empresa.cidade}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${empresa.endereco} ${empresa.cidade}`
)}`;
