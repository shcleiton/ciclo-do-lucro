// Dados estruturados (schema.org em JSON-LD). Cada página monta um @graph com as peças comuns
// (organização, autor, site) e as próprias (página, FAQ, artigo, trilha de navegação).
import { ORIGIN, canonicalOf, author, org, meta } from './site';
import type { Faq } from './faq';

export const ids = {
  org: `${ORIGIN}/#organization`,
  person: `${ORIGIN}/#cleiton-ramos`,
  site: `${canonicalOf()}#website`,
  method: `${canonicalOf()}#metodo`,
};

export const orgNode = {
  '@type': 'Organization',
  '@id': ids.org,
  name: org.name,
  url: org.url,
  logo: `${canonicalOf()}apple-touch-icon.png`,
  founder: { '@id': ids.person },
  areaServed: 'BR',
  sameAs: ['https://www.instagram.com/cleitonramos.mkt/'],
};

export const personNode = {
  '@type': 'Person',
  '@id': ids.person,
  name: author.name,
  url: author.url,
  jobTitle: author.role,
  description: author.bio,
  worksFor: { '@id': ids.org },
  homeLocation: { '@type': 'Place', name: `${author.city}, Brasil` },
  knowsAbout: author.knowsAbout,
  sameAs: ['https://www.instagram.com/cleitonramos.mkt/'],
};

export const siteNode = {
  '@type': 'WebSite',
  '@id': ids.site,
  url: canonicalOf(),
  name: 'Ciclo do Lucro',
  inLanguage: 'pt-BR',
  publisher: { '@id': ids.org },
};

// O método em si, descrito como um passo a passo.
export const methodNode = (stages: { name: string; term: string; line: string }[]) => ({
  '@type': 'HowTo',
  '@id': ids.method,
  name: 'Como fazer um lançamento de infoproduto com o Ciclo do Lucro',
  description: meta.description,
  totalTime: 'P60D',
  inLanguage: 'pt-BR',
  author: { '@id': ids.person },
  step: stages.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: `${s.name} (${s.term})`,
    text: s.line,
  })),
});

export const pageNode = (o: {
  path: string;
  name: string;
  description: string;
  published: string;
  modified: string;
  type?: string;
  about?: object;
}) => ({
  '@type': o.type ?? 'WebPage',
  '@id': `${canonicalOf(o.path)}#webpage`,
  url: canonicalOf(o.path),
  name: o.name,
  description: o.description,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ids.site },
  author: { '@id': ids.person },
  publisher: { '@id': ids.org },
  datePublished: o.published,
  dateModified: o.modified,
  primaryImageOfPage: { '@type': 'ImageObject', url: `${canonicalOf()}og.jpg`, width: 1200, height: 630 },
  breadcrumb: { '@id': `${canonicalOf(o.path)}#breadcrumb` },
  ...(o.about ? { about: o.about } : {}),
});

export const breadcrumbNode = (path: string, trail: { name: string; path: string | null }[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${canonicalOf(path)}#breadcrumb`,
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: t.path === null ? `${ORIGIN}/` : canonicalOf(t.path),
  })),
});

const plain = (s: string) => s.replace(/<[^>]+>/g, '');
export const faqNode = (path: string, items: Faq[]) => ({
  '@type': 'FAQPage',
  '@id': `${canonicalOf(path)}#faq`,
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
  })),
});

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
