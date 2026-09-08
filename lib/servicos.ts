import { bancosParceiros } from "./empresa";

/**
 * Fonte ÚNICA dos serviços da Planalto Negócios.
 * Usada por: home (`app/page.tsx` → cards), índice (`app/servicos/page.tsx`) e
 * páginas dedicadas (`app/servicos/[slug]/page.tsx`).
 *
 *  - `resumo`    → texto curto, para os cards da home.
 *  - `descricao` → texto longo, para o índice e a página do serviço.
 *  - `itens`     → benefícios (lista).
 *  - `publico`   → público-alvo.
 */
export type Servico = {
  numero: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  descricao: string;
  itens: string[];
  publico: string;
};

export const SERVICOS: Servico[] = [
  {
    numero: "01",
    slug: "consignado-inss",
    titulo: "Consignado INSS",
    subtitulo: "Para aposentados e pensionistas",
    resumo:
      "Crédito consignado para aposentados e pensionistas do INSS, com taxas competitivas e atendimento personalizado em todas as etapas.",
    descricao:
      "Modalidade de crédito com desconto direto no benefício do INSS. Ideal para aposentados e pensionistas que buscam taxas diferenciadas e processo sem burocracia.",
    itens: [
      "Desconto automático no benefício mensal",
      "Prazo de pagamento estendido",
      "Taxas regulamentadas pelo Banco Central",
      "Sem necessidade de comprovante de renda adicional",
      "Atendimento personalizado em todas as etapas",
    ],
    publico: "Aposentados e pensionistas do INSS",
  },
  {
    numero: "02",
    slug: "consignado-publico",
    titulo: "Consignado Público",
    subtitulo: "Para servidores públicos",
    resumo:
      "Operações para servidores públicos federais, estaduais e municipais, com averbação direta em folha e processo simplificado.",
    descricao:
      "Crédito consignado para servidores públicos federais, estaduais e municipais. O desconto é feito diretamente em folha de pagamento, com taxas diferenciadas.",
    itens: [
      "Desconto em folha de pagamento",
      "Averbação direta no RH do órgão",
      "Taxas diferenciadas para servidores",
      "Processo simplificado e rápido",
      "Atende municípios, estados e governo federal",
    ],
    publico: "Servidores públicos federais, estaduais e municipais",
  },
  {
    numero: "03",
    slug: "correspondente-bancario",
    titulo: "Correspondente Bancário",
    subtitulo: "Parceiro dos principais bancos",
    resumo:
      "Atuamos como correspondente dos principais bancos do mercado, oferecendo soluções de crédito consignado adaptadas ao seu perfil.",
    descricao:
      "Atuamos como correspondente autorizado dos principais bancos do mercado, oferecendo acesso às melhores condições de crédito consignado de forma direta e transparente.",
    itens: [
      `Parceria com ${bancosParceiros.join(", ")}`,
      "Comparativo das melhores condições disponíveis",
      "Sem custo adicional ao cliente",
      "Operações autorizadas pelo Banco Central",
      "Mais de 20 anos de relacionamento com o mercado",
    ],
    publico: "Aposentados, pensionistas e servidores em geral",
  },
];

export const slugsServicos = SERVICOS.map((s) => s.slug);

export function getServico(slug: string): Servico | undefined {
  return SERVICOS.find((s) => s.slug === slug);
}
