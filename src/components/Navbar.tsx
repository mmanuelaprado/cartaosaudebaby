import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppUrl, NAV_LINKS } from '../data/siteContent';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de saber mais e adquirir o Cartão Saúde Baby.'
  );

  return (
    <header className="sticky top-0 z-40 bg-[#481284]/92 backdrop-blur-md border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[74px] flex items-center justify-between gap-8">
        {/* Zone 1: Unaltered original BrandLogo inside crisp white rounded frame */}
        <a
          href="#inicio"
          aria-label="Cartão Saúde Baby - Ir para o início"
          className="inline-flex items-center bg-white px-3 py-1.5 rounded-2xl shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white shrink-0"
        >
          <BrandLogo compact />
        </a>

        {/* Zone 2: White single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/90"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-white transition-colors duration-150 underline-offset-8 hover:underline decoration-[#FF85C4] decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary pink CTA + Mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-md shadow-[#240644]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Quero meu cartão
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#481284] border-b border-white/15 px-4 py-5 space-y-2"
        >
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-xl text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/15">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-colors shadow-md"
            >
              QUERO MEU CARTÃO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
