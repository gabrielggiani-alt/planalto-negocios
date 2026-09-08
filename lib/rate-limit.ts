/**
 * Limite de tentativas em memória, por chave.
 *
 * Guarda o histórico no processo do servidor. É suficiente para este projeto,
 * que roda numa instância só e não tem banco: o objetivo é impedir força bruta
 * no login, não construir um limitador distribuído. Se um dia o site rodar em
 * várias instâncias, isso precisa migrar para um armazenamento compartilhado.
 */

interface Registro {
  tentativas: number;
  bloqueadoAte: number;
}

const registros = new Map<string, Registro>();

const JANELA_MS = 15 * 60 * 1000;
const MAX_TENTATIVAS = 5;
const BLOQUEIO_MS = 15 * 60 * 1000;

/** Remove entradas velhas para o Map não crescer sem limite. */
function limpar(agora: number): void {
  for (const [chave, registro] of registros) {
    if (registro.bloqueadoAte < agora - JANELA_MS) {
      registros.delete(chave);
    }
  }
}

/** Diz se a chave está bloqueada e quantos segundos faltam. */
export function estaBloqueado(chave: string): { bloqueado: boolean; segundos: number } {
  const agora = Date.now();
  const registro = registros.get(chave);
  if (!registro || registro.bloqueadoAte <= agora) {
    return { bloqueado: false, segundos: 0 };
  }
  return {
    bloqueado: true,
    segundos: Math.ceil((registro.bloqueadoAte - agora) / 1000),
  };
}

/** Conta uma tentativa falha. Bloqueia a chave ao atingir o limite. */
export function registrarFalha(chave: string): void {
  const agora = Date.now();
  limpar(agora);

  const registro = registros.get(chave) ?? { tentativas: 0, bloqueadoAte: 0 };
  registro.tentativas += 1;

  if (registro.tentativas >= MAX_TENTATIVAS) {
    registro.bloqueadoAte = agora + BLOQUEIO_MS;
    registro.tentativas = 0;
  }

  registros.set(chave, registro);
}

/** Zera o histórico depois de um login bem-sucedido. */
export function limparFalhas(chave: string): void {
  registros.delete(chave);
}
