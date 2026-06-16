import { SignJWT, jwtVerify, type JWTPayload } from "jose";

// Nome do cookie de sessão e duração (8 horas).
export const COOKIE_SESSAO = "pn_sessao";
export const DURACAO_SEGUNDOS = 60 * 60 * 8;

export interface SessaoPayload extends JWTPayload {
  usuario: string;
}

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET não configurado no ambiente (.env.local).");
  }
  return new TextEncoder().encode(secret);
}

/** Cria um token de sessão assinado (JWT HS256). Roda no Node e no Edge. */
export async function criarSessao(usuario: string): Promise<string> {
  return new SignJWT({ usuario })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getSecret());
}

/** Verifica o token. Retorna o payload ou null. Usado no middleware (Edge). */
export async function verificarSessao(
  token: string | undefined
): Promise<SessaoPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify<SessaoPayload>(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}

/** Comparação em tempo ~constante (sem node:crypto, portável Node/Edge). */
function comparaConstante(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ba = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ba.length ^ bb.length;
  const len = Math.max(ba.length, bb.length);
  for (let i = 0; i < len; i++) {
    diff |= (ba[i] ?? 0) ^ (bb[i] ?? 0);
  }
  return diff === 0;
}

/**
 * Valida usuário/senha contra SISTEMA_USUARIOS (pares `usuario:senha` por vírgula).
 * Roda apenas na server action (runtime Node), nunca no middleware.
 */
export function validarCredenciais(usuario: string, senha: string): boolean {
  const raw = process.env.SISTEMA_USUARIOS ?? "";
  const pares = raw
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  let valido = false;
  for (const par of pares) {
    const idx = par.indexOf(":");
    if (idx === -1) continue;
    const u = par.slice(0, idx);
    const s = par.slice(idx + 1);
    // Avalia todas as entradas (sem short-circuit) para reduzir vazamento por timing.
    if (comparaConstante(usuario, u) && comparaConstante(senha, s)) {
      valido = true;
    }
  }
  return valido;
}
