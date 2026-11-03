// Sitemap das páginas do Ciclo do Lucro. A data de cada página vem de src/data/site.ts.
import type { APIRoute } from 'astro';
import { canonicalOf, dates } from '../data/site';

const pages = [
  { path: '', d: dates.home, priority: '1.0' },
  { path: 'perguntas-frequentes', d: dates.faq, priority: '0.8' },
  { path: 'pesquisa/anatomia-de-um-lancamento', d: dates.pesquisa, priority: '0.8' },
  { path: 'privacidade', d: dates.privacidade, priority: '0.2' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${canonicalOf(p.path)}</loc><lastmod>${p.d.modified}</lastmod><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
