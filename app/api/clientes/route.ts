import { NextRequest, NextResponse } from "next/server";
import { listarClientes, listarDocumentos } from "@/lib/clientes";

export async function GET(request: NextRequest) {
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
