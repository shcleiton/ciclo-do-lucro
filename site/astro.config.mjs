// @ts-check
import { defineConfig } from 'astro/config';

// URL pública usada nas tags Open Graph (o preview do WhatsApp exige URL absoluta).
// TODO: domínio (ex.: ciclodolucro.com.br). Até lá, a Vercel injeta o domínio de produção do projeto.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
