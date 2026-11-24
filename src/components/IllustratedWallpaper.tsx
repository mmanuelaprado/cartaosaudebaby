import React, { useId } from 'react';

interface IllustratedWallpaperProps {
  variant?: 'deep' | 'soft';
}

/**
 * Papel de parede ilustrado exclusivo do Cartão Saúde Baby:
 * Estrelinhas, nuvens, corações, flores delicadas, círculos, pequenos arco-íris
 * e formas orgânicas nas cores rosa pink, azul turquesa, laranja e lilás.
 */
export const IllustratedWallpaper: React.FC<IllustratedWallpaperProps> = ({
  variant = 'deep',
}) => {
  const uid = useId().replace(/:/g, '');
  const patternId = `sb-wallpaper-tile-${uid}`;
  const isDeep = variant === 'deep';

  const strokeAlpha = isDeep ? 0.24 : 0.22;
  const fillAlpha = isDeep ? 0.16 : 0.14;
  const cloudFill = isDeep ? 'rgba(255,255,255,0.08)' : 'rgba(123,44,191,0.07)';
  const ringStroke = isDeep ? 'rgba(233,213,255,0.22)' : 'rgba(123,44,191,0.16)';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
    >
      {/* Multi-layered luminous depth glows */}
      {isDeep ? (
        <>
          <div className="absolute -top-28 -left-24 w-[460px] h-[460px] rounded-full bg-[#E62E8A]/22 blur-3xl" />
          <div className="absolute top-1/3 -right-28 w-[520px] h-[520px] rounded-full bg-[#14B8A6]/16 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full bg-[#F97316]/14 blur-3xl" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-[#A855F7]/24 blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#E62E8A]/10 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#14B8A6]/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[340px] rounded-full bg-[#C084FC]/16 blur-3xl" />
        </>
      )}

      {/* Organic curved backdrop shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-80 180C120 80 340 260 560 150C780 40 980 220 1220 110C1340 55 1440 95 1520 140V-40H-80V180Z"
          fill={isDeep ? 'rgba(255,255,255,0.04)' : 'rgba(123,44,191,0.05)'}
        />
        <path
          d="M-60 760C160 660 390 830 660 720C930 610 1160 800 1500 680V940H-60V760Z"
          fill={isDeep ? 'rgba(230,46,138,0.08)' : 'rgba(230,46,138,0.06)'}
        />
      </svg>

      {/* Seamless illustrated childhood tile (stars, clouds, hearts, flowers, circles, small rainbows) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="360"
            height="360"
            patternUnits="userSpaceOnUse"
          >
            {/* Soft cloud top-left */}
            <path
              d="M44 68c-7 0-12-5-12-11.5 0-5.8 4.4-10.6 10.2-11.3C44.5 37.8 51.3 33 59.3 33c8.9 0 16.3 6.2 17.8 14.4 5.1.8 8.9 5 8.9 10.1 0 5.8-4.8 10.5-10.8 10.5H44z"
              fill={cloudFill}
              stroke={ringStroke}
              strokeWidth="1.4"
            />

            {/* Small rainbow top-right */}
            <g transform="translate(248, 42)" opacity={isDeep ? 0.45 : 0.42}>
              <path
                d="M4 34a26 26 0 0 1 52 0"
                stroke="#E62E8A"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M11 34a19 19 0 0 1 38 0"
                stroke="#14B8A6"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M18 34a12 12 0 0 1 24 0"
                stroke="#F97316"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* 5-point star in turquoise */}
            <path
              d="M168 46l3.4 7 7.7 1.1-5.6 5.4 1.3 7.7-6.8-3.6-6.9 3.6 1.3-7.7-5.5-5.4 7.7-1.1 3.4-7z"
              fill={`rgba(20,184,166,${fillAlpha})`}
              stroke={`rgba(20,184,166,${strokeAlpha + 0.1})`}
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Delicate flower center-left */}
            <g transform="translate(92, 168)" opacity={isDeep ? 0.46 : 0.44}>
              <circle cx="0" cy="-10" r="5.5" fill="#E62E8A" fillOpacity="0.42" />
              <circle cx="9.5" cy="-3" r="5.5" fill="#E62E8A" fillOpacity="0.42" />
              <circle cx="6" cy="8.5" r="5.5" fill="#E62E8A" fillOpacity="0.42" />
              <circle cx="-6" cy="8.5" r="5.5" fill="#E62E8A" fillOpacity="0.42" />
              <circle cx="-9.5" cy="-3" r="5.5" fill="#E62E8A" fillOpacity="0.42" />
              <circle cx="0" cy="0" r="4.2" fill="#F97316" fillOpacity="0.75" />
            </g>

            {/* Heart in pink */}
            <path
              d="M214 162c-3.5-4.5-10.5-4.2-13.5.7-2.6 4.2-1.4 9.7 2.8 13.5l10.7 9.3 10.7-9.3c4.2-3.8 5.4-9.3 2.8-13.5-3-4.9-10-5.2-13.5-.7z"
              fill={`rgba(230,46,138,${fillAlpha})`}
              stroke={`rgba(230,46,138,${strokeAlpha + 0.12})`}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Soft concentric circles */}
            <circle cx="312" cy="186" r="16" stroke={ringStroke} strokeWidth="1.5" fill="none" />
            <circle cx="312" cy="186" r="6" fill={`rgba(249,115,22,${fillAlpha + 0.12})`} />

            {/* Sparkle star in orange */}
            <path
              d="M42 268l2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5 2.5-6.5z"
              fill={`rgba(249,115,22,${fillAlpha + 0.16})`}
              stroke={`rgba(249,115,22,${strokeAlpha + 0.14})`}
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Second cloud bottom-center */}
            <path
              d="M148 296c-6 0-10.5-4.3-10.5-10 0-5 3.8-9.2 8.8-9.8 2-6.5 8-10.7 15-10.7 7.8 0 14.3 5.4 15.6 12.6 4.4.7 7.8 4.4 7.8 8.8 0 5-4.2 9.1-9.4 9.1h-27.3z"
              fill={cloudFill}
              stroke={ringStroke}
              strokeWidth="1.4"
            />

            {/* Delicate flower bottom-right in turquoise & lilac */}
            <g transform="translate(292, 294)" opacity={isDeep ? 0.45 : 0.42}>
              <circle cx="0" cy="-9" r="5" fill="#14B8A6" fillOpacity="0.45" />
              <circle cx="8.5" cy="-2.8" r="5" fill="#14B8A6" fillOpacity="0.45" />
              <circle cx="5.2" cy="7.5" r="5" fill="#14B8A6" fillOpacity="0.45" />
              <circle cx="-5.2" cy="7.5" r="5" fill="#14B8A6" fillOpacity="0.45" />
              <circle cx="-8.5" cy="-2.8" r="5" fill="#14B8A6" fillOpacity="0.45" />
              <circle cx="0" cy="0" r="3.8" fill="#E62E8A" fillOpacity="0.72" />
            </g>

            {/* Playful scattered dots & mini rings */}
            <circle cx="122" cy="96" r="3.5" fill={`rgba(249,115,22,${fillAlpha + 0.18})`} />
            <circle cx="242" cy="112" r="4" stroke={`rgba(20,184,166,${strokeAlpha + 0.15})`} strokeWidth="1.5" fill="none" />
            <circle cx="164" cy="222" r="3.5" fill={`rgba(192,132,252,${fillAlpha + 0.2})`} />
            <circle cx="332" cy="94" r="3" fill={`rgba(230,46,138,${fillAlpha + 0.2})`} />
            <circle cx="238" cy="252" r="4.5" stroke={`rgba(249,115,22,${strokeAlpha + 0.12})`} strokeWidth="1.4" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Subtle soft grain overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
};
