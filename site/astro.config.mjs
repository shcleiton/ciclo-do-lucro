// @ts-check
import { defineConfig } from 'astro/config';

// A página vive em https://cleitonramos.com.br/ciclodolucro: o projeto principal do domínio
// reescreve /ciclodolucro/* para este projeto, que serve tudo sob o mesmo prefixo.
const site = process.env.SITE_URL || 'https://cleitonramos.com.br';
// Opcional: servir /_astro de uma CDN (ver README, "Publicação sem integração Git").
const assetsPrefix = process.env.ASSETS_PREFIX || undefined;

export default defineConfig({
  site,
  base: '/ciclodolucro',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'never', assets: '_astro', assetsPrefix },
  compressHTML: true,
});
