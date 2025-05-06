import React from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import LiveStats from '../components/dashboard/LiveStats';
import QuickActions from '../components/dashboard/QuickActions';
import ActiveChallenges from '../components/dashboard/ActiveChallenges';
import AlertModal from '../components/common/AlertModal';
import EmergencyButton from '../components/common/EmergencyButton';
import { mockChallenges } from '../utils/mockData';
import { Umbrella } from 'lucide-react';

const Home: React.FC = () => {
  const { user, wearableData, locationData, activeAlert, dismissAlert, requestHelp, isLoading } = useUser();
  const { t } = useLanguage();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <Umbrella className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
          <p className="text-neutral-600">{t('common.loading')}...</p>
        </div>
      </div>
    );
  }

  if (!user || !wearableData || !locationData) {
    return <div>{t('common.error')}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl lg:py-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">{t('home.title')}, {user.name}</h1>
        <p className="text-neutral-500">{t('home.subtitle')}</p>
      </div>
      
      <div className="space-y-8">
        <LiveStats wearableData={wearableData} locationData={locationData} />
        
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">{t('home.quickActions')}</h2>
          <QuickActions />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">{t('home.challenges')}</h2>
          <ActiveChallenges challenges={mockChallenges} />
        </div>
      </div>
      
      {activeAlert && (
        <AlertModal 
          alert={activeAlert} 
          onDismiss={dismissAlert} 
          onRequestHelp={requestHelp} 
        />
      )}
      
      <EmergencyButton onRequestHelp={() => console.log('Emergency help requested')} />
    </div>
  );
};

export default Home;