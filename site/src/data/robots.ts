// robots.txt do domínio: libera buscadores e crawlers de IA, e aponta os sitemaps.
// Lista de agentes conferida na documentação de cada empresa (OpenAI, Anthropic, Google, Perplexity, Apple, Microsoft).
const AI_AGENTS = [
  // OpenAI: busca do ChatGPT, visitas pedidas pelo usuário, treino e checagem de anúncios
  'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'OAI-AdsBot',
  // Anthropic
  'Claude-SearchBot', 'Claude-User', 'ClaudeBot',
  // Perplexity
  'PerplexityBot', 'Perplexity-User',
  // Google (Gemini e AI Overviews), Apple, Microsoft, Meta, Amazon, Mistral, DuckDuckGo, Common Crawl
  'Google-Extended', 'Applebot', 'Applebot-Extended', 'bingbot', 'meta-externalagent', 'Meta-ExternalFetcher',
  'Amazonbot', 'MistralAI-User', 'DuckAssistBot', 'CCBot', 'cohere-ai',
];

export const ROBOTS_TXT = `# robots.txt de cleitonramos.com.br
# Todos os buscadores e assistentes de IA podem ler e citar o site.

User-agent: *
Allow: /

${AI_AGENTS.map((a) => `User-agent: ${a}`).join('\n')}
Allow: /

Sitemap: https://cleitonramos.com.br/sitemap.xml
Sitemap: https://cleitonramos.com.br/ciclodolucro/sitemap.xml
`;
