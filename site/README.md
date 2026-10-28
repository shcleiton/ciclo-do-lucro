# Ciclo do Lucro · CR CODE

Site estático que explica um lançamento do começo ao fim, com o método Ciclo do Lucro.
Astro 5, CSS próprio com tokens, JavaScript leve por componente. Nenhum backend.

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

## Pendências (marcadas com `TODO` no código)

- [ ] Número de WhatsApp: `WHATSAPP_NUMBER` em `src/data/site.ts`
- [ ] Fonte Suissnord e logo SVG: `@font-face` em `global.css` e `src/components/Logo.astro`
- [ ] Domínio: variável `SITE_URL` na Vercel (sem ela, usa o domínio de produção da Vercel)
- [ ] Instagram, LinkedIn e e-mail: `social` em `src/data/site.ts` (vazio não aparece)
- [ ] Resultados e depoimentos autorizados: `src/components/Proof.astro`
- [ ] ID do GA4: `GA4_ID` em `src/data/site.ts` (liga o banner de cookies sozinho)
- [ ] Preços da mockup de vendas: `src/components/Pieces.astro`

## Analytics e LGPD

O Vercel Analytics roda sempre e não usa cookies, então não pede consentimento. O evento
`whatsapp_click` sai dos dois botões de conversa. Eventos personalizados exigem plano Pro na Vercel.
Com `GA4_ID` preenchido, aparece um aviso com "Aceitar" e "Recusar" de mesmo peso, e o Google só
carrega depois do aceite.

## Deploy na Vercel

Importar o repositório e apontar **Root Directory** para `site`. O resto (framework Astro,
cache das fontes) está em `vercel.json`.
