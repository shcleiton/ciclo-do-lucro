// Conteúdo da proposta para Mírian Murata.
// Regras de escrita: sem travessão, sem "não é X, é Y", sem emoji, sem números inventados.

/* ---------- O ciclo ---------- */
export type Stage = {
  id: string;
  name: string;
  term: string;
  line: string;
  // Para onde o clique no anel leva: uma aba de #entregas ou uma seção.
  target: { tab: string } | { section: string };
};

export const stages: Stage[] = [
  {
    id: 'posicionar',
    name: 'Posicionar',
    term: 'Semanas 1 e 2',
    line: 'Tese, público e promessa do perfil. A escada de produtos nasce daqui.',
    target: { tab: 'posicionar' },
  },
  {
    id: 'atrair',
    name: 'Atrair',
    term: 'Do primeiro dia ao fim',
    line: 'Reels curtos, vídeos de autoridade e carrosséis em volume, dentro do posicionamento.',
    target: { tab: 'atrair' },
  },
  {
    id: 'vender',
    name: 'Vender todo dia',
    term: 'A partir da semana 3',
    line: 'Funil perpétuo do Kit Primeiro Contrato, com order bump no checkout e upsell logo depois da compra.',
    target: { tab: 'vender' },
  },
  {
    id: 'reinvestir',
    name: 'Reinvestir',
    term: 'Toda semana',
    line: 'O caixa dos produtos de entrada volta para o anúncio, com a verba indo principalmente para quem já está aquecido.',
    target: { tab: 'perpetuo' },
  },
  {
    id: 'pico',
    name: 'Pico',
    term: 'Por volta do dia 90',
    line: 'Evento de 3 dias, com o carrinho do Programa aberto só no terceiro.',
    target: { tab: 'pico' },
  },
  {
    id: 'operar',
    name: 'Operar',
    term: 'Contínuo',
    line: 'O perpétuo segue rodando, os números são lidos toda semana e o próximo ciclo começa.',
    target: { tab: 'operar' },
  },
];

/* ---------- Escada de produtos ---------- */
export type Step = {
  level: string;
  name: string;
  price: string;
  priceNote?: string;
  gives: string;
  role: string;
  open?: boolean; // degrau ainda a definir
};

export const ladder: Step[] = [
  {
    level: 'Entrada',
    name: 'Kit Primeiro Contrato',
    price: 'R$ 37',
    gives: 'Aula de 30 a 40 minutos explicando o material, mais o kit: media kit, tabela de preço, mensagem para abordar marca e modelo de contrato.',
    role: 'A primeira compra. Fica no perpétuo, todos os dias, e existe para pagar o anúncio e formar a base que sobe a escada.',
  },
  {
    level: 'No checkout',
    name: 'Respostas Prontas de Negociação',
    price: 'R$ 17',
    priceNote: 'R$ 27 fora do checkout',
    gives: 'Aula de 15 a 25 minutos, mais as respostas para quando a marca oferece permuta, pede desconto ou some.',
    role: 'Order bump. Aumenta o valor de cada compra do Kit sem anúncio extra.',
  },
  {
    level: 'Intermediário',
    name: 'Perfil Contratável',
    price: 'R$ 297',
    gives: 'Aula de posicionamento, mais uma skill de IA que cria pauta e roteiros na conta do próprio aluno, com aula prática de uso.',
    role: 'Upsell logo depois da compra do Kit. Prepara o aluno para o Programa.',
  },
  {
    level: 'Principal',
    name: 'Programa Influência que Vira Contrato',
    price: 'R$ 1.997',
    priceNote: 'Turma fundadora a R$ 1.497',
    gives: '3 meses, com 6 encontros quinzenais de 2h a 2h30: aula, tarefa prática até o próximo encontro e hot seat.',
    role: 'Vendido no evento, a cada 90 dias. Uma turma termina quando a próxima começa.',
  },
  {
    level: 'A definir',
    name: 'Mentoria em grupo',
    price: 'A definir',
    gives: 'Formato a definir.',
    role: 'Degrau previsto na escada, construído depois da primeira turma do Programa.',
    open: true,
  },
  {
    level: 'A definir',
    name: 'Comunidade por assinatura',
    price: 'A definir',
    gives: 'Formato a definir.',
    role: 'Degrau previsto na escada, construído depois da primeira turma do Programa.',
    open: true,
  },
  {
    level: 'Topo',
    name: 'Sua mentoria individual',
    price: 'Valor atual',
    gives: 'O que você já entrega no presencial.',
    role: 'O topo da escada, agora com quem já passou pelos degraus anteriores.',
  },
];

/* ---------- Linha do tempo ---------- */
// hs/he em meias semanas (1 a 26): 13 semanas, o primeiro ciclo.
export type Lane = { name: string; hs: number; he: number; kind?: 'pos' | 'cart' };

export const lanes: Lane[] = [
  { name: 'Tese em campo', hs: 1, he: 26, kind: 'pos' },
  { name: 'Posicionamento e setup', hs: 1, he: 4 },
  { name: 'Produção dos produtos', hs: 1, he: 12 },
  { name: 'Conteúdo', hs: 1, he: 26 },
  { name: 'Perpétuo do Kit', hs: 5, he: 26 },
  { name: 'Distribuição e remarketing', hs: 5, he: 26 },
  { name: 'Upsell Perfil Contratável', hs: 9, he: 26 },
  { name: 'Painel e placar semanal', hs: 7, he: 26 },
  { name: 'Aquecimento', hs: 13, he: 24 },
  { name: 'Captação do evento', hs: 15, he: 24 },
  { name: 'Evento e carrinho', hs: 25, he: 26, kind: 'cart' },
];

