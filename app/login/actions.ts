"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { estaBloqueado, registrarFalha, limparFalhas } from "@/lib/rate-limit";
import {
  COOKIE_SESSAO,
  DURACAO_SEGUNDOS,
  criarSessao,
  validarCredenciais,
} from "@/lib/auth";

export interface EstadoLogin {
  erro?: string;
}

export async function entrar(
  _prev: EstadoLogin,
  formData: FormData
): Promise<EstadoLogin> {
  const usuario = String(formData.get("usuario") ?? "").trim();
  const senha = String(formData.get("senha") ?? "");
  const fromRaw = String(formData.get("from") ?? "");

  if (!usuario || !senha) {
    return { erro: "Informe usuário e senha." };
  }

  // Limita tentativas por origem, para que uma senha fraca não seja adivinhável
  // por força bruta. A chave é o IP quando o proxy informa, senão o usuário.
  const cabecalhos = await headers();
  const ip =
    cabecalhos.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    cabecalhos.get("x-real-ip") ||
    "desconhecido";
  const chave = `${ip}:${usuario.toLowerCase()}`;

  const { bloqueado, segundos } = estaBloqueado(chave);
  if (bloqueado) {
    const minutos = Math.ceil(segundos / 60);
    return {
      erro: `Muitas tentativas. Tente de novo em ${minutos} minuto${minutos > 1 ? "s" : ""}.`,
    };
  }

  if (!validarCredenciais(usuario, senha)) {
    registrarFalha(chave);
    return { erro: "Usuário ou senha inválidos." };
  }

  limparFalhas(chave);

  const token = await criarSessao(usuario);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_SESSAO, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DURACAO_SEGUNDOS,
  });

  const destino =
    fromRaw.startsWith("/") && !fromRaw.startsWith("//") ? fromRaw : "/sistema";
  redirect(destino);
}

export async function sair() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_SESSAO);
  redirect("/login");
}
