// Conteúdo do site, tirado do briefing do Ciclo do Lucro.
// Regras de escrita: sem travessão, sem "não é X, é Y", sem emoji, sem números inventados.

/* ---------- O ciclo ---------- */
export type Stage = {
  id: string;
  name: string;
  term: string;
  line: string;
  // Para onde o clique no anel leva: uma aba de #fases ou uma seção.
  target: { tab: string } | { section: string };
};

export const stages: Stage[] = [
  {
    id: 'concepcao',
    name: 'Concepção',
    term: '7 a 10 dias',
    line: 'Extração com o especialista, oferta, avatar e tese de posicionamento. Fecha com o TAP assinado.',
    target: { tab: 'concepcao' },
  },
  {
    id: 'posicionamento',
    name: 'Posicionamento',
    term: 'Do dia 11 ao fim',
    line: 'Categoria, ouro e mecanismo único guiando cada peça do lançamento.',
    target: { section: 'posicionamento' },
  },
  {
    id: 'aquecimento',
    name: 'Aquecimento',
    term: '14 a 21 dias',
    line: 'Conteúdo do especialista com tráfego para quem ainda não o conhece.',
    target: { tab: 'execucao' },
  },
  {
    id: 'captacao',
    name: 'Captação',
    term: '10 a 14 dias',
    line: 'Anúncios levando para a inscrição no evento gratuito e para o grupo de WhatsApp.',
    target: { tab: 'execucao' },
  },
  {
    id: 'evento',
    name: 'Evento',
    term: '3 aulas ao vivo',
    line: 'Aula 1 abre o problema, aula 2 mostra o caminho, aula 3 prepara a decisão.',
    target: { tab: 'execucao' },
  },
  {
    id: 'venda',
    name: 'Venda',
    term: '5 a 7 dias de carrinho',
    line: 'Pitch ao vivo, página de vendas, WhatsApp e e-mail até a última chamada.',
    target: { tab: 'execucao' },
  },
  {
    id: 'retencao',
    name: 'Retenção',
    term: 'Depois do carrinho',
    line: 'Onboarding, prova social e a próxima entrada.',
    target: { tab: 'depois' },
  },
];

/* ---------- Linha do tempo ---------- */
// hs/he em meias semanas (1 a 18), para que 7 a 10 dias caibam na grade.
export type Lane = { name: string; hs: number; he: number; kind?: 'pos' | 'cart' };

export const lanes: Lane[] = [
  { name: 'Concepção', hs: 1, he: 3 },
  { name: 'Posicionamento', hs: 4, he: 18, kind: 'pos' },
  { name: 'Setup e stack', hs: 4, he: 6 },
  { name: 'Produção', hs: 4, he: 10 },
  { name: 'Aquecimento', hs: 7, he: 11 },
  { name: 'Captação', hs: 12, he: 14 },
  { name: 'Evento', hs: 15, he: 15 },
  { name: 'Carrinho aberto', hs: 16, he: 17, kind: 'cart' },
  { name: 'Onboarding', hs: 18, he: 18 },
  { name: 'Monitoramento diário', hs: 7, he: 18 },
];

export const laneActive = (l: Lane, week: number) => l.hs <= 2 * week && l.he >= 2 * week - 1;

