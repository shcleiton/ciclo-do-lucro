---
name: cr-code-pagina-metodo
description: Layout da CR CODE (Cleiton Ramos) para páginas de método, lançamento e proposta, criado no site do Ciclo do Lucro (cleitonramos.com.br/ciclodolucro). Campo azul petróleo, tipografia Archivo larga, anel do ciclo no hero, linha do tempo semanal, calendário dia a dia, abas de fases, mockups das peças e conversa final no WhatsApp. Use sempre que o Cleiton ou a CR CODE pedir uma página nova de método, lançamento, proposta comercial, apresentação de serviço ou subpágina em cleitonramos.com.br, mesmo que ele não fale em "layout" ou "skill". Também quando pedir para "usar o layout do Ciclo do Lucro", "no mesmo padrão do ciclodolucro", "página igual àquela", ou para publicar uma página nova em cleitonramos.com.br/algumacoisa.
---

# Página de método CR CODE

Esta skill reproduz o layout do Ciclo do Lucro para outro método, produto ou proposta da CR CODE.
O ponto de partida é o projeto pronto em `assets/template/` (Astro 5, CSS próprio, JS leve por
componente, sem backend). Partir dele economiza dias: o visual, a acessibilidade e a performance já
foram validados (Lighthouse 96/100/100/100 em produção).

## Quando a página nova não é um "ciclo"

O layout conta uma história em três camadas: o método (anel), o tempo (semanas e dias) e as peças
(telas que o público vê). Se o assunto novo tem etapas e prazo, todas as seções servem. Se não tem
(uma proposta curta, por exemplo), corte as seções de tempo em vez de inventar um cronograma. Seção
sem conteúdo real é pior que seção ausente.

## Fluxo

1. **Ler o briefing** e decidir quais seções entram. O catálogo está em `references/secoes.md`.
2. **Copiar o template** para a pasta do projeto: `cp -r <skill>/assets/template <destino>` e
   `npm install`.
3. **Trocar o caminho**: `BASE` em `astro.config.mjs`, o diretório em `build:vercel` no
   `package.json` e os caminhos em `vercel.json` passam a usar o slug novo (ex.: `/mentoria`).
4. **Trocar o conteúdo**. Quase todo texto e número mora em `src/data/content.ts` e
   `src/data/site.ts`. Títulos de seção e textos fixos estão nos componentes de `src/components/`.
   A ordem das seções fica em `src/pages/index.astro`.
5. **Ajustar a identidade só se o briefing pedir**. Os tokens de cor e tipo estão no topo de
   `src/styles/global.css` e documentados em `references/design-system.md`. Mantenha as regras
   de composição mesmo trocando a cor.
6. **Validar** (abaixo) e **publicar** (`references/publicacao.md`).

## Regras de escrita (do Cleiton)

Português do Brasil, direto. Estas regras vieram de correções reais, então valem para todo texto:

- Sem travessão, sem emoji, sem hashtag.
- Sem a construção "não é X, é Y".
- Sem rótulo pequeno em cima de título (eyebrow).
- Sem jargão de marketing (sinergia, alavancar, jornada transformacional, exponencial...).
- **Sem promessa de resultado.** "Um ciclo que se paga" foi vetado: título descreve como o método
  funciona, não o retorno que ele dá.
- **Nunca inventar número, depoimento, cliente ou resultado.** Onde faltar dado, deixe `TODO` no
  código e esconda o bloco da página. Os únicos dados de prova usados até hoje foram os que o
  Cleiton forneceu (escola de pós: 33 para 116 vendas com aquecimento).
- Se o briefing tiver algo incoerente, aponte e corrija ("ordem burra não seguimos"), dizendo o
  que mudou.

`npm run check:copy` verifica a maior parte disso no HTML gerado. Ajuste a lista `allow` do script
se o briefing usar de propósito uma palavra da lista.

## Regras visuais que fazem o layout funcionar

Resumo; o detalhe está em `references/design-system.md`.

- Fundo petróleo `#03354E`; superfícies separadas por degrau de tom, nunca por borda fina ou sombra.
- Uma cor de ação: vidro `#A8E6D9`, em pílula. Botão secundário em cápsula translúcida.
- Uma família tipográfica (Archivo variável, largura 100 a 125), cinco tamanhos.
- Nenhuma seção repete o layout da vizinha.
- Mockups são fragmentos de interface marcados como "Exemplo ilustrativo" para leitor de tela,
  sem logo de marca real.
- Movimento curto (`cubic-bezier(0.23,1,0.32,1)`, até 300 ms), tudo respeita
  `prefers-reduced-motion`, e animação contínua tem botão de pausa.
- Calendário aceita fases em paralelo: dia com duas fases leva as duas cores na diagonal.

## Validar antes de publicar

```bash
npx astro check          # 0 erros
npm run build
npm run check:copy       # regras de escrita
```

Depois, abra a página no Chromium (Playwright já instalado) em 390 px e 1440 px: sem rolagem
horizontal, sem erro no console, interações funcionando (anel, linha do tempo, calendário, abas,
peças). Rode Lighthouse se mexer em imagem ou fonte. Não declare nada publicado ou aprovado sem ter
visto o resultado.

## Contato e dados do Cleiton

- WhatsApp: 5521982812061 (`src/data/site.ts`, com mensagem pronta).
- Instagram: cleitonramos.mkt.
- Pendentes até ele enviar: LinkedIn, e-mail, fonte Suissnord e logo SVG oficial, ID do GA4.
  Com GA4 vazio, a página não carrega medição nem banner de cookies (LGPD).
