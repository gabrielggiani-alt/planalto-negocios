// Fetcher padrão do SWR. Lança em respostas não-OK (ex.: 401 do proxy quando
// a sessão expira) para o SWR não cachear corpo de erro como se fosse dado.
export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Falha na requisição (${res.status})`);
  }
  return res.json() as Promise<T>;
}
