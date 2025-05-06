import React from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import VehicleForm from '../components/insurance/VehicleForm';
import { Car } from 'lucide-react';

const Vehicles: React.FC = () => {
  const { user, isLoading } = useUser();
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <Car className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
          <p className="text-neutral-600">{t('common.loading')}...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <div>{t('common.error')}</div>;
  }

  const handleVehicleSubmit = (vehicleData: any) => {
    // Implementation for vehicle registration
    console.log('Registering vehicle:', vehicleData);
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl lg:py-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">{t('vehicle.register')}</h1>
        <p className="text-neutral-500">{t('vehicle.subtitle')}</p>
      </div>

      <VehicleForm onSubmit={handleVehicleSubmit} />
    </div>
  );
};

export default Vehicles;