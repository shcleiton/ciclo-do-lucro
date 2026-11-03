// llms.txt (https://llmstxt.org): resumo em Markdown para assistentes de IA.
import type { APIRoute } from 'astro';
import { canonicalOf, author, meta } from '../data/site';
import { stages, fronts, FRONTS_TOTAL } from '../data/content';
import { faqAll } from '../data/faq';

export const GET: APIRoute = () => {
  const body = `# Ciclo do Lucro (CR CODE)

> ${meta.description}

Autor: ${author.name}, ${author.role}. ${author.bio}

## Páginas

- [Ciclo do Lucro, o método](${canonicalOf()}): etapas, linha do tempo de 9 semanas, calendário dia a dia, posicionamento, fases, base técnica, produção e papéis.
- [Perguntas frequentes](${canonicalOf('perguntas-frequentes')}): respostas diretas sobre prazos, etapas, aquecimento, captação, TAP, verba de anúncios e o papel do especialista.
- [Pesquisa: anatomia de um lançamento](${canonicalOf('pesquisa/anatomia-de-um-lancamento')}): como ${FRONTS_TOTAL} entregas se dividem em 9 frentes, quanto do calendário vai para preparação e o caso de 33 para 116 vendas com aquecimento.

## As sete etapas

${stages.map((s, i) => `${i + 1}. ${s.name} (${s.term}): ${s.line}`).join('\n')}

## Entregas por frente

${fronts.map((f) => `- ${f.name}: ${f.count}`).join('\n')}
- Total: ${FRONTS_TOTAL}

## Perguntas frequentes

${faqAll.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Opcional

- [Política de privacidade](${canonicalOf('privacidade')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
