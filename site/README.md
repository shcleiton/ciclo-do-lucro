# Ciclo do Lucro · CR CODE

Site estático que explica um lançamento do começo ao fim, com o método Ciclo do Lucro.
Astro 5, CSS próprio com tokens, JavaScript leve por componente. Nenhum backend.
Publicado em **https://cleitonramos.com.br/ciclodolucro** (caminho base `/ciclodolucro`).
O sistema visual está em `DESIGN.md`; leia antes de mexer no visual.

## Rodar

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # gera dist/
npm run check:copy   # depois do build: travessão, emoji, jargão, "não é X, é Y"
npm run og           # regenera og.jpg e favicons (usa o Chromium do Playwright)
```

## Onde está cada coisa

| Arquivo | O que tem |
| --- | --- |
| `src/data/site.ts` | WhatsApp, GA4, redes do rodapé, título e descrição |
| `src/data/content.ts` | Etapas, linha do tempo, calendário, posicionamento, stack, frentes |
| `src/components/` | Uma seção por arquivo, na ordem do briefing |
| `src/scripts/` | Interações: anel, linha do tempo, calendário, abas, produção, peças |
| `src/styles/global.css` | Tokens e estilos, com prefixo por componente (`tl-`, `cal-`, `mk-`...) |
| `src/styles/mockups.css` | As telas das peças (fragmentos de interface, com sombra e bordas próprias) |
| `src/assets/` | Fonte Archivo e o retrato do Cleiton (o mesmo de cleitonramos.com.br) |
| `design/` | Referências de design (awesome-design-md) e diretrizes da Vercel usadas na revisão |

## Pendências (marcadas com `TODO` no código)

- [x] Número de WhatsApp
- [ ] Fonte Suissnord e logo SVG: `@font-face` em `global.css` e `src/components/Logo.astro`
- [ ] LinkedIn e e-mail: `social` em `src/data/site.ts` (vazio não aparece)
- [ ] Resultados e depoimentos autorizados: `src/components/Proof.astro`
- [ ] ID do GA4: `GA4_ID` em `src/data/site.ts` (liga o banner de cookies sozinho)
- [ ] Preços da mockup de vendas: `src/components/Pieces.astro`

## Analytics e LGPD

Sem `GA4_ID`, a página não carrega nenhuma ferramenta de medição nem cookie. Com o ID preenchido,
aparece um aviso com "Aceitar" e "Recusar" de mesmo peso, e o Google só carrega depois do aceite.
O evento `whatsapp_click` sai dos três botões de conversa. O Vercel Analytics foi retirado: atrás do
rewrite, o script dele seria pedido ao projeto principal do domínio, não a este.

## Publicação

A página é um projeto Vercel próprio (`ciclodolucro`) que serve tudo sob `/ciclodolucro/`. O projeto
principal do domínio (`cleitonramos`) reescreve `/ciclodolucro` e `/ciclodolucro/*` para ele, do mesmo
jeito que já faz com `/captacao`. Publicar uma nova versão do Ciclo do Lucro nunca mexe no site principal.

```bash
npm run build                      # gera dist/ com o prefixo /ciclodolucro
# publicar dist/ no projeto "ciclodolucro" como produção, com os arquivos sob ciclodolucro/
```
