// Cópia do robots.txt da raiz do domínio. Buscadores só leem o de cleitonramos.com.br/robots.txt,
// que vive no projeto principal (ver seo/README.md); este fica aqui como referência e para checagem.
import type { APIRoute } from 'astro';
import { ROBOTS_TXT } from '../data/robots';
export const GET: APIRoute = () => new Response(ROBOTS_TXT, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