export const weeks = [
  {
    title: 'Extração e estratégia',
    body: 'Reuniões com o especialista para extrair histórias e casos. Público, avatar, oferta e Big Idea definidos.',
    pos: 'Matéria-prima: trajetória, casos e opiniões levantados.',
  },
  {
    title: 'TAP aprovado, setup começa',
    body: 'A concepção fecha entre o dia 7 e o dia 10. Domínio, e-mail e Business Manager entram em configuração. Copy e design começam.',
    pos: 'Tese aprovada. Instagram, bio e site passam a contar a mesma história.',
  },
  {
    title: 'Stack no ar e testado',
    body: 'Checkout, pixel, API de Conversões e grupos de WhatsApp conectados e testados. Páginas em rascunho.',
    pos: 'Presença alinhada, primeiros conteúdos de autoridade gravados.',
  },
  {
    title: 'Aquecimento começa',
    body: 'Conteúdo rodando com tráfego de distribuição. O monitoramento diário liga.',
    pos: 'Conteúdo de autoridade pela lente do mecanismo.',
  },
  {
    title: 'Produção fecha',
    body: 'Vídeos, criativos e roteiros das aulas finalizados. Páginas aprovadas.',
    pos: 'Prova pública: lives, podcasts, parcerias.',
  },
  {
    title: 'Captação abre',
    body: 'Anúncios passam a levar para a inscrição no evento.',
    pos: 'A promessa do evento sai da tese.',
  },
  {
    title: 'Captação a pleno',
    body: 'Inscritos entrando no grupo de WhatsApp e na lista de e-mail. Lembretes e remarketing.',
    pos: 'Conteúdo no grupo reforça por que ele, e por que agora.',
  },
  {
    title: 'Evento e carrinho aberto',
    body: 'Três aulas ao vivo. Pré-venda e abertura do carrinho com o pitch.',
    pos: 'As aulas apresentam o mecanismo. O pitch vende o método.',
  },
  {
    title: 'Fechamento e primeiros alunos',
    body: 'Última chamada, carrinho fecha. Onboarding e primeiro encontro.',
    pos: 'Resultados dos alunos começam a virar prova.',
  },
];

/* ---------- Calendário ---------- */
export type CalPhase = { name: string; from: number; to: number; color: string; legend: string; desc: string };

export const calPhases: CalPhase[] = [
  {
    name: 'Concepção',
    from: 1,
    to: 10,
    color: '#B9D3DA',
    legend: '7 a 10 dias',
    desc: 'Reuniões de extração, oferta, avatar e tese de posicionamento. Fecha com o TAP assinado.',
  },
  {
    name: 'Setup e produção',
    from: 11,
    to: 21,
    color: '#4E8FA8',
    legend: '11 dias',
    desc: 'Domínio, e-mail, checkout, rastreamento e grupos de WhatsApp configurados. Copy, design e vídeos em produção.',
  },
  {
    name: 'Aquecimento',
    from: 22,
    to: 38,
    color: '#2E8C85',
    legend: '17 dias',
    desc: 'Conteúdo do especialista com tráfego para quem ainda não o conhece.',
  },
  {
    name: 'Captação',
    from: 39,
    to: 49,
    color: '#6FBFAF',
    legend: '11 dias',
    desc: 'Anúncios levando para a inscrição no evento gratuito e para o grupo de WhatsApp.',
  },
  {
    name: 'Evento',
    from: 50,
    to: 52,
    color: '#A8E6D9',
    legend: '3 dias',
    desc: 'Três aulas ao vivo.',
  },
  {
    name: 'Carrinho aberto',
    from: 53,
    to: 58,
    color: '#EAF3F1',
    legend: '6 dias',
    desc: 'Pitch, página de vendas, WhatsApp e e-mail até a última chamada.',
  },
  {
    name: 'Onboarding',
    from: 59,
    to: 63,
    color: '#8EA6AE',
    legend: '5 dias',
    desc: 'Boas-vindas, acesso à área de membros e primeiro encontro da turma.',
  },
];

export const calNotes: Record<number, string> = {
  1: 'Primeira reunião de extração.',
  10: 'Prazo final do TAP.',
  11: 'O posicionamento entra em campo.',
  22: 'Primeiro anúncio no ar.',
  50: 'Aula 1.',
  51: 'Aula 2.',
  52: 'Aula 3.',
  53: 'Carrinho abre.',
  58: 'Última chamada.',
  63: 'Primeiro encontro da turma.',
};

export const POS_FROM_DAY = 11;

/* ---------- Posicionamento ---------- */
export const posDefs = [
  {
    name: 'Categoria',
    text: 'Em que mercado o especialista compete e qual categoria ele pode liderar sozinho.',
    ask: 'Quem ele ajuda, e a fazer o quê?',
  },
  {
    name: 'Ouro',
    text: 'O que ele sabe e faz que quase ninguém sabe. Trajetória, casos e decisões são a matéria-prima.',
    ask: 'O que só ele viu de perto?',
  },
  {
    name: 'Mecanismo único',
    text: 'O método com nome próprio que explica como ele entrega o resultado. Produto com método não se compara por preço.',
    ask: 'Como se chama o jeito dele de fazer?',
  },
];

