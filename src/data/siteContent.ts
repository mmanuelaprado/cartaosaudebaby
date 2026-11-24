import type { FAQItem, SpecialtyItem } from '../types/clinic';

export const BRAND_CONTACT = {
  brandName: 'Cartão Saúde Baby',
  whatsappUrl: 'https://wa.me/5571996463245',
  whatsappDisplay: '+55 71 99646-3245',
  instagramUrl: 'https://www.instagram.com/cartaosaudebaby/',
  instagramHandle: '@cartaosaudebaby',
  annualPrice: 'R$ 79,90',
  annualPriceNote: 'pagamento anual único',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return BRAND_CONTACT.whatsappUrl;
  }
  return `${BRAND_CONTACT.whatsappUrl}?text=${encodeURIComponent(customMessage)}`;
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Rede credenciada', href: '#rede-credenciada' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
] as const;

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'pediatria',
    name: 'Pediatria',
    description:
      'Acompanhamento do crescimento, consultas de rotina e orientações para cada fase da infância.',
    accentColor: 'pink',
  },
  {
    id: 'psicologia',
    name: 'Psicologia',
    description:
      'Escuta acolhedora e suporte emocional infantil e familiar em ambientes preparados para crianças.',
    accentColor: 'purple',
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiologia',
    description:
      'Avaliação e estímulo da fala, linguagem, comunicação alternativa e desenvolvimento auditivo.',
    accentColor: 'teal',
  },
  {
    id: 'terapia-ocupacional',
    name: 'Terapia Ocupacional',
    description:
      'Apoio à autonomia cotidiana, coordenação motora, integração sensorial e habilidades práticas.',
    accentColor: 'orange',
  },
  {
    id: 'psicopedagogia',
    name: 'Psicopedagogia',
    description:
      'Acompanhamento dos processos de aprendizagem, atenção e adaptação escolar com respeito ao ritmo infantil.',
    accentColor: 'pink',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    description:
      'Cuidados motores e respiratórios pediátricos voltados ao movimento seguro e bem-estar.',
    accentColor: 'teal',
  },
  {
    id: 'outras',
    name: 'Outras especialidades',
    description:
      'Nutrição infantil, acompanhamento multidisciplinar e demais atendimentos conforme a expansão da rede.',
    accentColor: 'purple',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Solicite pelo WhatsApp',
    description:
      'Você tira suas dúvidas com nossa equipe e realiza a adesão com pagamento anual único de R$ 79,90.',
    accentColor: 'pink' as const,
  },
  {
    number: '02',
    title: 'Receba seu cartão 100% virtual',
    description:
      'Sem espera por entregas físicas ou burocracia. Seu cartão digital fica pronto para uso direto no celular.',
    accentColor: 'purple' as const,
  },
  {
    number: '03',
    title: 'Consulte a rede e economize até 50%',
    description:
      'Escolha o profissional ou clínica credenciada disponível na sua região e apresente o cartão no atendimento.',
    accentColor: 'teal' as const,
  },
];

export const CARD_BENEFITS = [
  {
    title: 'Descontos de até 50%',
    description:
      'Economia real em consultas e terapias infantis na rede credenciada, paga diretamente à clínica.',
    accentColor: 'pink' as const,
  },
  {
    title: 'Cartão 100% virtual',
    description:
      'Praticidade no dia a dia: acesse e apresente diretamente pelo celular na hora da consulta.',
    accentColor: 'teal' as const,
  },
  {
    title: 'Anuidade única de R$ 79,90',
    description:
      'Um único valor por ano, sem mensalidades surpresas e sem cobrança de fidelidade.',
    accentColor: 'orange' as const,
  },
  {
    title: 'Atendimento humano e direto',
    description:
      'Canal oficial pelo WhatsApp para orientar famílias na contratação e na consulta à rede parceira.',
    accentColor: 'purple' as const,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'nao-e-plano',
    question: 'O Cartão Saúde Baby é um plano de saúde?',
    answer:
      'Não. O Cartão Saúde Baby é um cartão de descontos pediátrico e infantil. Ele não é plano de saúde, não oferece cobertura assistencial, reembolso ou atendimento gratuito. O pagamento das consultas e terapias com desconto (de até 50%, conforme cada parceiro) é feito diretamente à clínica ou profissional credenciado.',
  },
  {
    id: 'valor-pagamento',
    question: 'Qual é o valor e como funciona a cobrança?',
    answer:
      'O valor é de R$ 79,90 por ano, em pagamento anual único. Não há cobrança de mensalidades ao longo do ano. Você só paga pelos atendimentos que realizar diretamente nos locais credenciados, já com o desconto aplicado.',
  },
  {
    id: 'cartao-virtual',
    question: 'Vou receber um cartão físico pelos Correios?',
    answer:
      'Não. O Cartão Saúde Baby é 100% virtual, pensado para facilitar a rotina das famílias. Após a contratação orientada pelo nosso WhatsApp, você utiliza sua identificação digital diretamente pelo celular.',
  },
  {
    id: 'especialidades-disponibilidade',
    question: 'Todas as especialidades estão disponíveis em qualquer cidade?',
    answer:
      'A disponibilidade de especialidades (como pediatria, psicologia, fonoaudiologia, terapia ocupacional, psicopedagogia, fisioterapia e outras), bem como os percentuais de desconto de até 50%, depende da rede credenciada ativa em cada cidade ou região. Nossa equipe informa os parceiros disponíveis pelo WhatsApp.',
  },
  {
    id: 'neurodivergencia',
    question: 'O cartão é indicado apenas para crianças autistas ou neurodivergentes?',
    answer:
      'Não. O Cartão Saúde Baby atende todas as crianças, com ou sem deficiência. Ao mesmo tempo, temos um cuidado especial no acolhimento às famílias de crianças autistas e neurodivergentes, buscando ampliar parcerias em terapias infantis multidisciplinares.',
  },
  {
    id: 'como-contratar',
    question: 'Como faço para adquirir o cartão ou tirar dúvidas antes?',
    answer:
      'Todo o atendimento inicial e a orientação de contratação acontecem diretamente pelo nosso WhatsApp oficial (+55 71 99646-3245). Basta clicar em "QUERO MEU CARTÃO" para conversar com nossa equipe.',
  },
  {
    id: 'privacidade-dados',
    question: 'Preciso informar CPF ou dados da criança neste site?',
    answer:
      'Não. Este site não coleta nem armazena CPF ou dados pessoais de crianças. Quando você decide contratar, o atendimento é conduzido diretamente pelo canal oficial de WhatsApp, com total cuidado à privacidade da sua família.',
  },
];
