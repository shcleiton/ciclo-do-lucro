// @ts-check
import { defineConfig } from 'astro/config';

// Caminho da página dentro do domínio (ex.: cleitonramos.com.br/ciclodolucro).
// Troque BASE pelo slug da nova página e faça o mesmo em package.json (build:vercel) e vercel.json.
const BASE = '/ciclodolucro';
const site = process.env.SITE_URL || 'https://cleitonramos.com.br';
const assetsPrefix = process.env.ASSETS_PREFIX || undefined;

export default defineConfig({
  site,
  base: BASE,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'never', assets: '_astro', assetsPrefix },
  compressHTML: true,
});
