import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, WearableData, LocationData, Alert } from '../types';
import { mockUser, mockWearableData, mockLocationData, mockAlerts } from '../utils/mockData';

interface UserContextType {
  user: User | null;
  wearableData: WearableData | null;
  locationData: LocationData | null;
  alerts: Alert[];
  activeAlert: Alert | null;
  dismissAlert: (id: string) => void;
  requestHelp: (id: string) => void;
  updateUserSettings: (settings: Partial<User['settings']>) => void;
  refreshWearableData: () => void;
  refreshLocationData: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [wearableData, setWearableData] = useState<WearableData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [activeAlert, setActiveAlert] = useState<Alert | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUser(mockUser);
        refreshWearableData();
        refreshLocationData();
        setAlerts(mockAlerts);
        
        // Set the first unresolved alert as active
        const firstUnresolvedAlert = mockAlerts.find(alert => !alert.resolved);
        if (firstUnresolvedAlert) {
          setActiveAlert(firstUnresolvedAlert);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();

    // Set up periodic data refresh
    const intervalId = setInterval(() => {
      refreshWearableData();
      refreshLocationData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  const refreshWearableData = () => {
    setWearableData(mockWearableData());
  };

  const refreshLocationData = () => {
    setLocationData(mockLocationData());
  };

  const dismissAlert = (id: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id 
          ? { ...alert, resolved: true } 
          : alert
      )
    );
    
    if (activeAlert?.id === id) {
      setActiveAlert(null);
    }
  };

  const requestHelp = (id: string) => {
    // In a real app, this would send a request to emergency services
    console.log(`Emergency help requested for alert: ${id}`);
    // For the prototype, just mark as resolved
    dismissAlert(id);
  };

  const updateUserSettings = (settings: Partial<User['settings']>) => {
    if (user) {
      setUser({
        ...user,
        settings: {
          ...user.settings,
          ...settings
        }
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        wearableData,
        locationData,
        alerts,
        activeAlert,
        dismissAlert,
        requestHelp,
        updateUserSettings,
        refreshWearableData,
        refreshLocationData,
        isLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};