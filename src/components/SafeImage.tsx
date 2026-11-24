import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Cartão Saúde Baby',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#E62E8A]/8 via-[#7B2CBF]/8 to-[#0D9488]/10 text-[#4A4458] p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE6F2] flex items-center justify-center mb-3 text-[#E62E8A]">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <p className="font-display font-semibold text-sm text-[#231F2E]">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
