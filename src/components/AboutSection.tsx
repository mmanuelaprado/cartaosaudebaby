import React from 'react';
import { ShieldCheck, Smartphone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { IllustratedWallpaper } from './IllustratedWallpaper';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="apresentacao"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#F4ECFF] via-[#ECE0FD] to-[#FBEFF8]"
    >
      <IllustratedWallpaper variant="soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Consultation Photo + Purple Virtual Card Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-[2rem] overflow-hidden border border-white/80 bg-white saude-shadow-soft">
              <SafeImage
                src="/src/assets/images/about_pediatric_consultation_1795532516452.jpg"
                alt="Pediatra conversando com uma criança sorridente e sua mãe em consultório acolhedor e iluminado"
                fallbackTitle="Atendimento pediátrico acolhedor"
                className="w-full h-[280px] sm:h-[340px] object-cover"
              />
            </div>

            {/* Redesigned Purple Digital Card Preview (No fake CPF or child data) */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#481284] via-[#6B21A8] to-[#8B2FC9] text-white p-6 sm:p-7 saude-shadow-deep border border-white/20">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/15">
                <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-2xl shadow-sm">
                  <BrandLogo compact />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7CE8DC]">
                  <Smartphone className="w-4 h-4" aria-hidden="true" />
                  <span>Cartão 100% virtual</span>
                </span>
              </div>

              <div className="pt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[#DFC8FF]">Modalidade</p>
                  <p className="mt-0.5 font-display font-semibold text-base sm:text-lg text-white">
                    Cartão de Descontos Pediátrico e Infantil
                  </p>
                  <p className="mt-1 text-xs text-[#EFE5FF]">
                    Apresente no atendimento para descontos de até 50% na rede credenciada
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-xs text-[#DFC8FF]">Anuidade única</p>
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#FF85C4] tabular-nums">
                    R$ 79,90
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mt-5 h-1.5 w-full rounded-full bg-gradient-to-r from-[#E62E8A] via-[#F97316] via-[#14B8A6] to-[#DDD6FE]"
              />
            </div>
          </div>

          {/* Right: Editorial Copy & Transparency */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold text-[#7B2CBF] mb-3">
              Conheça o Cartão Saúde Baby
            </p>
            <h2
              className="font-display font-extrabold tracking-tight text-[#241438] text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Acesso mais leve a consultas e terapias infantis durante todo o ano
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#483562] leading-relaxed">
              <p>
                O <strong className="font-semibold text-[#241438]">Cartão Saúde Baby</strong> nasceu
                para apoiar pais e responsáveis que buscam cuidar da saúde e do desenvolvimento das
                crianças com mais previsibilidade no orçamento.
              </p>
              <p>
                Com uma única contribuição anual de{' '}
                <strong className="font-semibold text-[#241438] tabular-nums">R$ 79,90</strong>, sua
                família passa a contar com um cartão 100% virtual que oferece{' '}
                <strong className="font-semibold text-[#241438]">descontos de até 50%</strong> em
                clínicas e profissionais credenciados.
              </p>
            </div>

            {/* Clear Non-Insurance Disclaimer */}
            <div className="mt-8 rounded-3xl border border-[#E3D6F7] bg-white/95 p-5 sm:p-6 flex items-start gap-4 saude-shadow-soft">
              <div className="w-11 h-11 rounded-2xl bg-[#7B2CBF]/12 text-[#7B2CBF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#241438]">
                  Transparência para a sua família
                </h3>
                <p className="mt-1 text-sm text-[#483562] leading-relaxed">
                  O Cartão Saúde Baby é um <strong>cartão de descontos</strong> — não é plano de
                  saúde, não garante cobertura assistencial e não oferece atendimento gratuito. Você
                  paga diretamente ao profissional ou clínica credenciada, já com o desconto
                  aplicado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
