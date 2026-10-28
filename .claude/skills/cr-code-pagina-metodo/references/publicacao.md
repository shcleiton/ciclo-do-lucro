# Publicar em cleitonramos.com.br/<slug>

O domínio já tem um site no ar (projeto Vercel `cleitonramos`, time `shcleitons-projects`) com
outras subpáginas: `/captacao`, `/propostavivia`, `/propostaescolainformada`, `/diagnostico`,
`/abracadabra` e `/ciclodolucro`. Cada página nova é um projeto Vercel separado, e o projeto principal
reescreve o caminho para ele. Não mexa em DNS nem no domínio.

## Caminho normal (GitHub conectado na Vercel)

1. Criar o projeto Vercel da página, ligado ao repositório, com raiz na pasta do site, build
   `npm run build:vercel` e saída `out`.
2. Adicionar a ele um domínio `*.vercel.app` próprio (ex.: `mentoria-crcode.vercel.app`). Use esse
   domínio no rewrite, nunca o alias do time (`*-shcleitons-projects.vercel.app`), que responde com
   `x-robots-tag: noindex` e derruba o SEO.
3. No projeto `cleitonramos`, acrescentar ao `vercel.json` os rewrites, no mesmo padrão dos outros:
   ```json
   { "source": "/<slug>", "destination": "https://<dominio>.vercel.app/<slug>" },
   { "source": "/<slug>/", "destination": "https://<dominio>.vercel.app/<slug>/" },
   { "source": "/<slug>/:path+", "destination": "https://<dominio>.vercel.app/<slug>/:path+" }
   ```
   Antes de republicar o site principal, confira que os arquivos da nova versão são os mesmos da
   atual mais esse `vercel.json`. É o site do Cleiton: nenhuma outra rota pode mudar.

## Sem integração Git

Se a Vercel recusar o repositório ("add a Login Connection"), o Ciclo do Lucro foi publicado assim
(detalhe no README do site):

- Assets servidos pelo jsDelivr fixado por commit (`ASSETS_PREFIX` no build). Tags git podem estar
  bloqueadas; fixe pelo hash do commit.
- Uma função de borda no projeto da página busca o HTML no jsDelivr e devolve como `text/html`.
- Para atualizar: commit dos assets novos, HTML apontando para esse commit, commit do HTML, proxy
  apontando para ele, republicar o projeto da página.

Peça ao Cleiton para conectar o GitHub em Vercel → Account Settings → Authentication quando puder.
Isso elimina esse caminho alternativo.

## Cache

O projeto principal guarda em cache a resposta do rewrite. Se a página enviar `CDN-Cache-Control`,
o domínio segura a versão velha por até 24 h. Use `Vercel-CDN-Cache-Control`, que fica só na borda
do projeto da página, com `Cache-Control: public, max-age=0, must-revalidate`. Assim cada
republicação aparece no domínio em segundos.

## Conferir depois de publicar

- A página e as subrotas respondem 200 `text/html` no domínio, e o HTML é o mesmo do build.
- As outras rotas do domínio continuam 200: `/`, `/captacao/`, `/diagnostico`, `/propostavivia`,
  `/propostavivia/guia`, `/propostaescolainformada`, `/abracadabra/ver`.
- Sem `noindex` na página nova, imagem OG respondendo, links de WhatsApp e Instagram certos.
