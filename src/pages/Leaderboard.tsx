import React from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import { mockLeaderboard } from '../utils/mockData';
import { Award } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const { user, isLoading } = useUser();
  const { t } = useLanguage();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <Award className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
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
        <h1 className="text-2xl font-bold text-neutral-800 mb-1">{t('leaderboard.title')}</h1>
        <p className="text-neutral-500">{t('leaderboard.subtitle')}</p>
      </div>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 mb-8 border border-primary-200">
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
            <Award className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="text-primary-800 font-medium">{t('leaderboard.yourPoints')}</p>
            <p className="text-2xl font-bold text-primary-700">{user.safetyPoints.toLocaleString()} {t('common.points')}</p>
          </div>
        </div>
      </div>
      
      <LeaderboardTable entries={mockLeaderboard} userId={user.id} />
    </div>
  );
};

export default Leaderboard;