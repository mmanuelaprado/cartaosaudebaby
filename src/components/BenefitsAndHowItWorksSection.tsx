import React from 'react';
import { CalendarCheck2, HeartHandshake, MessageCircle, Percent, Smartphone } from 'lucide-react';
import { CARD_BENEFITS, HOW_IT_WORKS_STEPS, buildWhatsAppUrl } from '../data/siteContent';
import { IllustratedWallpaper } from './IllustratedWallpaper';
import { SafeImage } from './SafeImage';

const STEP_ACCENTS = {
  pink: 'text-white bg-[#E62E8A]',
  purple: 'text-white bg-[#7B2CBF]',
  teal: 'text-white bg-[#0D9488]',
} as const;

const BENEFIT_ICONS = [Percent, Smartphone, CalendarCheck2, HeartHandshake];

const BENEFIT_ACCENTS = {
  pink: 'text-[#E62E8A] bg-[#E62E8A]/12',
  teal: 'text-[#0D9488] bg-[#0D9488]/12',
  orange: 'text-[#F97316] bg-[#F97316]/14',
  purple: 'text-[#7B2CBF] bg-[#7B2CBF]/12',
} as const;

export const BenefitsAndHowItWorksSection: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de saber como funciona a contratação do Cartão Saúde Baby.'
  );

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#521491] via-[#6B21A8] to-[#7B2CBF] text-white"
    >
      <IllustratedWallpaper variant="deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + 3-Step Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#FF85C4] mb-3">
              Como funciona e benefícios
            </p>
            <h2
              className="font-display font-extrabold tracking-tight text-white text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Simples de contratar, prático de usar no dia a dia
            </h2>
            <p className="mt-4 text-base text-[#EFE5FF] leading-relaxed max-w-2xl">
              Sem processos longos ou contratos complexos. Tudo começa pelo atendimento direto no
              WhatsApp para você ativar seu cartão virtual com tranquilidade.
            </p>

            <div className="mt-8 space-y-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl bg-white/96 text-[#241438] p-5 flex items-start gap-4 sm:gap-5 saude-shadow-deep"
                >
                  <span
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-display font-bold text-sm tabular-nums shrink-0 ${STEP_ACCENTS[step.accentColor]}`}
                  >
                    {step.number}.
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#241438]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#483562] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-colors duration-150 shadow-lg shadow-[#240644]/30 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Tirar dúvidas pelo WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-[2rem] overflow-hidden border-2 border-white/25 bg-[#481284] saude-shadow-deep">
              <SafeImage
                src="/src/assets/images/family_virtual_card_moment_1795532517471.jpg"
                alt="Mãe sorrindo com celular na mão ao lado da filha lendo um livro ilustrado no sofá de casa"
                fallbackTitle="Praticidade no celular da família"
                className="w-full h-[280px] sm:h-[360px] lg:h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARD_BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/80 bg-white p-6 flex flex-col justify-between saude-shadow-deep"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${BENEFIT_ACCENTS[benefit.accentColor]}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#241438]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#483562] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
