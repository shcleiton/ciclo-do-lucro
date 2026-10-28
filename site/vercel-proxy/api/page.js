// Serve as páginas do Ciclo do Lucro enquanto o projeto não tem integração Git na Vercel.
// O HTML vem do repositório público, fixado por commit no jsDelivr, e fica em cache na borda.
export const config = { runtime: 'edge' };

const SRC = 'https://cdn.jsdelivr.net/gh/shcleiton/cmo@09a96cefe35ffcd2685148e8365d7aa95c3d0528/site/cdn/pages/';
const PAGES = { index: 'index.html', privacidade: 'privacidade.html' };

export default async function handler(request) {
  const page = new URL(request.url).searchParams.get('p') || 'index';
  const file = PAGES[page];
  if (!file) return new Response('Página não encontrada', { status: 404 });
  const upstream = await fetch(SRC + file);
  if (!upstream.ok) return new Response('Página indisponível no momento', { status: 502 });
  return new Response(upstream.body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
      'cdn-cache-control': 'max-age=86400, stale-while-revalidate=604800',
    },
  });
}
