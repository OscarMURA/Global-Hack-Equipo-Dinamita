import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Insurance
    'insurance.currentPolicy': 'Current Policy',
    'insurance.subtitle': 'Manage your insurance coverage and protection',
    'insurance.basePlan': 'Base Plan',
    'insurance.currentPlan': 'Current Plan',
    'insurance.monthlyPremium': 'Monthly Premium',
    'insurance.coverageActive': 'Your Coverage is Active',
    'insurance.coverageDesc': 'Your insurance is active and providing full protection',
    'insurance.addCoverage': 'Add Coverage',
    'insurance.review': 'Review Changes',
    'insurance.perMonth': '/month',
    'insurance.newMonthlyTotal': 'New Monthly Total',
    'insurance.confirmChanges': 'Confirm Coverage Changes',
    'insurance.additionalDesc': 'Add extra coverage to enhance your protection',
    'insurance.coverages': 'Coverages',
    'insurance.maxCoverage': 'Maximum Coverage',
    'insurance.add': 'Add Coverage',
    'insurance.vehicleProtected': 'Vehicle Protected Under This Policy',
    'insurance.status.active': 'Active',
    'insurance.status.pending': 'Pending',
    'insurance.status.expired': 'Expired',
    'insurance.additionalCoverages': 'Additional Coverages',
    'insurance.basicCoverages': 'Basic Coverages',
    'insurance.confirmCoverage': 'Confirm Coverage',

    // Vehicle
    'vehicle.register': 'Register Vehicle',
    'vehicle.brand': 'Brand',
    'vehicle.model': 'Model',
    'vehicle.year': 'Year',
    'vehicle.licensePlate': 'License Plate',
    'vehicle.color': 'Color',
    'vehicle.submit': 'Register Vehicle',
    'vehicle.registered': 'Vehicle Registered',
    'vehicle.registeredDesc': 'Your vehicle has been successfully registered and is now protected under your policy.',

    // Navigation
    'nav.home': 'Home',
    'nav.safety': 'Safety',
    'nav.rewards': 'Rewards',
    'nav.leaderboard': 'Leaderboard',
    'nav.profile': 'Profile',
    'nav.insurance': 'Insurance',
    'nav.vehicles': 'Vehicles',

    // Home
    'home.title': 'Hello',
    'home.subtitle': "Here's your safety overview for today",
    'home.quickActions': 'Quick Actions',
    'home.challenges': 'Your Challenges',
    'home.noChallenges': 'No Active Challenges',
    'home.noChallengesDesc': "You've completed all available challenges. Check back soon for new ones!",
    'home.viewAll': 'View All',
    'home.progress': 'Progress',

    // Quick Actions
    'quickActions.safetyPoints': 'Safety Points',
    'quickActions.checkRewards': 'Check your rewards',
    'quickActions.healthCheck': 'Health Check',
    'quickActions.viewStats': 'View your stats',
    'quickActions.safeRoutes': 'Safe Routes',
    'quickActions.exploreSafe': 'Explore safe areas',
    'quickActions.activityHistory': 'Activity History',
    'quickActions.viewActivities': 'View past activities',

    // Stats
    'stats.healthStats': 'Health Stats',
    'stats.heartRate': 'Heart Rate',
    'stats.steps': 'Steps',
    'stats.calories': 'Calories',
    'stats.sleep': 'Sleep',
    'stats.locationStatus': 'Location Status',
    'stats.currentArea': 'Current Area',
    'stats.riskLevel': 'Risk Level',
    'stats.safeArea': 'Safe area',
    'stats.useCaution': 'Use caution',
    'stats.takeExtraCare': 'Take extra care',

    // Alerts
    'alert.safetyAlert': 'Safety Alert',
    'alert.requestHelp': 'Request Emergency Help',
    'alert.imOkay': "I'm Okay",
    'alert.emergency': 'Emergency Help',
    'alert.emergencyDesc': 'Request immediate assistance from emergency services',
    'alert.requestNow': 'Request Help Now',

    // Rewards
    'rewards.title': 'Rewards Marketplace',
    'rewards.subtitle': 'Redeem your safety points for exclusive rewards',
    'rewards.searchPlaceholder': 'Search rewards...',
    'rewards.categories.all': 'All Rewards',
    'rewards.categories.health': 'Health',
    'rewards.categories.fitness': 'Fitness',
    'rewards.categories.transport': 'Transport',
    'rewards.categories.insurance': 'Insurance',
    'rewards.availablePoints': 'Available Points',
    'rewards.notEnoughPoints': 'Not Enough Points',
    'rewards.redeem': 'Redeem Reward',

    // Profile
    'profile.title': 'Your Profile',
    'profile.subtitle': 'Manage your account and preferences',
    'profile.weeklyGoal': 'Weekly Goal',
    'profile.safetyPointsGoal': 'Safety Points Goal',
    'profile.goalReset': 'Goal resets on Sunday',
    'profile.connectedDevices': 'Connected Devices',
    'profile.noDevices': 'No devices connected yet',
    'profile.connectDevice': 'Connect a device',
    'profile.connected': 'Connected',

    // Settings
    'settings.title': 'App Settings',
    'settings.notifications': 'Notifications',
    'settings.notificationsDesc': 'Receive safety and health alerts',
    'settings.dataSharing': 'Data Sharing',
    'settings.dataSharingDesc': 'Share health data to improve protection',
    'settings.googleFit': 'Sync with Google Fit',
    'settings.googleFitDesc': 'Import health data from Google Fit',
    'settings.appleHealth': 'Sync with Apple Health',
    'settings.appleHealthDesc': 'Import health data from Apple Health',
    'settings.signOut': 'Sign Out',

    // Leaderboard
    'leaderboard.title': 'Safety Leaderboard',
    'leaderboard.subtitle': 'See how your safety habits compare to others',
    'leaderboard.yourPoints': 'Your Safety Points',
    'leaderboard.weekly': 'Weekly Leaderboard',
    'leaderboard.thisWeek': 'This Week',
    'leaderboard.thatsYou': "That's you!",
    'leaderboard.viewFull': 'View Full Leaderboard',

    // Safety
    'safety.title': 'Safety Center',
    'safety.subtitle': 'Monitor and manage your safety status',
    'safety.alerts': 'Alerts',
    'safety.riskMap': 'Risk Map',
    'safety.recentAlerts': 'Recent Alerts',
    'safety.noAlerts': 'No Alerts',
    'safety.noAlertsDesc': "You don't have any safety alerts at this time",
    'safety.risk.low': 'Low-risk areas',
    'safety.risk.medium': 'Medium-risk areas',
    'safety.risk.high': 'High-risk areas',
    'safety.tips': 'Safety Tips',
    'safety.tips.vitals': 'Monitor Your Vitals',
    'safety.tips.vitalsDesc': 'Keep an eye on your heart rate, especially when in high-risk areas. Take breaks if you notice unusual readings.',
    'safety.tips.routes': 'Choose Safer Routes',
    'safety.tips.routesDesc': 'When possible, take routes through low-risk areas, especially at night or during severe weather.',
    'safety.tips.alerts': 'Act on Alerts',
    'safety.tips.alertsDesc': "Take our alerts seriously. They're designed to help you avoid potential dangers before they occur.",

    // Onboarding
    'onboarding.welcome.title': 'Welcome to Mi Sombrita',
    'onboarding.welcome.subtitle': 'We protect you before the accident happens',
    'onboarding.welcome.howItWorks': 'How it works:',
    'onboarding.welcome.health': 'Health Monitoring',
    'onboarding.welcome.healthDesc': 'We connect to your wearable device to monitor your health in real-time.',
    'onboarding.welcome.location': 'Location Safety',
    'onboarding.welcome.locationDesc': 'We analyze your location to alert you about potentially risky areas.',
    'onboarding.welcome.protection': 'Preventive Protection',
    'onboarding.welcome.protectionDesc': 'Earn rewards for safe behavior and get real-time alerts when we detect risks.',
    'onboarding.welcome.setup': "Let's set up your protection in just a few steps.",

    // Common
    'common.loading': 'Loading',
    'common.error': 'Error',
    'common.updated': 'Updated',
    'common.points': 'pts',
    'common.hrs': 'hrs',
    'common.continue': 'Continue',
    'common.back': 'Back',
    'common.getStarted': 'Get Started',
  },
  es: {
    // Insurance
    'insurance.currentPolicy': 'Póliza Actual',
    'insurance.subtitle': 'Administra tu cobertura y protección de seguro',
    'insurance.basePlan': 'Plan Base',
    'insurance.currentPlan': 'Plan Actual',
    'insurance.monthlyPremium': 'Prima Mensual',
    'insurance.coverageActive': 'Tu Cobertura está Activa',
    'insurance.coverageDesc': 'Tu seguro está activo y brindando protección completa',
    'insurance.addCoverage': 'Agregar Cobertura',
    'insurance.review': 'Revisar Cambios',
    'insurance.perMonth': '/mes',
    'insurance.newMonthlyTotal': 'Nuevo Total Mensual',
    'insurance.confirmChanges': 'Confirmar Cambios de Cobertura',
    'insurance.additionalDesc': 'Agrega cobertura adicional para mejorar tu protección',
    'insurance.coverages': 'Coberturas',
    'insurance.maxCoverage': 'Cobertura Máxima',
    'insurance.add': 'Agregar Cobertura',
    'insurance.vehicleProtected': 'Vehículo Protegido Bajo Esta Póliza',
    'insurance.status.active': 'Activa',
    'insurance.status.pending': 'Pendiente',
    'insurance.status.expired': 'Vencida',
    'insurance.additionalCoverages': 'Coberturas Adicionales',
    'insurance.basicCoverages': 'Coberturas Básicas',
    'insurance.confirmCoverage': 'Confirmar Cobertura',

    // Vehicle
    'vehicle.register': 'Registrar Vehículo',
    'vehicle.brand': 'Marca',
    'vehicle.model': 'Modelo',
    'vehicle.year': 'Año',
    'vehicle.licensePlate': 'Placa',
    'vehicle.color': 'Color',
    'vehicle.submit': 'Registrar Vehículo',
    'vehicle.registered': 'Vehículo Registrado',
    'vehicle.registeredDesc': 'Tu vehículo ha sido registrado exitosamente y está protegido bajo tu póliza.',

    // Navigation
    'nav.home': 'Inicio',
    'nav.safety': 'Seguridad',
    'nav.rewards': 'Recompensas',
    'nav.leaderboard': 'Clasificación',
    'nav.profile': 'Perfil',
    'nav.insurance': 'Seguro',
    'nav.vehicles': 'Vehículos',

    // Home
    'home.title': 'Hola',
    'home.subtitle': 'Aquí está tu resumen de seguridad para hoy',
    'home.quickActions': 'Acciones Rápidas',
    'home.challenges': 'Tus Desafíos',
    'home.noChallenges': 'Sin Desafíos Activos',
    'home.noChallengesDesc': 'Has completado todos los desafíos disponibles. ¡Vuelve pronto para nuevos!',
    'home.viewAll': 'Ver Todo',
    'home.progress': 'Progreso',

    // Quick Actions
    'quickActions.safetyPoints': 'Puntos de Seguridad',
    'quickActions.checkRewards': 'Revisa tus recompensas',
    'quickActions.healthCheck': 'Revisión de Salud',
    'quickActions.viewStats': 'Ver estadísticas',
    'quickActions.safeRoutes': 'Rutas Seguras',
    'quickActions.exploreSafe': 'Explorar áreas seguras',
    'quickActions.activityHistory': 'Historial de Actividad',
    'quickActions.viewActivities': 'Ver actividades pasadas',

    // Stats
    'stats.healthStats': 'Estadísticas de Salud',
    'stats.heartRate': 'Ritmo Cardíaco',
    'stats.steps': 'Pasos',
    'stats.calories': 'Calorías',
    'stats.sleep': 'Sueño',
    'stats.locationStatus': 'Estado de Ubicación',
    'stats.currentArea': 'Área Actual',
    'stats.riskLevel': 'Nivel de Riesgo',
    'stats.safeArea': 'Área segura',
    'stats.useCaution': 'Ten precaución',
    'stats.takeExtraCare': 'Ten mucho cuidado',

    // Alerts
    'alert.safetyAlert': 'Alerta de Seguridad',
    'alert.requestHelp': 'Solicitar Ayuda de Emergencia',
    'alert.imOkay': 'Estoy Bien',
    'alert.emergency': 'Ayuda de Emergencia',
    'alert.emergencyDesc': 'Solicita asistencia inmediata de servicios de emergencia',
    'alert.requestNow': 'Solicitar Ayuda Ahora',

    // Rewards
    'rewards.title': 'Mercado de Recompensas',
    'rewards.subtitle': 'Canjea tus puntos de seguridad por recompensas exclusivas',
    'rewards.searchPlaceholder': 'Buscar recompensas...',
    'rewards.categories.all': 'Todas las Recompensas',
    'rewards.categories.health': 'Salud',
    'rewards.categories.fitness': 'Ejercicio',
    'rewards.categories.transport': 'Transporte',
    'rewards.categories.insurance': 'Seguro',
    'rewards.availablePoints': 'Puntos Disponibles',
    'rewards.notEnoughPoints': 'Puntos Insuficientes',
    'rewards.redeem': 'Canjear Recompensa',

    // Profile
    'profile.title': 'Tu Perfil',
    'profile.subtitle': 'Administra tu cuenta y preferencias',
    'profile.weeklyGoal': 'Meta Semanal',
    'profile.safetyPointsGoal': 'Meta de Puntos de Seguridad',
    'profile.goalReset': 'La meta se reinicia el domingo',
    'profile.connectedDevices': 'Dispositivos Conectados',
    'profile.noDevices': 'No hay dispositivos conectados',
    'profile.connectDevice': 'Conectar un dispositivo',
    'profile.connected': 'Conectado',

    // Settings
    'settings.title': 'Configuración',
    'settings.notifications': 'Notificaciones',
    'settings.notificationsDesc': 'Recibe alertas de seguridad y salud',
    'settings.dataSharing': 'Compartir Datos',
    'settings.dataSharingDesc': 'Comparte datos de salud para mejorar la protección',
    'settings.googleFit': 'Sincronizar con Google Fit',
    'settings.googleFitDesc': 'Importar datos de salud de Google Fit',
    'settings.appleHealth': 'Sincronizar con Apple Health',
    'settings.appleHealthDesc': 'Importar datos de salud de Apple Health',
    'settings.signOut': 'Cerrar Sesión',

    // Leaderboard
    'leaderboard.title': 'Tabla de Clasificación',
    'leaderboard.subtitle': 'Compara tus hábitos de seguridad con otros',
    'leaderboard.yourPoints': 'Tus Puntos de Seguridad',
    'leaderboard.weekly': 'Clasificación Semanal',
    'leaderboard.thisWeek': 'Esta Semana',
    'leaderboard.thatsYou': '¡Eres tú!',
    'leaderboard.viewFull': 'Ver Clasificación Completa',

    // Safety
    'safety.title': 'Centro de Seguridad',
    'safety.subtitle': 'Monitorea y administra tu estado de seguridad',
    'safety.alerts': 'Alertas',
    'safety.riskMap': 'Mapa de Riesgo',
    'safety.recentAlerts': 'Alertas Recientes',
    'safety.noAlerts': 'Sin Alertas',
    'safety.noAlertsDesc': 'No tienes alertas de seguridad en este momento',
    'safety.risk.low': 'Áreas de bajo riesgo',
    'safety.risk.medium': 'Áreas de riesgo medio',
    'safety.risk.high': 'Áreas de alto riesgo',
    'safety.tips': 'Consejos de Seguridad',
    'safety.tips.vitals': 'Monitorea tus Signos Vitales',
    'safety.tips.vitalsDesc': 'Mantén un ojo en tu ritmo cardíaco, especialmente en áreas de riesgo. Toma descansos si notas lecturas inusuales.',
    'safety.tips.routes': 'Elige Rutas más Seguras',
    'safety.tips.routesDesc': 'Cuando sea posible, toma rutas por áreas seguras, especialmente de noche o durante mal tiempo.',
    'safety.tips.alerts': 'Actúa ante las Alertas',
    'safety.tips.alertsDesc': 'Toma nuestras alertas en serio. Están diseñadas para ayudarte a evitar peligros potenciales antes de que ocurran.',

    // Onboarding
    'onboarding.welcome.title': 'Bienvenido a Mi Sombrita',
    'onboarding.welcome.subtitle': 'Te protegemos antes del accidente',
    'onboarding.welcome.howItWorks': 'Cómo funciona:',
    'onboarding.welcome.health': 'Monitoreo de Salud',
    'onboarding.welcome.healthDesc': 'Nos conectamos a tu dispositivo para monitorear tu salud en tiempo real.',
    'onboarding.welcome.location': 'Seguridad de Ubicación',
    'onboarding.welcome.locationDesc': 'Analizamos tu ubicación para alertarte sobre áreas potencialmente riesgosas.',
    'onboarding.welcome.protection': 'Protección Preventiva',
    'onboarding.welcome.protectionDesc': 'Gana recompensas por comportamiento seguro y recibe alertas en tiempo real cuando detectamos riesgos.',
    'onboarding.welcome.setup': 'Configuremos tu protección en unos pocos pasos.',

    // Common
    'common.loading': 'Cargando',
    'common.error': 'Error',
    'common.updated': 'Actualizado',
    'common.points': 'pts',
    'common.hrs': 'hrs',
    'common.continue': 'Continuar',
    'common.back': 'Atrás',
    'common.getStarted': 'Comenzar',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};