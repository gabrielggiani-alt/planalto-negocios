import { NextResponse } from "next/server";
import { empresa } from "@/lib/empresa";

/**
 * Envio real do formulário de contato.
 *
 * DORMENTE por padrão: enquanto `RESEND_API_KEY` não estiver definido, responde
 * 501 e o formulário cai no fallback (`mailto:`) — comportamento atual. Quando o
 * serviço de e-mail (Resend) for contratado e a chave for adicionada ao ambiente,
 * o envio real passa a funcionar SEM nenhuma mudança de código.
 *
 * Envs (definir no deploy):
 *  - RESEND_API_KEY   → chave da API (obrigatória p/ ativar)
 *  - CONTATO_DESTINO  → e-mail que recebe as mensagens (fallback: empresa.email)
 *  - CONTATO_REMETENTE→ remetente verificado no Resend (ex.: "Site <site@planaltonegocios.com>")
 */
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // Ainda não configurado → o formulário usa o fallback (mailto).
  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: "nao-configurado" }, { status: 501 });
  }

  let dados: {
    nome?: string;
    email?: string;
    telefone?: string;
    mensagem?: string;
    servico?: string;
    // Honeypot anti-spam: campo escondido; se vier preenchido, é bot.
    website?: string;
  };
  try {
    dados = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "payload" }, { status: 400 });
  }

  const { nome, email, telefone, mensagem, servico, website } = dados ?? {};

  // Honeypot preenchido → descarta silenciosamente (finge sucesso p/ o bot).
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!email) {
    return NextResponse.json({ ok: false, reason: "email" }, { status: 400 });
  }

  const destino = process.env.CONTATO_DESTINO ?? empresa.email;
  const remetente =
    process.env.CONTATO_REMETENTE ?? "Site Planalto Negócios <onboarding@resend.dev>";

  const assunto = servico
    ? `Solicitação de serviço — ${servico}`
    : `Contato pelo site — ${nome || email}`;

  const corpo = [
    servico ? `Serviço de interesse: ${servico}` : null,
    `Nome: ${nome || "Não informado"}`,
    `E-mail: ${email}`,
    `Telefone: ${telefone || "Não informado"}`,
    "",
    "Mensagem:",
    mensagem || "(sem mensagem)",
  ]
    .filter((linha) => linha !== null)
    .join("\n");

  const resposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: remetente,
      to: [destino],
      reply_to: email,
      subject: assunto,
      text: corpo,
    }),
  });

  if (!resposta.ok) {
    return NextResponse.json({ ok: false, reason: "envio" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
