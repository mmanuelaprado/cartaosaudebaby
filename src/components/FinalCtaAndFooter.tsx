import React from 'react';
import { Instagram, MessageCircle, Smartphone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { IllustratedWallpaper } from './IllustratedWallpaper';
import { BRAND_CONTACT, buildWhatsAppUrl, NAV_LINKS } from '../data/siteContent';

export const FinalCtaAndFooter: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Quero contratar meu Cartão Saúde Baby por R$ 79,90/ano.'
  );

  return (
    <>
      {/* Final Conversion Callout */}
      <section
        id="contato"
        className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#FCEFF7] via-[#F2E7FE] to-[#E8D8FC]"
      >
        <IllustratedWallpaper variant="soft" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/25 bg-gradient-to-br from-[#481284] via-[#6B21A8] to-[#8B2FC9] text-white saude-shadow-deep">
            <IllustratedWallpaper variant="deep" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-[#FF85C4] mb-3">
                Pronto para cuidar com mais economia?
              </p>
              <h2
                className="font-display font-extrabold tracking-tight text-white text-balance"
                style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
              >
                Adquira seu Cartão Saúde Baby 100% virtual pelo WhatsApp
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#EFE5FF] leading-relaxed">
                Descontos de até <strong className="font-bold text-white">50%</strong> na rede
                credenciada por apenas{' '}
                <strong className="font-bold text-[#FF85C4] tabular-nums">
                  {BRAND_CONTACT.annualPrice} por ano
                </strong>{' '}
                ({BRAND_CONTACT.annualPriceNote}). Sem mensalidades ao longo do ano.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-colors duration-150 shadow-xl shadow-[#240644]/35 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>QUERO MEU CARTÃO</span>
                </a>

                <a
                  href={BRAND_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white border border-white/25 bg-white/12 hover:bg-white/20 backdrop-blur-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Seguir {BRAND_CONTACT.instagramHandle}</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#E5D4FF]">
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#7CE8DC]" aria-hidden="true" />
                  Cartão 100% virtual
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">WhatsApp: {BRAND_CONTACT.whatsappDisplay}</span>
                <span aria-hidden="true">·</span>
                <span>Pagamento anual único</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Royal Purple Institutional Footer */}
      <footer className="bg-[#360C63] text-white border-t border-white/15 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-2xl shadow-sm">
                <BrandLogo compact />
              </div>
              <p className="text-sm text-[#E5D4FF] max-w-sm leading-relaxed">
                Cartão de descontos pediátrico e infantil 100% virtual para tornar consultas e
                terapias mais acessíveis às famílias.
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-display font-bold text-sm text-white mb-3">Navegação</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#E5D4FF]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-[#FF85C4] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h3 className="font-display font-bold text-sm text-white">Canais oficiais</h3>
              <div className="space-y-2.5 text-sm">
                <a
                  href={BRAND_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E5D4FF] hover:text-white transition-colors tabular-nums"
                >
                  <MessageCircle className="w-4 h-4 text-[#7CE8DC] shrink-0" aria-hidden="true" />
                  <span>{BRAND_CONTACT.whatsappDisplay}</span>
                </a>
                <a
                  href={BRAND_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E5D4FF] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#FF85C4] shrink-0" aria-hidden="true" />
                  <span>{BRAND_CONTACT.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D3BDF2] leading-relaxed">
            <p className="max-w-3xl">
              Aviso legal e privacidade: O Cartão Saúde Baby é um cartão de descontos pediátrico e
              infantil. Não é plano de saúde, não garante cobertura assistencial e não oferece
              atendimento gratuito. Não coletamos nem armazenamos CPF ou dados pessoais de crianças
              neste site.
            </p>
            <p className="shrink-0 text-white/80">
              © {new Date().getFullYear()} Cartão Saúde Baby
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
