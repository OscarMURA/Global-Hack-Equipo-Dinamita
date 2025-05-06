import { Language } from './language';
import { InsurancePolicy, Vehicle } from './insurance';

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  insurancePlan: string;
  safetyPoints: number;
  weeklyGoal: number;
  weeklyProgress: number;
  joinedDate: string;
  connectedDevices: string[];
  policy?: InsurancePolicy;
  vehicles: Vehicle[];
  emergencyContacts: {
    name: string;
    relationship: string;
    phone: string;
  }[];
  settings: {
    notifications: boolean;
    dataSharing: boolean;
    googleFitSync: boolean;
    appleHealthSync: boolean;
    language: Language;
  };
}