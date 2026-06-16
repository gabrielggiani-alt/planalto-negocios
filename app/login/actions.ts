"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

  if (!validarCredenciais(usuario, senha)) {
    return { erro: "Usuário ou senha inválidos." };
  }

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
