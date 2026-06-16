import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { empresa, emailHref, enderecoCompleto } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Termos de Uso — Planalto Negócios",
  description:
    "Termos e condições de uso do site e dos serviços da Planalto Negócios, correspondente bancário em Brasília-DF.",
};

/*
 * TEXTO-BASE (rascunho). Estrutura profissional padrão para correspondente
 * bancário no Brasil. NÃO substitui revisão por advogado antes da publicação.
 * Campos entre [colchetes] devem ser confirmados pela empresa.
 */
export default function TermosPage() {
  return (
    <LegalLayout title="Termos de Uso" updated="14 de junho de 2026">
      <p>
        Bem-vindo. Estes Termos de Uso (&ldquo;Termos&rdquo;) regem o acesso e a
        utilização do site da <strong>Planalto Negócios</strong> e dos serviços
        nele apresentados. Ao acessar ou usar este site, você declara que leu,
        entendeu e concorda com estes Termos. Caso não concorde, por favor não
        utilize o site.
      </p>

      <h2>1. Quem somos</h2>
      <p>
        A <strong>Planalto Negócios</strong> (CNPJ {empresa.cnpj}), com sede em{" "}
        {enderecoCompleto}, atua como <strong>correspondente bancário</strong>, nos
        termos da regulamentação do Banco Central do Brasil aplicável a
        correspondentes no País. A Planalto Negócios <strong>não é uma
        instituição financeira</strong> e não concede crédito em nome próprio:
        atuamos na intermediação e no encaminhamento de propostas às
        instituições financeiras parceiras, que são as responsáveis pela análise
        e aprovação das operações.
      </p>

      <h2>2. Serviços</h2>
      <p>
        O site apresenta informações institucionais sobre produtos de crédito
        consignado destinados a aposentados e pensionistas do INSS e a
        servidores públicos, além de canais de contato. As condições,
        taxas e a aprovação de qualquer operação dependem exclusivamente da
        instituição financeira responsável e estão sujeitas a análise.
      </p>

      <h2>3. Elegibilidade e informações fornecidas</h2>
      <p>
        Ao utilizar nossos canais, você declara ser maior de 18 anos e se
        compromete a fornecer informações verdadeiras, exatas e atualizadas.
        Você é responsável pelas informações que nos envia.
      </p>

      <h2>4. Uso permitido</h2>
      <p>Ao usar o site, você concorda em não:</p>
      <ul>
        <li>utilizar o site para fins ilícitos ou não autorizados;</li>
        <li>
          tentar acessar áreas restritas, contas ou sistemas sem autorização;
        </li>
        <li>
          copiar, reproduzir ou distribuir o conteúdo do site sem autorização
          prévia;
        </li>
        <li>
          interferir no funcionamento do site ou comprometer sua segurança.
        </li>
      </ul>

      <h2>5. Área restrita</h2>
      <p>
        Determinadas áreas deste site são de uso exclusivo da Planalto Negócios
        e de pessoas autorizadas, protegidas por autenticação. O acesso não
        autorizado é proibido e pode sujeitar o responsável às medidas legais
        cabíveis.
      </p>

      <h2>6. Alerta de segurança — não cobrança antecipada</h2>
      <p>
        A <strong>Planalto Negócios não cobra nenhum tipo de pagamento
        antecipado</strong> para liberação de crédito. Desconfie de pessoas que
        se identificam como funcionários da empresa e solicitam depósitos,
        transferências ou taxas prévias. Em caso de dúvida, entre em contato
        pelos canais oficiais indicados neste site.
      </p>

      <h2>7. Propriedade intelectual</h2>
      <p>
        A marca, o logotipo, os textos, as imagens e os demais elementos deste
        site pertencem à Planalto Negócios ou a seus licenciadores e são
        protegidos por lei. O uso sem autorização é vedado.
      </p>

      <h2>8. Links e serviços de terceiros</h2>
      <p>
        O site pode conter links ou referências a instituições financeiras
        parceiras e a serviços de terceiros. Não nos responsabilizamos pelo
        conteúdo, pelas práticas ou pelas políticas desses terceiros, que
        possuem termos e políticas próprios.
      </p>

      <h2>9. Limitação de responsabilidade</h2>
      <p>
        O conteúdo do site é fornecido a título informativo e pode ser alterado
        a qualquer momento. A Planalto Negócios envida seus melhores esforços
        para manter as informações corretas e atualizadas, mas não garante a
        ausência de erros ou a disponibilidade ininterrupta do site.
      </p>

      <h2>10. Privacidade e proteção de dados</h2>
      <p>
        O tratamento de dados pessoais realizado pela Planalto Negócios observa
        a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para detalhes,
        consulte a nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>11. Alterações destes Termos</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente
        será sempre a publicada nesta página, com a data de última atualização
        indicada no topo. O uso continuado do site após alterações representa
        concordância com os novos Termos.
      </p>

      <h2>12. Legislação aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro da Comarca de <strong>Brasília-DF</strong> para
        dirimir quaisquer questões deles decorrentes, salvo disposição legal em
        contrário.
      </p>

      <h2>13. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser encaminhadas para{" "}
        <a href={emailHref}>
          {empresa.email}
        </a>{" "}
        ou pelos demais canais indicados na página de{" "}
        <Link href="/contato">Contato</Link>.
      </p>
    </LegalLayout>
  );
}
