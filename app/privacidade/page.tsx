import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { empresa, emailHref, enderecoCompleto } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Política de Privacidade — Planalto Negócios",
  description:
    "Como a Planalto Negócios coleta, usa e protege dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

/*
 * TEXTO-BASE (rascunho) de Política de Privacidade conforme a LGPD.
 * NÃO substitui revisão por advogado / encarregado (DPO) antes da publicação.
 * Campos entre [colchetes] devem ser confirmados pela empresa:
 *  - contato do Encarregado (DPO)
 *  - prazos de retenção específicos
 *  - lista de instituições financeiras parceiras
 */
export default function PrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" updated="14 de junho de 2026">
      <p>
        A <strong>Planalto Negócios</strong> respeita a sua privacidade e está
        comprometida em proteger os dados pessoais que trata. Esta Política
        explica como coletamos, usamos, compartilhamos e protegemos esses dados,
        em conformidade com a <strong>Lei Geral de Proteção de Dados — LGPD
        (Lei nº 13.709/2018)</strong>.
      </p>

      <h2>1. Controlador dos dados</h2>
      <p>
        O controlador é a <strong>Planalto Negócios</strong> (CNPJ{" "}
        {empresa.cnpj}), com sede em {enderecoCompleto}.
      </p>

      <h2>2. Dados que coletamos</h2>
      <p>Podemos tratar as seguintes categorias de dados:</p>
      <ul>
        <li>
          <strong>Dados de contato do site:</strong> nome, e-mail, telefone e a
          mensagem que você envia pelos formulários de contato.
        </li>
        <li>
          <strong>Dados para a operação de crédito (clientes):</strong> dados de
          identificação e documentos necessários à intermediação da operação —
          por exemplo, nome, CPF, documento de identidade (RG/CNH), comprovante
          de residência e documentos da contratação.
        </li>
      </ul>

      <h2>3. Como coletamos</h2>
      <p>
        Coletamos dados diretamente de você — ao preencher um formulário, entrar
        em contato ou contratar nossos serviços — e por meio dos documentos que
        você nos fornece durante o atendimento.
      </p>

      <h2>4. Para que usamos os dados (finalidades)</h2>
      <ul>
        <li>responder a contatos e prestar atendimento;</li>
        <li>
          intermediar e encaminhar propostas de crédito às instituições
          financeiras parceiras;
        </li>
        <li>cumprir obrigações legais e regulatórias;</li>
        <li>prevenir fraudes e garantir a segurança das operações.</li>
      </ul>

      <h2>5. Bases legais</h2>
      <p>
        Tratamos dados pessoais com fundamento nas hipóteses da LGPD, conforme o
        caso: execução de contrato ou de procedimentos preliminares;
        cumprimento de obrigação legal ou regulatória; consentimento; e
        legítimo interesse, sempre respeitados os seus direitos.
      </p>

      <h2>6. Compartilhamento</h2>
      <p>
        Seus dados podem ser compartilhados com <strong>instituições
        financeiras parceiras</strong> para viabilizar a operação contratada e
        com autoridades quando exigido por lei. Não vendemos dados pessoais.
        [Confirmar a relação de instituições parceiras.]
      </p>

      <h2>7. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados
        contra acesso não autorizado, perda ou uso indevido — incluindo
        controle de acesso por autenticação às áreas internas que tratam dados
        sensíveis.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário às finalidades acima e ao
        cumprimento de obrigações legais e regulatórias. Após esse período, os
        dados são eliminados ou anonimizados. [Confirmar prazos de retenção
        específicos.]
      </p>

      <h2>9. Seus direitos</h2>
      <p>
        Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:
      </p>
      <ul>
        <li>confirmação da existência de tratamento e acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários ou
          tratados em desconformidade;
        </li>
        <li>portabilidade e informação sobre compartilhamento;</li>
        <li>
          revogação do consentimento e informação sobre as consequências da
          recusa.
        </li>
      </ul>

      <h2>10. Cookies</h2>
      <p>
        Este site utiliza apenas os recursos necessários ao seu funcionamento.
        Caso venham a ser utilizados cookies de análise ou de terceiros, esta
        Política será atualizada com as informações correspondentes.
      </p>

      <h2>11. Encarregado (DPO) e como exercer seus direitos</h2>
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de
        dados, entre em contato com nosso Encarregado pelo e-mail{" "}
        <a href={emailHref}>
          {empresa.email}
        </a>
        . [Confirmar nome e contato do Encarregado/DPO.]
      </p>

      <h2>12. Alterações desta Política</h2>
      <p>
        Esta Política pode ser atualizada periodicamente. A versão vigente é
        sempre a publicada nesta página, com a data de última atualização no
        topo.
      </p>

      <h2>13. Contato</h2>
      <p>
        Em caso de dúvidas, fale conosco pelos canais da página de{" "}
        <Link href="/contato">Contato</Link>. Você também pode recorrer à
        Autoridade Nacional de Proteção de Dados (ANPD).
      </p>
    </LegalLayout>
  );
}
