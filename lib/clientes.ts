import fs from "fs";
import path from "path";

const CLIENTES_DIR = "E:/Clientes";

function removeAcentos(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export interface Cliente {
  nome: string;
  totalDocs: number;
}

export interface Documento {
  nome: string;
  extensao: string;
  caminho: string; // path relativo: "NomeCliente/arquivo.pdf"
}

export function listarClientes(query?: string): Cliente[] {
  const entries = fs.readdirSync(CLIENTES_DIR, { withFileTypes: true });

  let clientes = entries
    .filter((e) => e.isDirectory())
    .map((e) => {
      const arquivos = fs.readdirSync(path.join(CLIENTES_DIR, e.name));
      return {
        nome: e.name,
        totalDocs: arquivos.length,
      };
    });

  if (query && query.trim()) {
    const q = removeAcentos(query.trim().toLowerCase());
    clientes = clientes.filter((c) =>
      removeAcentos(c.nome.toLowerCase()).includes(q)
    );
  }

  return clientes.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

export function listarDocumentos(nomeCliente: string): Documento[] {
  const dir = path.join(CLIENTES_DIR, nomeCliente);

  if (!fs.existsSync(dir)) return [];

  // Segurança: garantir que estamos dentro de CLIENTES_DIR
  const resolved = path.resolve(dir);
  if (!resolved.startsWith(path.resolve(CLIENTES_DIR))) return [];

  const arquivos = fs.readdirSync(dir);

  return arquivos.map((nome) => ({
    nome,
    extensao: path.extname(nome).toLowerCase(),
    caminho: `${nomeCliente}/${nome}`,
  }));
}

export function resolverCaminhoDocumento(
  caminhoRelativo: string
): string | null {
  const absoluto = path.resolve(path.join(CLIENTES_DIR, caminhoRelativo));

  // Segurança: path traversal protection
  if (!absoluto.startsWith(path.resolve(CLIENTES_DIR))) return null;
  if (!fs.existsSync(absoluto)) return null;

  return absoluto;
}

export function getMimeType(extensao: string): string {
  const map: Record<string, string> = {
    ".pdf": "application/pdf",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".docx":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".doc": "application/msword",
  };
  return map[extensao.toLowerCase()] || "application/octet-stream";
}
