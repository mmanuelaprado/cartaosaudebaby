import React from 'react';
import {
  Activity,
  BookOpenCheck,
  Brain,
  Info,
  MessageSquareHeart,
  Puzzle,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { SPECIALTIES } from '../data/siteContent';
import type { SpecialtyKey } from '../types/clinic';
import { IllustratedWallpaper } from './IllustratedWallpaper';

const SPECIALTY_ICONS: Record<SpecialtyKey, React.FC<{ className?: string }>> = {
  pediatria: Stethoscope,
  psicologia: Brain,
  fonoaudiologia: MessageSquareHeart,
  'terapia-ocupacional': Puzzle,
  psicopedagogia: BookOpenCheck,
  fisioterapia: Activity,
  outras: Sparkles,
};

const ACCENT_STYLES = {
  pink: 'bg-[#E62E8A]/12 text-[#E62E8A]',
  purple: 'bg-[#7B2CBF]/12 text-[#7B2CBF]',
  teal: 'bg-[#0D9488]/12 text-[#0D9488]',
  orange: 'bg-[#F97316]/14 text-[#F97316]',
} as const;

export const SpecialtiesSection: React.FC = () => {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#FDF0F7] via-[#F6E9FE] to-[#EDE2FD]"
    >
      <IllustratedWallpaper variant="soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#E62E8A] mb-3">
            Especialidades contempladas
          </p>
          <h2
            className="font-display font-extrabold tracking-tight text-[#241438] text-balance"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Cuidado integral para cada fase do desenvolvimento infantil
          </h2>
          <p className="mt-4 text-base text-[#483562] leading-relaxed">
            O Cartão Saúde Baby busca reunir clínicas e especialistas voltados à saúde física,
            emocional e ao desenvolvimento das crianças, com descontos de até 50%.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALTIES.map((item, idx) => {
            const Icon = SPECIALTY_ICONS[item.id];
            const isLastWide = idx === SPECIALTIES.length - 1;

            return (
              <article
                key={item.id}
                className={`rounded-3xl border border-[#E3D6F7] bg-white/95 p-6 transition-transform duration-150 hover:-translate-y-0.5 saude-shadow-soft ${
                  isLastWide ? 'sm:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${ACCENT_STYLES[item.accentColor]}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#241438]">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-[#483562] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Network Availability Notice */}
        <div className="mt-8 rounded-3xl border border-[#7B2CBF]/20 bg-white/95 p-5 sm:p-6 flex items-start gap-3.5 saude-shadow-soft">
          <Info className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-[#483562] leading-relaxed">
            <strong className="font-bold text-[#241438]">Aviso importante:</strong> A
            disponibilidade de cada especialidade, profissional e percentual de desconto (de até 50%)
            depende diretamente da{' '}
            <a
              href="#rede-credenciada"
              className="font-semibold text-[#E62E8A] underline underline-offset-4 hover:text-[#C81E73]"
            >
              rede credenciada
            </a>{' '}
            ativa na sua cidade ou região.
          </p>
        </div>
      </div>
    </section>
  );
};
