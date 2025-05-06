import { Language } from './language';

export type { Language } from './language';
export type { RiskLevel } from './risk';
export * from './insurance';
export * from './user';
export * from './rewards';
export * from './safety';

export interface WearableData {
  heartRate: number;
  steps: number;
  acceleration: number; // Changed from calories
  sleep: number;
  lastUpdated: string;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  riskLevel: RiskLevel;
  areaName: string;
  lastUpdated: string;
}

export interface Alert {
  id: string;
  type: 'health' | 'location';
  message: Record<Language, string>;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  resolved: boolean;
}

export interface SafetyChallenge {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  points: number;
  progress: number;
  completed: boolean;
  expiresAt: string;
}

export interface Reward {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  pointsCost: number;
  category: 'health' | 'fitness' | 'transport' | 'insurance' | 'device';
  image: string;
  popular: boolean;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  safetyPoints: number;
  rank: number;
}