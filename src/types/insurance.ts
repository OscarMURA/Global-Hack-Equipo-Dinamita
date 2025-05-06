import { Language } from './language';

export interface InsurancePolicy {
  id: string;
  type: 'basic' | 'premium' | 'elite';
  status: 'active' | 'pending' | 'expired';
  startDate: string;
  endDate: string;
  coverages: Coverage[];
  monthlyPremium: number;
  vehicleId?: string;
}

export interface Coverage {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  type: 'basic' | 'additional';
  included: boolean;
  monthlyPrice: number;
  maxCoverage: number;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  policyId?: string;
}