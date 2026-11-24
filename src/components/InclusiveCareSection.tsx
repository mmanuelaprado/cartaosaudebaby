import React from 'react';
import { Check, Heart, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteContent';
import { IllustratedWallpaper } from './IllustratedWallpaper';
import { SafeImage } from './SafeImage';

const INCLUSIVE_HIGHLIGHTS = [
  'Acolhimento para todas as crianças, com ou sem deficiência, sem restrições de público.',
  'Foco na ampliação da rede em terapias essenciais como fonoaudiologia, terapia ocupacional, psicologia e psicopedagogia.',
  'Atendimento humano pelo WhatsApp para ajudar sua família a encontrar parceiros disponíveis na região.',
];

export const InclusiveCareSection: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de conhecer o Cartão Saúde Baby e saber sobre terapias infantis e atendimento acolhedor.'
  );

  return (
    <section
      id="inclusao"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#481284] via-[#611CA8] to-[#7B2CBF]"
    >
      <IllustratedWallpaper variant="deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/25 bg-white/96 overflow-hidden saude-shadow-deep">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Respectful Inclusive Photography */}
            <div className="lg:col-span-6">
              <SafeImage
                src="/src/assets/images/inclusive_neurodiverse_child_1795532516773.jpg"
                alt="Crianças com e sem deficiência brincando juntas com brinquedos de madeira educativos ao lado de terapeuta e mãe sorridentes"
                fallbackTitle="Cuidado infantil inclusivo e respeitoso"
                className="w-full h-[300px] sm:h-[380px] lg:h-full object-cover"
              />
            </div>

            {/* Right: Warm Inclusive Communication */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] mb-3">
                <Heart className="w-4 h-4" aria-hidden="true" />
                <span>Cuidado inclusivo e neurodiversidade</span>
              </div>

              <h2
                className="font-display font-extrabold tracking-tight text-[#241438] text-balance"
                style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.25rem)' }}
              >
                Um olhar acolhedor para famílias de crianças autistas e neurodivergentes
              </h2>

              <p className="mt-4 text-base text-[#483562] leading-relaxed">
                Sabemos o quanto o acompanhamento contínuo faz diferença no desenvolvimento infantil.
                O <strong className="font-semibold text-[#241438]">Cartão Saúde Baby</strong> é
                aberto a todas as crianças — e nasce com um compromisso especial de caminhar ao lado
                das famílias neurodivergentes para tornar consultas e terapias mais acessíveis.
              </p>

              <ul className="mt-6 space-y-3">
                {INCLUSIVE_HIGHLIGHTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#483562]">
                    <span className="w-6 h-6 rounded-full bg-[#0D9488]/14 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs sm:text-sm text-[#6C5A85] leading-relaxed">
                A disponibilidade de profissionais e descontos (de até 50%) segue a rede credenciada
                ativa em cada localidade.
              </p>

              <div className="mt-7">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0D9488] hover:bg-[#0B7D73] transition-colors duration-150 shadow-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Conversar com nossa equipe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
