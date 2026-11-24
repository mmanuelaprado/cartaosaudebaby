export type SpecialtyKey =
  | 'pediatria'
  | 'psicologia'
  | 'fonoaudiologia'
  | 'terapia-ocupacional'
  | 'psicopedagogia'
  | 'fisioterapia'
  | 'outras';

export interface SpecialtyItem {
  id: SpecialtyKey;
  name: string;
  description: string;
  accentColor: 'pink' | 'purple' | 'teal' | 'orange';
}

export interface ClinicPartner {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  address: string;
  specialties: SpecialtyKey[];
  discountSummary: string;
  contactPhone?: string;
  notes?: string;
  active: boolean;
  updatedAt?: string;
}

export interface ClinicFilterParams {
  query: string;
  specialty: SpecialtyKey | 'todas';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
