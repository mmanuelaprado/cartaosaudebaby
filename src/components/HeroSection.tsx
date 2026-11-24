import React from 'react';
import { ArrowRight, MessageCircle, Smartphone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { IllustratedWallpaper } from './IllustratedWallpaper';
import { SafeImage } from './SafeImage';
import { buildWhatsAppUrl } from '../data/siteContent';

export const HeroSection: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Quero adquirir o Cartão Saúde Baby por R$ 79,90 por ano e saber mais sobre os descontos.'
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#3D0E70] via-[#5E17A6] to-[#7B2CBF] text-white pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      <IllustratedWallpaper variant="deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Logo em destaque no Hero */}
            <div className="mb-6">
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-2xl shadow-lg shadow-[#240644]/25">
                <BrandLogo />
              </div>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-white text-balance leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)' }}
            >
              Cuidar de quem você mais ama ficou mais acessível!
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#EFE5FF] leading-relaxed max-w-xl">
              Mais economia e cuidado para a saúde infantil, com descontos de até{' '}
              <strong className="font-bold text-white">50%</strong> na nossa rede credenciada.
            </p>

            {/* Destaque visual para R$ 79,90 por ano */}
            <div className="mt-6 rounded-2xl bg-white/12 backdrop-blur-md border border-white/20 p-4 sm:p-5 max-w-lg">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-[#E5D4FF]">
                    Pagamento anual único · Cartão 100% virtual
                  </p>
                  <p className="mt-0.5 font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums">
                    R$ 79,90 <span className="text-base font-semibold text-[#F4B6D7]">por ano</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7CE8DC]">
                  <Smartphone className="w-4 h-4" aria-hidden="true" />
                  Uso direto no celular
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-all duration-150 shadow-xl shadow-[#240644]/35 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>QUERO MEU CARTÃO</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Ver como funciona</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Natural Mother & Child Photo integrated into Purple Illustrated Layout */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Soft decorative organic halo behind photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#E62E8A]/45 via-[#14B8A6]/30 to-[#F97316]/35 blur-xl opacity-75"
              />
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/25 bg-[#481284] saude-shadow-deep">
                <div
                  aria-hidden="true"
                  className="h-2 w-full bg-gradient-to-r from-[#E62E8A] via-[#F97316] via-[#14B8A6] to-[#C084FC]"
                />
                <SafeImage
                  src="/src/assets/images/hero_mother_child_warm_1795536847176.jpg"
                  alt="Mãe brasileira sorrindo e abraçando seu filho pequeno em uma sala clara e acolhedora"
                  fallbackTitle="Cuidado e carinho para toda a infância"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column translucent violet highlight bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
          <div className="p-5 sm:p-6">
            <p className="font-display font-bold text-xl text-[#FF85C4] tabular-nums">Até 50%</p>
            <p className="mt-1 text-sm text-[#EFE5FF]">
              de desconto em consultas e terapias na rede credenciada
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-display font-bold text-xl text-white tabular-nums">R$ 79,90/ano</p>
            <p className="mt-1 text-sm text-[#EFE5FF]">
              pagamento anual único, sem mensalidades ao longo do ano
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-display font-bold text-xl text-[#7CE8DC]">100% virtual</p>
            <p className="mt-1 text-sm text-[#EFE5FF]">
              cartão digital prático para apresentar direto no celular
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-display font-bold text-xl text-[#FDBA74]">Acolhimento real</p>
            <p className="mt-1 text-sm text-[#EFE5FF]">
              para todas as crianças, com respeito e cuidado humano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
