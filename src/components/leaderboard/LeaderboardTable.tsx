import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { LeaderboardEntry } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import Avatar from '../common/Avatar';
import Card, { CardContent, CardHeader } from '../common/Card';

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  userId: string;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries, userId }) => {
  const { t } = useLanguage();

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-warning-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-neutral-400" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-warning-600" />;
    return <span className="text-sm font-medium text-neutral-500">{rank}</span>;
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-primary-600 mr-2" />
          <h3 className="font-semibold text-neutral-800">{t('leaderboard.weekly')}</h3>
        </div>
        <span className="text-sm text-neutral-500">{t('leaderboard.thisWeek')}</span>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div 
              key={entry.id} 
              className={`flex items-center p-3 rounded-lg ${
                entry.id === userId ? 'bg-primary-50 border border-primary-100' : 'hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center justify-center w-8">
                {getRankIcon(entry.rank)}
              </div>
              
              <div className="flex flex-1 items-center ml-2">
                <Avatar src={entry.avatar} alt={entry.name} size="md" />
                <div className="ml-3">
                  <p className="font-medium text-neutral-800">{entry.name}</p>
                  {entry.id === userId && (
                    <span className="text-xs text-primary-600">{t('leaderboard.thatsYou')}</span>
                  )}
                </div>
              </div>
              
              <div className="font-semibold text-neutral-800">
                {entry.safetyPoints.toLocaleString()} <span className="text-xs font-normal text-neutral-500">{t('common.points')}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors">
            {t('leaderboard.viewFull')}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardTable;