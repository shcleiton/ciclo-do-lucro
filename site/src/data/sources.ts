// Fontes externas citadas no site. Só documentação oficial ou texto de lei.
export type Source = { id: string; title: string; publisher: string; url: string; supports: string };

export const sources: Source[] = [
  {
    id: 'google-senders',
    title: 'Diretrizes para remetentes de e-mail',
    publisher: 'Google (Ajuda do Gmail e do Google Workspace)',
    url: 'https://support.google.com/a/answer/81126',
    supports: 'Remetentes precisam autenticar o domínio com SPF e DKIM, e quem envia em volume também com DMARC, para não cair no spam.',
  },
  {
    id: 'yahoo-senders',
    title: 'Sender Best Practices',
    publisher: 'Yahoo',
    url: 'https://senders.yahooinc.com/best-practices/',
    supports: 'O Yahoo pede as mesmas autenticações (SPF, DKIM e DMARC) para entregar e-mail na caixa de entrada.',
  },
  {
    id: 'meta-capi',
    title: 'API de Conversões',
    publisher: 'Meta for Developers',
    url: 'https://developers.facebook.com/docs/marketing-api/conversions-api',
    supports: 'A API de Conversões envia eventos do servidor para a Meta e complementa o pixel na medição de leads e vendas.',
  },
  {
    id: 'ga4-utm',
    title: 'Coletar dados de campanhas com URLs personalizados',
    publisher: 'Google Analytics (Ajuda)',
    url: 'https://support.google.com/analytics/answer/10917952',
    supports: 'Parâmetros UTM identificam de qual campanha, anúncio e canal veio cada visita.',
  },
  {
    id: 'bcb-pix',
    title: 'Pix',
    publisher: 'Banco Central do Brasil',
    url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix',
    supports: 'O Pix é o meio de pagamento instantâneo criado pelo Banco Central, disponível todos os dias, a qualquer hora.',
  },
  {
    id: 'lgpd',
    title: 'Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018)',
    publisher: 'Presidência da República, Planalto',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    supports: 'Base legal para o aviso de cookies, o consentimento antes da medição e os direitos de acesso, correção e exclusão.',
  },
  {
    id: 'pmbok',
    title: 'PMBOK Guide',
    publisher: 'Project Management Institute (PMI)',
    url: 'https://www.pmi.org/standards/pmbok',
    supports: 'O Termo de Abertura do Projeto (TAP, ou project charter) vem da gestão de projetos: o documento que autoriza o projeto e fixa escopo, metas e responsáveis.',
  },
];

export const sourceById = (id: string) => sources.find((s) => s.id === id)!;
