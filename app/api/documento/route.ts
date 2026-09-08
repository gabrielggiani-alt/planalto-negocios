import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { resolverCaminhoDocumento, getMimeType } from "@/lib/clientes";
import { COOKIE_SESSAO, verificarSessao } from "@/lib/auth";

export async function GET(request: NextRequest) {
  // Defesa em profundidade: o proxy já bloqueia esta rota, mas o handler
  // revalida a sessão por conta própria — aqui trafegam documentos de clientes.
  const sessao = await verificarSessao(request.cookies.get(COOKIE_SESSAO)?.value);
  if (!sessao) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const caminhoRelativo = request.nextUrl.searchParams.get("path");

  if (!caminhoRelativo) {
    return NextResponse.json({ error: "Path não informado" }, { status: 400 });
  }

  const caminhoAbsoluto = resolverCaminhoDocumento(caminhoRelativo);

  if (!caminhoAbsoluto) {
    return NextResponse.json(
      { error: "Documento não encontrado" },
      { status: 404 }
    );
  }

  const ext = path.extname(caminhoAbsoluto).toLowerCase();
  const mimeType = getMimeType(ext);
  const fileBuffer = fs.readFileSync(caminhoAbsoluto);
  const fileName = path.basename(caminhoAbsoluto);

  // DOCX: forçar download (browser não renderiza nativamente)
  const isDownload = ext === ".docx" || ext === ".doc";

  const headers: Record<string, string> = {
    "Content-Type": mimeType,
    "Cache-Control": "private, max-age=3600",
  };

  if (isDownload) {
    headers["Content-Disposition"] = `attachment; filename="${encodeURIComponent(fileName)}"`;
  } else {
    headers["Content-Disposition"] = `inline; filename="${encodeURIComponent(fileName)}"`;
  }

  return new NextResponse(fileBuffer, { headers });
}
