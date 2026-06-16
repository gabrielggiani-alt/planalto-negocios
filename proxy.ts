import { NextRequest, NextResponse } from "next/server";
import { COOKIE_SESSAO, verificarSessao } from "@/lib/auth";

// Protege o sistema interno e as APIs de dados. Tudo o mais é público.
export const config = {
  matcher: [
    "/sistema",
    "/sistema/:path*",
    "/cliente/:path*",
    "/api/clientes",
    "/api/clientes/:path*",
    "/api/documento",
    "/api/documento/:path*",
  ],
};

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_SESSAO)?.value;
  const sessao = await verificarSessao(token);

  if (sessao) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;

  // APIs respondem 401 (não redirecionam).
  if (pathname.startsWith("/api")) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  // Páginas: redireciona para /login preservando o destino interno.
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  const destino = pathname + search;
  if (destino.startsWith("/") && !destino.startsWith("//")) {
    url.searchParams.set("from", destino);
  }
  return NextResponse.redirect(url);
}
