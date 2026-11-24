import React, { useMemo, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Percent,
  Phone,
  Search,
  Stethoscope,
} from 'lucide-react';
import { buildWhatsAppUrl, SPECIALTIES } from '../data/siteContent';
import { filterAccreditedClinics, getAccreditedClinics } from '../services/clinicService';
import type { ClinicPartner, SpecialtyKey } from '../types/clinic';
import { IllustratedWallpaper } from './IllustratedWallpaper';

const FILTER_OPTIONS: { id: SpecialtyKey | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'pediatria', label: 'Pediatria' },
  { id: 'psicologia', label: 'Psicologia' },
  { id: 'fonoaudiologia', label: 'Fonoaudiologia' },
  { id: 'terapia-ocupacional', label: 'Terapia Ocupacional' },
  { id: 'psicopedagogia', label: 'Psicopedagogia' },
  { id: 'fisioterapia', label: 'Fisioterapia' },
];

const SPECIALTY_NAME_MAP: Record<SpecialtyKey, string> = SPECIALTIES.reduce(
  (acc, item) => {
    acc[item.id] = item.name;
    return acc;
  },
  {} as Record<SpecialtyKey, string>
);

const ClinicCard: React.FC<{ clinic: ClinicPartner }> = ({ clinic }) => (
  <article className="rounded-3xl border border-[#E3D6F7] bg-white p-6 flex flex-col justify-between saude-shadow-soft">
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[#6C5A85]">
            {clinic.city} · {clinic.neighborhood}
          </p>
          <h3 className="mt-1 font-display font-bold text-lg text-[#241438]">{clinic.name}</h3>
        </div>
        <span className="text-sm font-bold text-[#E62E8A] tabular-nums shrink-0">
          {clinic.discountSummary}
        </span>
      </div>

      <p className="mt-3 flex items-start gap-2 text-sm text-[#483562]">
        <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" aria-hidden="true" />
        <span>{clinic.address}</span>
      </p>

      <div className="mt-4 pt-4 border-t border-[#E3D6F7]">
        <p className="text-xs text-[#6C5A85]">Especialidades disponíveis</p>
        <p className="mt-1 text-sm font-medium text-[#241438]">
          {clinic.specialties.map((key) => SPECIALTY_NAME_MAP[key]).join(' · ')}
        </p>
      </div>
    </div>

    {clinic.contactPhone && (
      <div className="mt-5 pt-4 border-t border-[#E3D6F7] flex items-center justify-between text-sm">
        <span className="inline-flex items-center gap-1.5 text-[#483562] tabular-nums">
          <Phone className="w-4 h-4 text-[#7B2CBF]" aria-hidden="true" />
          {clinic.contactPhone}
        </span>
      </div>
    )}
  </article>
);

export const AccreditedNetworkSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyKey | 'todas'>('todas');
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  const [clinicName, setClinicName] = useState('');
  const [clinicCity, setClinicCity] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [clinicDiscount, setClinicDiscount] = useState('');
  const [clinicSpecialties, setClinicSpecialties] = useState<string[]>([]);
  const [formError, setFormError] = useState('');
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');

  const allClinics = useMemo(() => getAccreditedClinics(), []);
  const filteredClinics = useMemo(
    () =>
      filterAccreditedClinics(allClinics, {
        query,
        specialty: selectedSpecialty,
      }),
    [allClinics, query, selectedSpecialty]
  );

  const familyConsultHref = useMemo(() => {
    const cityPart = query.trim() ? ` na região "${query.trim()}"` : '';
    const specPart =
      selectedSpecialty !== 'todas'
        ? ` para a especialidade de ${SPECIALTY_NAME_MAP[selectedSpecialty]}`
        : '';
    return buildWhatsAppUrl(
      `Olá! Gostaria de consultar as clínicas credenciadas do Cartão Saúde Baby${cityPart}${specPart}.`
    );
  }, [query, selectedSpecialty]);

  const togglePartnerSpecialty = (label: string) => {
    setClinicSpecialties((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setPreparedWhatsAppUrl('');

    if (!clinicName.trim() || !clinicCity.trim() || !clinicAddress.trim()) {
      setFormError('Por favor, preencha o nome da clínica, cidade/bairro e endereço.');
      return;
    }

    if (clinicSpecialties.length === 0) {
      setFormError('Selecione ao menos uma especialidade atendida.');
      return;
    }

    const discountText = clinicDiscount.trim() || 'A combinar (até 50%)';
    const message = [
      'Olá! Gostaria de solicitar o credenciamento da nossa clínica/consultório no Cartão Saúde Baby:',
      `• Clínica/Profissional: ${clinicName.trim()}`,
      `• Cidade/Bairro: ${clinicCity.trim()}`,
      `• Endereço: ${clinicAddress.trim()}`,
      `• Especialidades: ${clinicSpecialties.join(', ')}`,
      `• Proposta de desconto: ${discountText}`,
    ].join('\n');

    setPreparedWhatsAppUrl(buildWhatsAppUrl(message));
  };

  return (
    <section
      id="rede-credenciada"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#EDE2FD] via-[#F5EEFF] to-[#FCEFF7]"
    >
      <IllustratedWallpaper variant="soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#F97316] mb-3">Rede credenciada</p>
            <h2
              className="font-display font-extrabold tracking-tight text-[#241438] text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Clínicas, endereços, especialidades e descontos
            </h2>
            <p className="mt-4 text-base text-[#483562] leading-relaxed">
              Espaço dedicado à consulta dos parceiros credenciados ao Cartão Saúde Baby. Conforme
              novas clínicas e profissionais são integrados à rede, seus endereços, especialidades
              e descontos de até 50% ficam listados aqui.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowPartnerForm((prev) => !prev);
              setFormError('');
              setPreparedWhatsAppUrl('');
            }}
            className="self-start lg:self-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-[#7B2CBF]/30 text-[#7B2CBF] bg-white hover:bg-[#7B2CBF] hover:text-white transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
          >
            <Building2 className="w-4 h-4" aria-hidden="true" />
            <span>{showPartnerForm ? 'Voltar à busca da rede' : 'Credenciar minha clínica'}</span>
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 rounded-3xl border border-[#E3D6F7] bg-white/95 p-5 sm:p-6 saude-shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-5 relative">
              <label htmlFor="clinic-search" className="sr-only">
                Buscar por clínica, cidade ou bairro
              </label>
              <Search
                className="w-4 h-4 text-[#6C5A85] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="clinic-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por cidade, bairro ou clínica..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-[#E3D6F7] bg-[#F7F2FE] text-sm text-[#241438] placeholder:text-[#6C5A85] focus:bg-white focus:outline-none focus:border-[#7B2CBF]"
              />
            </div>

            <div
              className="lg:col-span-7 flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Filtrar rede credenciada por especialidade"
            >
              {FILTER_OPTIONS.map((option) => {
                const active = selectedSpecialty === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedSpecialty(option.id)}
                    className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF] ${
                      active
                        ? 'bg-[#7B2CBF] text-white shadow-sm'
                        : 'bg-[#F7F2FE] text-[#483562] hover:bg-[#E3D6F7] hover:text-[#241438]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Directory Results OR Honest Empty State (Zero fabricated clinics) */}
        {filteredClinics.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[2rem] border border-[#E3D6F7] bg-white/95 p-7 sm:p-10 saude-shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-sm font-bold text-[#7B2CBF]">
                  Diretório oficial em atualização
                </p>
                <h3 className="mt-2 font-display font-extrabold text-xl sm:text-2xl text-[#241438]">
                  Consulte a disponibilidade atual na sua cidade pelo WhatsApp
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#483562] leading-relaxed">
                  Nossa rede credenciada está em processo contínuo de expansão e atualização. Para
                  garantir informações exatas de clínicas, endereços, especialidades e percentuais de
                  desconto (até 50%), não exibimos listagens genéricas: nossa equipe confirma os
                  parceiros ativos diretamente no WhatsApp.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={familyConsultHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#E62E8A] hover:bg-[#D11F79] transition-colors shadow-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Consultar parceiros no WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-3xl border border-dashed border-[#CBB6EC] bg-[#F7F2FE] p-6 space-y-3">
                <p className="text-xs font-bold text-[#6C5A85]">
                  Estrutura padrão de cada parceiro cadastrado
                </p>
                <div className="flex items-center gap-2.5 text-sm text-[#483562]">
                  <Building2 className="w-4 h-4 text-[#E62E8A] shrink-0" aria-hidden="true" />
                  <span>Nome da clínica ou profissional</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#483562]">
                  <MapPin className="w-4 h-4 text-[#0D9488] shrink-0" aria-hidden="true" />
                  <span>Cidade, bairro e endereço completo</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#483562]">
                  <Stethoscope className="w-4 h-4 text-[#7B2CBF] shrink-0" aria-hidden="true" />
                  <span>Especialidades infantis atendidas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#483562]">
                  <Percent className="w-4 h-4 text-[#F97316] shrink-0" aria-hidden="true" />
                  <span>Desconto acordado (até 50%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partner Clinic Registration Request Form -> WhatsApp */}
        {showPartnerForm && (
          <form
            onSubmit={handlePartnerSubmit}
            className="mt-6 rounded-[2rem] border border-[#E3D6F7] bg-white p-6 sm:p-8 saude-shadow-soft"
            noValidate
          >
            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-xl text-[#241438]">
                Solicitar credenciamento de clínica ou especialista
              </h3>
              <p className="mt-1.5 text-sm text-[#483562]">
                Preencha os dados do consultório ou clínica abaixo. Ao enviar, geramos o link
                direto para nosso WhatsApp oficial com a mensagem pronta para análise da equipe.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="partner-name"
                  className="block text-sm font-medium text-[#241438] mb-1.5"
                >
                  Nome da clínica ou profissional *
                </label>
                <input
                  id="partner-name"
                  type="text"
                  required
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="Ex.: Clínica ou consultório"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E3D6F7] bg-[#F7F2FE] text-sm text-[#241438] focus:bg-white focus:outline-none focus:border-[#7B2CBF]"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-city"
                  className="block text-sm font-medium text-[#241438] mb-1.5"
                >
                  Cidade e bairro *
                </label>
                <input
                  id="partner-city"
                  type="text"
                  required
                  value={clinicCity}
                  onChange={(e) => setClinicCity(e.target.value)}
                  placeholder="Ex.: Salvador - Pituba"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E3D6F7] bg-[#F7F2FE] text-sm text-[#241438] focus:bg-white focus:outline-none focus:border-[#7B2CBF]"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-address"
                  className="block text-sm font-medium text-[#241438] mb-1.5"
                >
                  Endereço completo *
                </label>
                <input
                  id="partner-address"
                  type="text"
                  required
                  value={clinicAddress}
                  onChange={(e) => setClinicAddress(e.target.value)}
                  placeholder="Rua, número e complemento"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E3D6F7] bg-[#F7F2FE] text-sm text-[#241438] focus:bg-white focus:outline-none focus:border-[#7B2CBF]"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-discount"
                  className="block text-sm font-medium text-[#241438] mb-1.5"
                >
                  Percentual de desconto sugerido (até 50%)
                </label>
                <input
                  id="partner-discount"
                  type="text"
                  value={clinicDiscount}
                  onChange={(e) => setClinicDiscount(e.target.value)}
                  placeholder="Ex.: 20% a 50% em consultas"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E3D6F7] bg-[#F7F2FE] text-sm text-[#241438] focus:bg-white focus:outline-none focus:border-[#7B2CBF]"
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium text-[#241438] mb-2.5">
                Especialidades atendidas *
              </p>
              <div className="flex flex-wrap gap-2">
                {SPECIALTIES.map((spec) => {
                  const checked = clinicSpecialties.includes(spec.name);
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => togglePartnerSpecialty(spec.name)}
                      aria-pressed={checked}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
                        checked
                          ? 'bg-[#E62E8A] text-white border-[#E62E8A]'
                          : 'bg-[#F7F2FE] text-[#483562] border-[#E3D6F7] hover:border-[#7B2CBF]/40'
                      }`}
                    >
                      {spec.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {formError && (
              <p role="alert" className="mt-4 text-sm font-medium text-[#C81E73]">
                {formError}
              </p>
            )}

            {preparedWhatsAppUrl && (
              <div
                role="status"
                className="mt-4 rounded-2xl border border-[#0D9488]/30 bg-[#0D9488]/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[#0D9488]"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>
                    Dados validados! Clique ao lado para enviar sua solicitação pelo WhatsApp.
                  </span>
                </div>
                <a
                  href={preparedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0B7D73] transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Abrir WhatsApp</span>
                </a>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#7B2CBF] hover:bg-[#5A189A] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Preparar envio via WhatsApp</span>
              </button>
              <span className="text-xs text-[#6C5A85]">
                Nenhum dado é armazenado neste formulário.
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
