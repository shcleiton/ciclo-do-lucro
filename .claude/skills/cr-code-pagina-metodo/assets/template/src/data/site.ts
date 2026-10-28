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
  title: 'Ciclo do Lucro · CR CODE',
  description:
    'Cerca de 60 dias, 5 fases e 146 entregas para vender um produto ou mentoria. Com o posicionamento do especialista atravessando tudo. Este é o Ciclo do Lucro, o método da CR CODE.',
};
