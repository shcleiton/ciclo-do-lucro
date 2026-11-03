# SEO e visibilidade em IA

O que está neste repositório e o que precisa ir para o projeto principal do domínio.

## Já resolvido aqui (projeto `ciclodolucro`)

| Item | Onde |
| --- | --- |
| Título, meta description, canônico com barra final, `robots` | `src/layouts/Base.astro`, `src/data/site.ts` |
| Dados estruturados (Organization, Person, WebSite, WebPage, HowTo, FAQPage, Article, Dataset, BreadcrumbList) | `src/data/schema.ts` |
| Autor e datas de publicação e revisão, visíveis e no JSON-LD | `src/data/site.ts` (`author`, `dates`), `src/components/Byline.astro` |
| Perguntas frequentes | `src/data/faq.ts`, `/ciclodolucro/perguntas-frequentes/` e seção `#perguntas` na inicial |
| Pesquisa original com tabelas e fontes | `/ciclodolucro/pesquisa/anatomia-de-um-lancamento/` |
| Fontes confiáveis | `src/data/sources.ts` |
| Sitemap | `/ciclodolucro/sitemap.xml` |
| Resumo para IA | `/ciclodolucro/llms.txt` |
| 404 com `noindex` | `src/pages/404.astro` |

Ao revisar uma página, atualize a data `modified` dela em `src/data/site.ts`. O sitemap e o JSON-LD seguem sozinhos.

## Falta no projeto principal (`cleitonramos`, repositório `cleitonramos-site`)

Buscadores e crawlers de IA só leem `robots.txt` na raiz do domínio. Hoje
`https://cleitonramos.com.br/robots.txt` e `/sitemap.xml` respondem 404.

1. Copiar `seo/raiz/robots.txt`, `seo/raiz/sitemap.xml` e `seo/raiz/llms.txt` para a pasta pública
   do `cleitonramos-site` (servidos em `/robots.txt`, `/sitemap.xml` e `/llms.txt`).
2. Publicar e conferir:
   `curl -A "OAI-SearchBot" https://cleitonramos.com.br/robots.txt`
3. Enviar os dois sitemaps no Google Search Console e no Bing Webmaster Tools (o Bing alimenta parte
   da busca do ChatGPT). Pedir indexação das 3 páginas do Ciclo do Lucro.
