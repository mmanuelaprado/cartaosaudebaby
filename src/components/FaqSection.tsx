import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteContent';
import { IllustratedWallpaper } from './IllustratedWallpaper';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#521491] via-[#6B21A8] to-[#7B2CBF]"
    >
      <IllustratedWallpaper variant="deep" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#FF85C4] mb-3">Perguntas frequentes</p>
          <h2
            className="font-display font-extrabold tracking-tight text-white text-balance"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Dúvidas comuns sobre o Cartão Saúde Baby
          </h2>
          <p className="mt-3 text-base text-[#EFE5FF]">
            Respostas diretas e transparentes para você decidir com segurança.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/25 bg-white p-5 sm:p-8 divide-y divide-[#E3D6F7] saude-shadow-deep">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-4 sm:py-5 text-left flex items-center justify-between gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF] rounded-xl"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#241438] group-hover:text-[#E62E8A] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7B2CBF] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E62E8A]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-8">
                    <p className="text-sm sm:text-base text-[#483562] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
