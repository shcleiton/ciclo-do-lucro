// Conteúdo da proposta para a MO2.
// Regras de escrita: sem travessão, sem "não é X, é Y", sem emoji, sem números inventados.

export type Stage = {
  id: string;
  name: string;
  term: string;
  line: string;
  target: { tab: string } | { section: string };
};

// O ciclo da rede: cada campanha vira prova e atrai mais creators.
export const stages: Stage[] = [
  {
    id: 'posicionar',
    name: 'Aprender',
    term: 'Perfil da Mírian',
    line: 'O creator aprende com a Mírian como transformar influência em contrato.',
    target: { section: 'posicionamento' },
  },
  {
    id: 'cadastro',
    name: 'Cadastro',
    term: 'Com critério',
    line: 'O creator se cadastra na MO2. O sistema verifica seguidores reais, engajamento e atividade.',
    target: { tab: 'cadastro' },
  },
  {
    id: 'mapa',
    name: 'Mapa',
    term: 'Cidade, nicho e tamanho',
    line: 'Quem é aprovado entra no mapa da rede, sem nome, com cidade, nicho e faixa de seguidores.',
    target: { tab: 'site' },
  },
  {
    id: 'marca',
    name: 'Marca',
    term: 'Pedido pelo site',
    line: 'A marca filtra o que precisa no mapa e pede uma campanha direto pelo site.',
    target: { tab: 'site' },
  },
  {
    id: 'campanha',
    name: 'Campanha',
    term: 'A MO2 conecta',
    line: 'A MO2 monta a campanha com os creators certos da rede.',
    target: { section: 'papeis' },
  },
  {
    id: 'case',
    name: 'Case',
    term: 'Prova no perfil',
    line: 'A campanha vira case e depoimento no perfil da MO2, e atrai mais creators e mais marcas.',
    target: { tab: 'conteudo' },
  },
];

export const posDefs = [
  {
    name: 'A Mírian ensina',
    text: 'No perfil dela, o creator aprende como transformar influência em contrato: o que a marca olha, quanto cobrar, como fechar.',
    ask: 'Influência que vira contrato.',
  },
  {
    name: 'A MO2 conecta',
    text: 'Na MO2, o creator se cadastra, entra para a rede e recebe campanha. A marca encontra os creators certos.',
    ask: 'Onde o creator encontra campanha.',
  },
  {
    name: 'A história vira prova',
    text: 'Campanhas com Johnson’s, Hellmann’s e Sanofi e mais de 500 influenciadores em campanhas passam a aparecer como cases e depoimentos.',
    ask: 'Uma rede que já funciona, mostrada.',
  },
];

export const posThread = [
  { phase: 'Mês 1', title: 'Posicionamento, perfil e acervo organizado', origin: true },
  { phase: 'Mês 1', title: 'Site com mapa e cadastro no ar' },
  { phase: 'Desde o mês 1', title: 'Cases e depoimentos no perfil' },
  { phase: 'Todo mês', title: 'Novos creators aprovados no mapa' },
  { phase: 'Todo mês', title: 'Pedidos de marcas pelo site' },
];
