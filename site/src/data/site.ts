// Configuração única do site. Tudo que depende do Cleiton fica aqui, marcado com TODO.

// WhatsApp do Cleiton, só dígitos com DDI e DDD.
export const WHATSAPP_NUMBER = '5521982812061';
export const WHATSAPP_MESSAGE = 'Oi Cleiton, vi o Ciclo do Lucro e quero conversar sobre um lançamento.';
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// TODO: ID de medição do GA4 (ex.: G-XXXXXXXXXX). Vazio = GA4 desligado e nenhum banner de cookies.
export const GA4_ID = '';

// TODO: LinkedIn e e-mail do rodapé. Campos vazios não aparecem na página.
export const social = {
  instagram: 'https://www.instagram.com/cleitonramos.mkt/',
  linkedin: '',
  email: '',
};

export const meta = {
  title: 'Ciclo do Lucro: método de lançamento em 60 dias | CR CODE',
  description:
    'Ciclo do Lucro é o método da CR CODE para lançar infoproduto ou mentoria em cerca de 60 dias: 7 etapas, 5 fases e 146 entregas, do posicionamento à venda.',
};

// Endereço público. O canônico de cada página sai daqui, sempre com barra final.
export const ORIGIN = 'https://cleitonramos.com.br';
export const BASE_PATH = '/ciclodolucro/';
export const canonicalOf = (path = '') => `${ORIGIN}${BASE_PATH}${path.replace(/^\/|\/$/g, '')}${path ? '/' : ''}`;

// Datas de publicação e de revisão. Ao revisar o conteúdo de uma página, atualize o "modified" dela.
export const dates = {
  home: { published: '2026-10-28', modified: '2026-11-03' },
  faq: { published: '2026-11-03', modified: '2026-11-03' },
  pesquisa: { published: '2026-11-03', modified: '2026-11-03' },
  privacidade: { published: '2026-10-28', modified: '2026-11-03' },
};

// Quem assina o conteúdo. Fatos tirados de cleitonramos.com.br.
export const author = {
  name: 'Cleiton Ramos',
  role: 'Estrategista de lançamentos e fundador da CR CODE',
  bio: 'Cleiton Ramos já foi head de marketing e growth de uma empresa de educação. Ao longo da carreira, fez mais de 40 lançamentos de infoprodutos e montou dezenas de funis de vendas. Atende do Rio de Janeiro para o Brasil todo.',
  url: 'https://cleitonramos.com.br/',
  city: 'Rio de Janeiro',
  knowsAbout: ['Lançamento de infoprodutos', 'Funil de vendas', 'Tráfego pago', 'Posicionamento de especialistas', 'Marketing de crescimento'],
};

export const org = {
  name: 'CR CODE',
  url: 'https://cleitonramos.com.br/',
};
