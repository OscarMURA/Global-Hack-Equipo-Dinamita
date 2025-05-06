import React from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import UserStats from '../components/profile/UserStats';
import Settings from '../components/profile/Settings';
import { User } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, updateUserSettings, isLoading } = useUser();
  const { t } = useLanguage();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <User className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
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
        <h1 className="text-2xl font-bold text-neutral-800 mb-1">{t('profile.title')}</h1>
        <p className="text-neutral-500">{t('profile.subtitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <UserStats user={user} />
        </div>
        <div>
          <Settings settings={user.settings} onUpdateSettings={updateUserSettings} />
        </div>
      </div>
    </div>
  );
};

export default Profile;