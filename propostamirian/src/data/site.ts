// Configuração única da página. Tudo que depende do Cleiton fica aqui, marcado com TODO.

// WhatsApp do Cleiton, só dígitos com DDI e DDD.
export const WHATSAPP_NUMBER = '5521982812061';
export const WHATSAPP_MESSAGE = 'Oi Cleiton, li a proposta Influência que Vira Contrato e quero conversar.';
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Proposta comercial: sem GA4 e fora dos buscadores.
export const GA4_ID = '';

// TODO: LinkedIn e e-mail do rodapé. Campos vazios não aparecem na página.
export const social = {
  instagram: 'https://www.instagram.com/cleitonramos.mkt/',
  linkedin: '',
  email: '',
};

export const meta = {
  title: 'Influência que Vira Contrato · Proposta para Mírian Murata · CR CODE',
  description:
    'Proposta da CR CODE para Mírian Murata: posicionamento, conteúdo, uma escada de produtos digitais no perpétuo e o primeiro lançamento em cerca de 90 dias, com o Ciclo do Lucro.',
};
