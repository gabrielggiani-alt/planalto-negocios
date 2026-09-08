import type { MetadataRoute } from "next";
import { siteUrl, rotasPublicas } from "@/lib/site";
import { slugsServicos } from "@/lib/servicos";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const rotas = rotasPublicas.map((rota) => ({
    url: `${siteUrl}${rota === "/" ? "" : rota}`,
    lastModified: agora,
    changeFrequency: "monthly" as const,
    priority: rota === "/" ? 1 : 0.8,
  }));

  const paginasServico = slugsServicos.map((slug) => ({
    url: `${siteUrl}/servicos/${slug}`,
    lastModified: agora,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...rotas, ...paginasServico];
}
