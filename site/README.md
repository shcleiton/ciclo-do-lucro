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

No ar em **https://cleitonramos.com.br/ciclodolucro**. O projeto principal do domínio (`cleitonramos`)
reescreve `/ciclodolucro`, `/ciclodolucro/` e `/ciclodolucro/*` para `https://ciclodolucro-crcode.vercel.app`,
domínio de produção do projeto Vercel `ciclodolucro` (mesmo padrão do `/captacao`).

### Como está publicado hoje (sem integração Git)

A Vercel ainda não consegue ler este repositório: falta conectar o GitHub como Login Connection na conta.
Por isso a publicação atual funciona assim:

- `site/cdn/_astro` e `site/cdn/og.jpg`: CSS, JS, fonte, foto e imagem OG, servidos pelo jsDelivr
  fixado por commit (`ASSETS_PREFIX` no build).
- `site/cdn/pages`: o HTML das duas páginas, já apontando para esses assets.
- `site/vercel-proxy`: o que está no projeto `ciclodolucro`. Uma função de borda busca o HTML no jsDelivr,
  entrega como `text/html` e deixa em cache na Vercel.

Para publicar uma nova versão nesse modo: build com `ASSETS_PREFIX` apontando para um commit que já tenha
a fonte, copiar `dist/_astro` para `cdn/_astro`, commit, trocar o commit no HTML e em `vercel-proxy/api/page.js`,
commit de novo e republicar o projeto `ciclodolucro`.

### Quando o GitHub estiver conectado na Vercel

Ligar o projeto `ciclodolucro` ao repositório, com raiz `site`, build `npm run build:vercel` e saída `out`
(sem `ASSETS_PREFIX`). Tudo passa a ser servido pelo próprio domínio e cada push publica sozinho.
Depois disso, `site/cdn` e `site/vercel-proxy` podem ser apagados.
