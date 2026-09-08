import { NextRequest, NextResponse } from "next/server";
import { listarClientes, listarDocumentos } from "@/lib/clientes";
import { COOKIE_SESSAO, verificarSessao } from "@/lib/auth";

export async function GET(request: NextRequest) {
  // Defesa em profundidade: o proxy já bloqueia esta rota, mas o handler
  // revalida a sessão por conta própria. Se o proxy falhar ou for contornado,
  // os dados continuam protegidos.
  const sessao = await verificarSessao(request.cookies.get(COOKIE_SESSAO)?.value);
  if (!sessao) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const query = searchParams.get("q") || "";
  const nome = searchParams.get("nome");

  // Se tem nome, retorna documentos do cliente
  if (nome) {
    const documentos = listarDocumentos(nome);
    return NextResponse.json({ nome, documentos });
  }

  // Senão, busca clientes
  const clientes = listarClientes(query);
  return NextResponse.json(clientes);
}
