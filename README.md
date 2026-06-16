# Planalto Negócios — Site institucional + sistema interno

Site institucional e sistema interno para uma empresa de crédito consignado
(correspondente bancário) em Brasília-DF. Projeto real, construído do zero.

> Os dados de contato/identificação da empresa exibidos no código são **genéricos
> por privacidade**. Os valores reais ficam em variáveis de ambiente — ver
> [`.env.example`](.env.example) e [`lib/empresa.ts`](lib/empresa.ts).

## Destaques

- **Site institucional** — home, serviços, sobre, segurança (anti-fraude),
  contato, Termos de Uso e Política de Privacidade (LGPD) e página 404, com
  identidade visual própria.
- **Sistema interno protegido por login** — consulta de fichas de clientes, com
  autenticação por sessão (JWT assinado com `jose`) e um middleware (`proxy.ts`)
  que protege páginas e APIs internas. Sem sessão: páginas redirecionam para o
  login e as APIs respondem `401`.
- **Acessibilidade** — foco de teclado visível, âncoras com `scroll-margin`,
  suporte a `prefers-reduced-motion`, HTML semântico.
- **Performance** — Server Components por padrão, `next/image`, e cache de estado
  de servidor com SWR.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens via `@theme` em `app/globals.css`)
- **jose** (sessão JWT, compatível com Edge) · **SWR** (estado de servidor)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # e preencha os valores
npm run dev                  # http://localhost:3000
```

## Estrutura

```
app/         páginas (App Router) e APIs
components/  componentes de UI
lib/         autenticação, acesso a dados e configuração
proxy.ts     proteção das rotas/áreas internas
```