export const posThread = [
  { phase: 'Concepção', title: 'Matéria-prima e tese', origin: true },
  { phase: 'Setup', title: 'Presença alinhada no Instagram, bio e site' },
  { phase: 'Aquecimento e captação', title: 'Autoridade em público. A promessa do evento nasce aqui' },
  { phase: 'Evento e carrinho', title: 'O método no palco' },
  { phase: 'Depois do carrinho', title: 'Prova que realimenta a tese' },
];

/* ---------- Pilha técnica ---------- */
export const stack = [
  ['Domínio', 'Registro, DNS, SSL e subdomínios por página', 'Sem domínio próprio não há e-mail confiável nem rastreamento limpo'],
  ['E-mail', 'Plataforma de envio (ActiveCampaign, RD Station ou similar), SPF, DKIM e DMARC', 'Sem autenticação, os e-mails caem no spam'],
  ['Site institucional', 'Quem é o especialista, trajetória, produto e contato', 'Prova de autoridade para quem pesquisa antes de comprar'],
  ['Páginas do lançamento', 'Captura, obrigado, evento, vendas e pós-compra', 'Cada etapa do funil tem sua página e seu teste'],
  ['Checkout', 'Hotmart, Eduzz ou Kiwify, com Pix, boleto e cartão parcelado (recorrência para assinaturas)', 'Parcelamento e Pix mudam a conversão no Brasil'],
  ['Business Manager', 'Conta de anúncios, página, Instagram, verificação do domínio, pagamento', 'Conta mal configurada é bloqueada no meio do lançamento'],
  ['Rastreamento', 'Pixel, API de Conversões, UTMs, Google Analytics e integração com a plataforma de venda', 'Mostra quanto custa cada lead e cada venda'],
  ['Grupos de WhatsApp', 'Número dedicado, grupos ou comunidade do evento, ferramenta de gestão e disparo', 'Principal canal de presença no evento e de fechamento no Brasil'],
  ['Transmissão ao vivo', 'YouTube, Zoom ou StreamYard, com teste de som e imagem', 'É onde as aulas acontecem'],
  ['Área de membros', 'Da própria plataforma (Hotmart, Eduzz ou Kiwify)', 'Reduz reembolso e cancelamento'],
  ['CRM e controle', 'Origem de cada lead, status e vendas por canal', 'Base do relatório diário'],
] as const;

/* ---------- Produção ---------- */
export const fronts = [
  { name: 'Copy', count: 40, body: 'Textos de páginas, anúncios, e-mails, mensagens de WhatsApp, roteiros de vídeo e aulas, pitch.', who: 'A CR CODE escreve. O especialista aprova.' },
  { name: 'Vídeos', count: 22, body: 'Criativos, conteúdo de aquecimento, convites, vídeo da página de vendas, edição.', who: 'A CR CODE roteiriza e edita. O especialista grava.' },
  { name: 'Tráfego', count: 21, body: 'Públicos, campanhas de aquecimento, captação e remarketing, testes, regras de verba.', who: 'A CR CODE opera. A verba de mídia é do cliente.' },
  { name: 'Expert', count: 18, body: 'Gravações, ensaio das aulas, lives e aprovações do especialista.', who: 'A frente que depende do tempo do especialista. A CR CODE prepara roteiro e agenda.' },
  { name: 'Design', count: 16, body: 'Identidade do lançamento, criativos, artes, slides das aulas.', who: 'A CR CODE produz.' },
  { name: 'Páginas', count: 11, body: 'Site, captura, obrigado, evento, vendas, checkout, pós-compra.', who: 'A CR CODE constrói e testa.' },
  { name: 'E-mails e WhatsApp', count: 7, body: 'Sequências de boas-vindas, lembrete, aula, carrinho, última chamada, onboarding.', who: 'A CR CODE escreve e programa os envios.' },
  { name: 'Produto', count: 7, body: 'Estrutura, cronograma, materiais, área de membros, regras.', who: 'Desenhado junto com o especialista.' },
  { name: 'Infra', count: 4, body: 'Integrações entre checkout, e-mail, WhatsApp, CRM e rastreamento.', who: 'A CR CODE configura.' },
];

export const FRONTS_TOTAL = fronts.reduce((s, f) => s + f.count, 0);
