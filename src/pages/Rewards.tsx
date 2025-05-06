import React from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import RewardsList from '../components/rewards/RewardsList';
import { mockRewards } from '../utils/mockData';
import { Gift } from 'lucide-react';

const Rewards: React.FC = () => {
  const { user, isLoading } = useUser();
  const { t } = useLanguage();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <Gift className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
          <p className="text-neutral-600">{t('common.loading')}...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <div>{t('common.error')}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl lg:py-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">{t('rewards.title')}</h1>
        <p className="text-neutral-500">{t('rewards.subtitle')}</p>
      </div>
      
      <RewardsList rewards={mockRewards} userPoints={user.safetyPoints} />
    </div>
  );
};

export default Rewards;