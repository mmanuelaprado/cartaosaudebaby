import React from 'react';

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

/**
 * Identidade visual Cartão Saúde Baby
 * Preserva as quatro cores oficiais: rosa pink (#E62E8A), roxo (#7B2CBF),
 * azul turquesa (#0D9488) e laranja (#F97316) sobre fundo claro.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ compact = false, className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width={compact ? 32 : 38}
        height={compact ? 32 : 38}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Soft white shield/card silhouette */}
        <rect x="2" y="2" width="44" height="44" rx="14" fill="#FFFFFF" stroke="#EAE6F2" strokeWidth="1.5" />
        {/* Rosa Pink protective arc */}
        <path
          d="M24 38.5C24 38.5 11 30.2 11 20.4C11 15.6 14.8 12 19.3 12C21.8 12 23.4 13.2 24 14.5"
          stroke="#E62E8A"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        {/* Roxo embrace arc */}
        <path
          d="M24 38.5C24 38.5 37 30.2 37 20.4C37 15.6 33.2 12 28.7 12C26.2 12 24.6 13.2 24 14.5"
          stroke="#7B2CBF"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        {/* Azul Turquesa inner smile / care wave */}
        <path
          d="M17.5 24.5C19.2 27.6 21.6 29.5 24 29.5C26.4 29.5 28.8 27.6 30.5 24.5"
          stroke="#0D9488"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Laranja warm spark / child dot */}
        <circle cx="24" cy="19.5" r="3.4" fill="#F97316" />
      </svg>

      <span className="font-display font-bold tracking-tight text-[#231F2E] text-base sm:text-lg leading-none">
        Cartão{' '}
        <span className="text-[#E62E8A]">Saúde</span>{' '}
        <span className="text-[#7B2CBF]">Baby</span>
      </span>
    </span>
  );
};
