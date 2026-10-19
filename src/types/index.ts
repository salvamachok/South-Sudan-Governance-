export type RegionType = 'Greater Equatoria' | 'Greater Bahr el Ghazal' | 'Greater Upper Nile';

export type EntityType = 'state' | 'admin_area' | 'county' | 'payam' | 'boma';

export interface Boma {
  id: string;
  name: string;
  payamId: string;
  countyId: string;
  stateId: string;
  chiefRole?: string;
  notableFeatures?: string;
}

export interface Payam {
  id: string;
  name: string;
  countyId: string;
  stateId: string;
  headquarters?: string;
  estimatedBomasCount?: number;
  sampleBomas: string[];
  notes?: string;
}

export interface County {
  id: string;
  name: string;
  stateId: string;
  headquarters: string;
  payams: Payam[];
  countyType?: 'Rural County' | 'City Council / Municipality';
  description?: string;
  keySectors?: string[];
}

export interface StateEntity {
  id: string;
  name: string;
  capital: string;
  region: RegionType;
  isSpecialAdministrativeArea: boolean;
  governorOrAdminTitle: 'Governor' | 'Chief Administrator';
  currentLeaderName: string;
  assemblySeats: number;
  speakerName?: string;
  areaKm2: number;
  estimatedPopulation: string;
  counties: County[];
  historicalContext: string;
  economicActivity: string[];
}

export interface ParliamentaryParty {
  name: string;
  abbreviation: string;
  color: string;
  tnlaSeats: number;
  councilOfStatesSeats: number;
  percentageTnla: number;
  description: string;
}

export interface ParliamentaryCommittee {
  id: string;
  name: string;
  chamber: 'TNLA' | 'Council of States' | 'Joint';
  mandate: string;
  oversightSector: string;
}

export interface LegalArticle {
  number: string;
  title: string;
  source: string;
  excerpt: string;
  significance: string;
}
