import { Language } from './language';

export interface SafetyChallenge {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  points: number;
  progress: number;
  completed: boolean;
  expiresAt: string;
}

export interface Alert {
  id: string;
  type: 'health' | 'location';
  message: Record<Language, string>;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  resolved: boolean;
}