import type { ClinicFilterParams, ClinicPartner } from '../types/clinic';

/**
 * Repositório da Rede Credenciada.
 *
 * Estrutura preparada para futura integração com painel administrativo e API REST.
 * Importante: Não cadastrar clínicas ou profissionais fictícios. Novos parceiros
 * devem ser inseridos apenas após validação e credenciamento oficial.
 */
const INITIAL_ACCREDITED_CLINICS: ClinicPartner[] = [];

export function getAccreditedClinics(): ClinicPartner[] {
  return INITIAL_ACCREDITED_CLINICS.filter((clinic) => clinic.active);
}

export function filterAccreditedClinics(
  clinics: ClinicPartner[],
  filters: ClinicFilterParams
): ClinicPartner[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return clinics.filter((clinic) => {
    const matchesSpecialty =
      filters.specialty === 'todas' || clinic.specialties.includes(filters.specialty);

    if (!matchesSpecialty) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      clinic.name,
      clinic.city,
      clinic.neighborhood,
      clinic.address,
      clinic.discountSummary,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
