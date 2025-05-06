import { Language } from './language';

export interface Reward {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  pointsCost: number;
  category: 'health' | 'fitness' | 'transport' | 'insurance';
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