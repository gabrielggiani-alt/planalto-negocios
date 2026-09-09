"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Revela as peças marcadas com `.rise` conforme elas entram na tela.
 *
 * A regra que organiza este arquivo: **conteúdo nunca começa invisível.**
 *
 * A versão anterior escondia todo `.rise` via CSS assim que o componente
 * montava, e contava com o IntersectionObserver para trazer de volta. Bastava
 * o observer não disparar — caixa mais alta que a tela, zoom reduzido, tela
 * muito grande — para a página ficar em branco. Isso já aconteceu duas vezes.
 *
 * Agora é o contrário: o JavaScript decide, elemento por elemento, quem pode
 * ser escondido, e só esconde quem está abaixo da dobra no momento em que a
 * página carrega. O que já está à vista nunca some, e o que não for observado
 * simplesmente não anima.
 *
 * Depende de `usePathname`: o layout do Next não remonta em navegação
 * client-side, então sem isso o efeito rodaria uma única vez, na primeira
 * página aberta, e nenhuma página alcançada pelo menu teria animação.
 */
export default function RevealOnScroll() {
  const rota = usePathname();

  useEffect(() => {
    const prefereMenosMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefereMenosMovimento || !("IntersectionObserver" in window)) return;

    const alvos = Array.from(document.querySelectorAll<HTMLElement>(".rise"));
    const alturaTela = window.innerHeight;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          entrada.target.classList.add("is-in");
          observador.unobserve(entrada.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );

    const escondidos: HTMLElement[] = [];

    for (const alvo of alvos) {
      const caixa = alvo.getBoundingClientRect();

      // Já visível, ou acima da dobra: fica como está. Animar o que a pessoa
      // já está olhando faz a página piscar.
      if (caixa.top < alturaTela * 0.92) continue;

      // Mais alta que a tela: não dá para vê-la entrando, então a animação
      // termina antes de o conteúdo chegar aos olhos. Não anima.
      if (caixa.height > alturaTela * 0.85) continue;

      alvo.classList.add("will-rise");
      escondidos.push(alvo);
      observador.observe(alvo);
    }

    // Rede de segurança: nada fica escondido para sempre, aconteça o que
    // acontecer com o observer.
    const destravar = window.setTimeout(() => {
      for (const alvo of escondidos) alvo.classList.add("is-in");
    }, 3000);

    return () => {
      window.clearTimeout(destravar);
      observador.disconnect();
      for (const alvo of escondidos) alvo.classList.remove("will-rise");
    };
  }, [rota]);

  return null;
}
