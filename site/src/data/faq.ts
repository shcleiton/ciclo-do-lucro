// Perguntas frequentes sobre o Ciclo do Lucro. Cada resposta abre com a resposta direta, em uma frase,
// para que buscadores e assistentes de IA consigam citar o trecho sozinho.
// Regras de escrita do site valem aqui: sem travessão, sem emoji, sem número que não esteja no briefing.

export type Faq = { q: string; a: string; link?: { href: string; label: string } };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: 'metodo',
    title: 'Sobre o método',
    items: [
      {
        q: 'O que é o Ciclo do Lucro?',
        a: 'O Ciclo do Lucro é o método da CR CODE para lançar um infoproduto ou uma mentoria em cerca de 60 dias. Ele organiza o lançamento em 7 etapas (concepção, posicionamento, aquecimento, captação, evento, venda e retenção), agrupadas em 5 fases de trabalho e 146 entregas. Foi criado por Cleiton Ramos a partir de mais de 40 lançamentos.',
        link: { href: '#ciclo', label: 'Ver as sete etapas' },
      },
      {
        q: 'Quanto tempo dura um lançamento com o Ciclo do Lucro?',
        a: 'Cerca de 60 dias, da primeira reunião ao primeiro encontro da turma. No calendário de referência são 63 dias: 10 de concepção, setup e aquecimento a partir do dia 11, captação de 21 dias, 3 dias de evento, 6 de carrinho aberto e 5 de onboarding.',
        link: { href: '#calendario', label: 'Ver o calendário dia a dia' },
      },
      {
        q: 'Quais são as etapas de um lançamento de infoproduto?',
        a: 'No Ciclo do Lucro são sete: concepção (7 a 10 dias), posicionamento (do dia 11 ao fim), aquecimento (do dia 11 ao evento), captação (14, 21 ou 28 dias), evento (3 aulas ao vivo), venda (5 a 7 dias de carrinho) e retenção (depois do carrinho). Cada etapa alimenta a seguinte, e quem entrou vira prova para a próxima turma.',
      },
      {
        q: 'Para que tipo de produto o método serve?',
        a: 'Para cursos online, infoprodutos e mentorias vendidos por um especialista que tem conhecimento próprio e disposição para aparecer. O método depende da presença do especialista nas reuniões de extração, nas gravações e nas aulas ao vivo.',
      },
      {
        q: 'O que é o TAP no lançamento?',
        a: 'TAP é o Termo de Abertura do Projeto, o documento que fecha a fase de concepção entre o dia 7 e o dia 10. Ele reúne avatar, oferta, tese de posicionamento, Big Idea, mapa do funil, metas em 3 níveis e orçamento de mídia. Nada é produzido antes do TAP aprovado.',
        link: { href: '#fases', label: 'Ver a fase de concepção' },
      },
    ],
  },
  {
    id: 'etapas',
    title: 'Sobre as etapas',
    items: [
      {
        q: 'O que é o aquecimento e por que ele importa?',
        a: 'Aquecimento é a etapa em que o conteúdo do especialista é distribuído com tráfego pago para quem ainda não o conhece, do dia 11 até o evento. Assim o público chega às aulas sabendo quem ele é. Numa escola de pós-graduação, acrescentar o aquecimento levou um lançamento de 33 para 116 vendas, com a mesma oferta, o mesmo preço e os mesmos professores.',
        link: { href: 'pesquisa/anatomia-de-um-lancamento/', label: 'Ver o caso na pesquisa' },
      },
      {
        q: 'Quanto tempo deve durar a captação de um lançamento?',
        a: 'No Ciclo do Lucro, a captação dura 14, 21 ou 28 dias, conforme a estratégia, e roda em paralelo ao aquecimento. Os anúncios levam para a inscrição no evento gratuito e cada inscrito entra no grupo de WhatsApp e na lista de e-mail.',
      },
      {
        q: 'Como funciona o evento de lançamento?',
        a: 'São 3 aulas ao vivo. A aula 1 abre o problema, a aula 2 mostra o caminho e a aula 3 prepara a decisão. Depois vem a pré-venda e a abertura do carrinho com o pitch.',
      },
      {
        q: 'Quanto tempo o carrinho fica aberto?',
        a: 'De 5 a 7 dias. Nesse período entram pitch ao vivo, página de vendas, WhatsApp, e-mail, remarketing e atendimento até a última chamada.',
      },
      {
        q: 'O que é posicionamento do especialista?',
        a: 'Posicionamento é a resposta para por que alguém paga para ouvir esse especialista, e não outro. No método ele tem três partes: categoria (o mercado que ele pode liderar), ouro (o que só ele sabe e viu de perto) e mecanismo único (o método com nome próprio). Ele começa no dia 11 e guia cada anúncio, página, aula e mensagem.',
        link: { href: '#posicionamento', label: 'Ver como o posicionamento atravessa o projeto' },
      },
      {
        q: 'O que acontece depois que o carrinho fecha?',
        a: 'Começa a retenção: onboarding, acompanhamento dos primeiros acessos, pedidos de reembolso, coleta de resultados e depoimentos para a próxima turma, debriefing e definição da próxima entrada, por nova turma ou funil perpétuo.',
      },
    ],
  },
  {
    id: 'operacao',
    title: 'Sobre a operação',
    items: [
      {
        q: 'O que o especialista precisa fazer?',
        a: 'O especialista participa das reuniões de extração, grava os vídeos, dá as aulas e o pitch, aprova as peças e entrega o produto. A frente Expert soma 18 das 146 entregas. O restante é operação da CR CODE.',
        link: { href: '#papeis', label: 'Ver quem faz o quê' },
      },
      {
        q: 'Quem paga a verba de anúncios?',
        a: 'O cliente. A verba de mídia e as assinaturas das ferramentas são pagas direto às plataformas. A CR CODE opera as campanhas.',
      },
      {
        q: 'Quais ferramentas um lançamento precisa?',
        a: 'Onze camadas técnicas: domínio, e-mail autenticado (SPF, DKIM e DMARC), site institucional, páginas do lançamento, checkout com Pix e cartão parcelado (Hotmart, Eduzz ou Kiwify), Business Manager, rastreamento com pixel e API de Conversões, grupos de WhatsApp, transmissão ao vivo, área de membros e CRM.',
        link: { href: '#stack', label: 'Ver a base técnica' },
      },
      {
        q: 'Quais números são acompanhados durante o lançamento?',
        a: 'Custo por lead, conversão da página de captura, entrada e atividade nos grupos de WhatsApp, presença ao vivo, conversão da venda, vendas por dia de carrinho e custo por aluno. Os números são lidos todo dia contra as metas do TAP, e custo por lead acima do limite pede ajuste no mesmo dia.',
      },
      {
        q: 'Quantas entregas tem um lançamento?',
        a: '146 entregas em 9 frentes: copy (40), vídeos (22), tráfego (21), expert (18), design (16), páginas (11), e-mails e WhatsApp (7), produto (7) e infraestrutura (4).',
        link: { href: 'pesquisa/anatomia-de-um-lancamento/', label: 'Ver a análise das entregas' },
      },
      {
        q: 'Como começar um lançamento com a CR CODE?',
        a: 'Pelo WhatsApp do Cleiton Ramos. Conte o que você quer lançar e a conversa começa pela concepção.',
      },
    ],
  },
];

export const faqAll = faqGroups.flatMap((g) => g.items);
// Seleção curta para a página inicial.
export const faqHome = [0, 1, 5, 11, 12, 13].map((i) => faqAll[i]);