export const laneActive = (l: Lane, week: number) => l.hs <= 2 * week && l.he >= 2 * week - 1;

export const weeks = [
  {
    title: 'Posicionamento e primeira gravação',
    body: 'Tese, público e promessa definidos. Pixel, API de conversões e públicos configurados. Primeira gravação em lote, com as aulas do Kit e das Respostas e o primeiro lote de Reels.',
    pos: 'A tese entra na bio, nos destaques e nos primeiros Reels.',
  },
  {
    title: 'Conteúdo no ar',
    body: 'Reels curtos, vídeos de autoridade e carrosséis publicados. Páginas e checkout do Kit em construção. A skill do Perfil Contratável entra em desenvolvimento.',
    pos: 'O lado da marca vira a linha editorial principal.',
  },
  {
    title: 'O Kit abre no perpétuo',
    body: 'Kit Primeiro Contrato e order bump vendendo. Distribuição dos melhores conteúdos e remarketing do Kit para o público aquecido.',
    pos: 'O Kit é a tese em forma de produto: o primeiro contrato.',
  },
  {
    title: 'Primeiros números',
    body: 'Painel de resultados no ar. Custo por venda lido toda semana, com troca de criativos e testes de página.',
    pos: 'Os conteúdos que mais engajam mostram a dor mais forte do público.',
  },
  {
    title: 'Upsell ligado',
    body: 'Perfil Contratável oferecido logo depois da compra do Kit. A aula de uso da skill acontece ao vivo com a primeira turma e fica gravada. Segunda gravação em lote.',
    pos: 'Quem comprou o Kit começa a preparar o perfil para ser contratado.',
  },
  {
    title: 'Desenho do Programa',
    body: 'Estrutura dos 6 encontros e oferta do Programa. Planejamento do lançamento: calendário, metas e divisão da verba.',
    pos: 'As dúvidas de quem comprou o Kit viram tema dos encontros.',
  },
  {
    title: 'Aquecimento',
    body: 'Conteúdo de aquecimento com tráfego para quem ainda não conhece você. O perpétuo segue vendendo em paralelo.',
    pos: 'Autoridade em público: o que a marca olha, quanto cobrar, como fechar.',
  },
  {
    title: 'Captação abre',
    body: 'Página de inscrição do evento e campanhas de captação no ar. Grupos de WhatsApp e e-mails de confirmação ligados.',
    pos: 'A promessa do evento sai da tese.',
  },
  {
    title: 'Captação a pleno',
    body: 'Inscritos entrando no grupo e na lista. Terceira gravação em lote, com os convites do evento.',
    pos: 'Bastidores dos eventos e das conversas com marcas viram prova.',
  },
  {
    title: 'Roteiro do evento',
    body: 'Roteiro e narrativa dos 3 dias. Página de vendas e checkout do Programa prontos e testados.',
    pos: 'Cada dia do evento apresenta uma parte do caminho até o contrato.',
  },
  {
    title: 'Reta final da captação',
    body: 'Lembretes, remarketing e conteúdo de antecipação no grupo.',
    pos: 'Por que você, e por que agora.',
  },
  {
    title: 'Véspera do evento',
    body: 'Ensaio, revisão das páginas e da transmissão. Sequência de carrinho por e-mail e WhatsApp programada.',
    pos: 'O público chega ao evento sabendo quem você é.',
  },
  {
    title: 'Evento e carrinho',
    body: 'Três dias ao vivo, carrinho aberto no terceiro. Sequência de carrinho até o fechamento e debrief. O segundo ciclo começa com os números do primeiro.',
    pos: 'O método no palco. A turma fundadora vira prova para a próxima.',
  },
];

/* ---------- Posicionamento ---------- */
export const posDefs = [
  {
    name: 'Tese',
    text: 'Influência que vira contrato. O perfil fala com o criador que quer ser pago pela influência que já tem.',
    ask: 'O que o seu público quer? O primeiro contrato pago.',
  },
  {
    name: 'Ouro',
    text: 'Você está dos dois lados da mesa. Sabe o que a marca procura antes de contratar e o que o criador precisa mostrar para ser chamado.',
    ask: 'Quase todo curso de influência é dado por criador, que só conhece um desses lados.',
  },
  {
    name: 'Mecanismo',
    text: 'O Ciclo do Lucro: conteúdo em volume, uma escada de produtos vendendo todos os dias e um lançamento a cada 90 dias.',
    ask: 'É o caminho que transforma a autoridade em venda.',
  },
];

export const posThread = [
  { phase: 'Semanas 1 e 2', title: 'Bio, destaques e linhas editoriais', origin: true },
  { phase: 'Do primeiro dia ao fim', title: 'Reels, vídeos de autoridade e carrosséis' },
  { phase: 'A partir da semana 3', title: 'O Kit Primeiro Contrato no perpétuo' },
  { phase: 'Semanas 7 a 12', title: 'Aquecimento e promessa do evento' },
  { phase: 'Por volta do dia 90', title: 'O Programa no palco' },
];
