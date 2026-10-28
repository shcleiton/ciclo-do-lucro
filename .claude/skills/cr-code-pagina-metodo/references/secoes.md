# Catálogo de seções

Ordem usada no Ciclo do Lucro (`src/pages/index.astro`). Cada seção tem prefixo próprio de classe
CSS, então dá para remover uma sem quebrar as outras: apague o import, a tag e, se quiser, o bloco
de CSS com o prefixo.

| Componente | O que mostra | De onde vem o conteúdo | Script |
| --- | --- | --- | --- |
| `Header` | Logo, âncoras das seções, botão de conversa | links no próprio componente | `nav.ts` |
| `Hero` | Título em duas linhas com revelação, texto, dois botões, anel, quatro fatos | componente + `CycleRing` | `ring.ts` |
| `CycleRing` | Anel com as etapas, cometa animado com pausa, clique leva à aba ou seção | `stages` em `content.ts` | `ring.ts` |
| `Cycle` | Etapas do anel em lista, com prazo de cada uma | `stages` | |
| `Timeline` | Gráfico de raias por semana, botão "Percorrer", texto de cada semana | `lanes`, `weeks` | `timeline.ts` |
| `Calendar` | Grade de 63 dias, legenda, marcos, fases em paralelo | `calPhases`, `calNotes`, `POS_FROM_DAY` | `calendar.ts` |
| `Positioning` | Três conceitos (categoria, ouro, mecanismo) e o fio que atravessa as fases | `posDefs`, `posThread` | |
| `Phases` | Abas por fase com listas e passos | texto no componente | `phases.ts` |
| `Quote` | Frase de efeito em duas linhas | componente | |
| `Stack` | Tabela das camadas técnicas | `stack` | |
| `Production` | Barra das frentes de produção com contagem de entregas | `fronts` | `production.ts` |
| `Pieces` | Galeria de mockups das telas (anúncio, captura, grupo, aula, vendas, boas-vindas) | componente + `mockups.css` | `pieces.ts` |
| `Roles` | Quem faz o quê (CR CODE x especialista) | componente | |
| `Proof` | Retrato do Cleiton e prova autorizada em barras | `ProofBars` | `proof.ts` |
| `Contact` | Fragmento de conversa no WhatsApp com mensagem pronta | `site.ts` | |
| `Footer` | Nome grande, redes, privacidade | `site.ts` | |
| `Consent` | Aviso de cookies, só existe se houver `GA4_ID` | `site.ts` | `analytics.ts` |

## Ajustes comuns

- **Mudar a duração total**: o calendário assume 9 semanas (63 dias) em `Calendar.astro`
  (`length: 63`, `length: 9`) e a linha do tempo usa meias semanas de 1 a 18 em `lanes`. Mude os
  dois juntos e os títulos "Nove semanas".
- **Fases em paralelo**: basta sobrepor `from`/`to` em `calPhases`; o dia ganha as duas cores e a
  leitura lista as duas. No máximo duas fases por dia.
- **Prazo variável** (ex.: captação de 14, 21 ou 28 dias): fixe a data do evento, mostre o plano do
  meio no calendário e marque os outros inícios em `calNotes`.
- **Número de etapas do anel**: `stages` aceita outro tamanho; o anel recalcula as posições.
- **Prova**: `ProofBars` só com dado autorizado. Sem dado, remova `Proof` da página.
