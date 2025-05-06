import { User, WearableData, LocationData, Alert, SafetyChallenge } from '../types';

// Mock wearable data generator function
export const mockWearableData = (): WearableData => ({
  heartRate: Math.floor(Math.random() * (100 - 60) + 60),
  steps: Math.floor(Math.random() * 1000),
  acceleration: Math.floor(Math.random() * 30), // Added acceleration instead of calories
  sleep: Math.floor(Math.random() * 8) + 4,
  lastUpdated: new Date().toISOString()
});

// Mock location data generator function
export const mockLocationData = (): LocationData => ({
  latitude: 4.6487, // Updated to Chapinero coordinates
  longitude: -74.0508,
  riskLevel: 'low',
  areaName: 'Chapinero, Bogotá',
  lastUpdated: new Date().toISOString()
});

// Mock rewards data
export const mockRewards = [
  {
    id: 'reward-1',
    title: {
      en: 'Policy Cost Maintenance',
      es: 'Mantenimiento de Costo de Póliza'
    },
    description: {
      en: 'Keep your current policy cost when renewing',
      es: 'Mantén el costo actual de tu póliza al renovar'
    },
    pointsCost: 500,
    category: 'insurance',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=300',
    popular: true
  },
  {
    id: 'reward-2',
    title: {
      en: 'Wearable Payment Reduction',
      es: 'Reducción del Pago del Wearable'
    },
    description: {
      en: 'Get COP $150,000 off your wearable device',
      es: 'Obtén $150,000 COP de descuento en tu dispositivo wearable'
    },
    pointsCost: 300,
    category: 'device',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300',
    popular: false
  },
  {
    id: 'reward-3',
    title: {
      en: 'Wearable Cashback Bonus',
      es: 'Bono de Cashback para Wearable'
    },
    description: {
      en: 'Get COP $50,000 cashback on your wearable initial payment',
      es: 'Obtén $50,000 COP de cashback en el pago inicial de tu wearable'
    },
    pointsCost: 300,
    category: 'device',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300',
    popular: true
  },
  {
    id: 'reward-4',
    title: {
      en: 'Transport Discount',
      es: 'Descuento en Transporte'
    },
    description: {
      en: 'Get 5% off on Uber/Bolt rides',
      es: 'Obtén 5% de descuento en viajes de Uber/Bolt'
    },
    pointsCost: 200,
    category: 'transport',
    image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=300',
    popular: true
  }
];

// Mock challenges data
export const mockChallenges: SafetyChallenge[] = [
  {
    id: 'challenge-1',
    title: {
      en: 'Daily Steps Champion',
      es: 'Campeón de Pasos Diarios'
    },
    description: {
      en: 'Complete 10,000 steps today to earn safety points',
      es: 'Completa 10,000 pasos hoy para ganar puntos de seguridad'
    },
    points: 100,
    progress: 75,
    completed: false,
    expiresAt: new Date(Date.now() + 86400000).toISOString()
  },
  {
    id: 'challenge-2',
    title: {
      en: 'Safe Driver Streak',
      es: 'Racha de Conductor Seguro'
    },
    description: {
      en: 'Complete 5 trips without any safety alerts',
      es: 'Completa 5 viajes sin alertas de seguridad'
    },
    points: 150,
    progress: 60,
    completed: false,
    expiresAt: new Date(Date.now() + 172800000).toISOString()
  },
  {
    id: 'challenge-3',
    title: {
      en: 'Health Check Hero',
      es: 'Héroe del Chequeo de Salud'
    },
    description: {
      en: 'Maintain normal heart rate for 24 hours',
      es: 'Mantén un ritmo cardíaco normal durante 24 horas'
    },
    points: 200,
    progress: 40,
    completed: false,
    expiresAt: new Date(Date.now() + 86400000).toISOString()
  }
];

// Mock alerts data
export const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    type: 'health',
    message: {
      en: 'Your heart rate has been above normal for the last 10 minutes',
      es: 'Tu ritmo cardíaco ha estado por encima de lo normal durante los últimos 10 minutos'
    },
    timestamp: new Date().toISOString(),
    severity: 'high',
    resolved: false
  },
  {
    id: 'alert-2',
    type: 'location',
    message: {
      en: 'You are entering an area with increased risk. Stay alert.',
      es: 'Estás entrando en una zona con mayor riesgo. Mantente alerta.'
    },
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    severity: 'medium',
    resolved: false
  },
  {
    id: 'alert-3',
    type: 'health',
    message: {
      en: 'Congratulations! You have reached 80% of your daily activity goal',
      es: '¡Felicitaciones! Has alcanzado el 80% de tu meta diaria de actividad'
    },
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    severity: 'low',
    resolved: true
  }
];

// Mock leaderboard data
export const mockLeaderboard = [
  {
    id: 'user-456',
    name: 'Maria Garcia',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
    safetyPoints: 1890,
    rank: 1,
  },
  {
    id: 'user-123',
    name: 'Alex Rivera',
    avatar: 'https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=150',
    safetyPoints: 1250,
    rank: 2,
  },
  {
    id: 'user-789',
    name: 'Carlos Mendez',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    safetyPoints: 1150,
    rank: 3,
  },
  {
    id: 'user-101',
    name: 'Sofia Diaz',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
    safetyPoints: 980,
    rank: 4,
  },
  {
    id: 'user-202',
    name: 'Juan Perez',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    safetyPoints: 870,
    rank: 5,
  }
];

// Update the mockUser object with Spanish translations
export const mockUser: User = {
  id: 'user-123',
  name: 'Alex Rivera',
  avatar: 'https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=150',
  email: 'alex.rivera@example.com',
  insurancePlan: 'Plan Protección Total',
  safetyPoints: 1250,
  weeklyGoal: 300,
  weeklyProgress: 210,
  joinedDate: '2024-07-15',
  connectedDevices: ['Mi Band 7'],
  policy: {
    id: 'pol-123',
    type: 'premium',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    monthlyPremium: 1200,
    coverages: [
      {
        id: 'cov-1',
        name: {
          en: 'Basic Protection',
          es: 'Protección Básica'
        },
        description: {
          en: 'Covers basic health and accident protection',
          es: 'Cubre protección básica de salud y accidentes'
        },
        type: 'basic',
        included: true,
        monthlyPrice: 1200,
        maxCoverage: 1000000
      }
    ]
  },
  vehicles: [
    {
      id: 'veh-1',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      licensePlate: 'ABC123',
      color: 'Silver',
      policyId: 'pol-123'
    },
    {
      id: 'veh-2',
      brand: 'Honda',
      model: 'CR-V',
      year: 2023,
      licensePlate: 'XYZ789',
      color: 'Blue',
      policyId: 'pol-123'
    }
  ],
  emergencyContacts: [
    {
      name: 'María Rivera',
      relationship: 'Madre',
      phone: '+57 300 123 4567'
    },
    {
      name: 'Juan Rivera',
      relationship: 'Padre',
      phone: '+57 300 765 4321'
    }
  ],
  settings: {
    notifications: true,
    dataSharing: true,
    googleFitSync: false,
    appleHealthSync: true,
    language: 'es'
  }
};