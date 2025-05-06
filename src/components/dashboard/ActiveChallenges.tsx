import React from 'react';
import { Trophy } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent, CardHeader } from '../common/Card';
import ProgressBar from '../common/ProgressBar';
import { SafetyChallenge } from '../../types';

interface ActiveChallengesProps {
  challenges: SafetyChallenge[];
}

const ActiveChallenges: React.FC<ActiveChallengesProps> = ({ challenges }) => {
  const { t, language } = useLanguage();
  const activeChallenges = challenges.filter(challenge => !challenge.completed);
  
  if (activeChallenges.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <div className="inline-flex justify-center items-center bg-neutral-100 p-3 rounded-full mb-3">
            <Trophy className="h-6 w-6 text-neutral-400" />
          </div>
          <h3 className="font-medium text-neutral-700 mb-2">{t('home.noChallenges')}</h3>
          <p className="text-sm text-neutral-500">
            {t('home.noChallengesDesc')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <h3 className="font-semibold text-neutral-800">{t('home.challenges')}</h3>
        <span className="text-sm text-primary-600 font-medium cursor-pointer">{t('home.viewAll')}</span>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="border-b border-neutral-100 last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-neutral-800">{challenge.title[language]}</h4>
                  <p className="text-sm text-neutral-500 mt-0.5">{challenge.description[language]}</p>
                </div>
                <div className="bg-primary-100 text-primary-700 font-medium text-sm py-1 px-2 rounded">
                  {challenge.points} {t('common.points')}
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex justify-between text-xs text-neutral-500 mb-1">
                  <span>{t('home.progress')}</span>
                  <span>{challenge.progress}%</span>
                </div>
                <ProgressBar 
                  value={challenge.progress} 
                  max={100} 
                  color="primary"
                  size="md"
                  animate={true}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActiveChallenges;