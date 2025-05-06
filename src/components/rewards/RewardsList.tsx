import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent } from '../common/Card';
import { Reward } from '../../types';
import Badge from '../common/Badge';
import Button from '../common/Button';

interface RewardsListProps {
  rewards: Reward[];
  userPoints: number;
}

const RewardsList: React.FC<RewardsListProps> = ({ rewards, userPoints }) => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', label: t('rewards.categories.all') },
    { id: 'health', label: t('rewards.categories.health') },
    { id: 'fitness', label: t('rewards.categories.fitness') },
    { id: 'transport', label: t('rewards.categories.transport') },
    { id: 'insurance', label: t('rewards.categories.insurance') },
  ];
  
  const filteredRewards = rewards.filter(reward => {
    const matchesCategory = activeCategory === 'all' || reward.category === activeCategory;
    const matchesSearch = reward.title[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
                          reward.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder={t('rewards.searchPlaceholder')}
          className="w-full px-4 py-2 pl-10 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-neutral-400 h-5 w-5" />
      </div>
      
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors
                ${activeCategory === category.id 
                  ? 'bg-primary-100 text-primary-700 font-medium' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-neutral-50 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-neutral-500 mr-2" />
          <span className="text-sm font-medium text-neutral-700">{t('rewards.availablePoints')}</span>
        </div>
        <span className="text-primary-600 font-semibold">{userPoints} {t('common.points')}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRewards.map(reward => (
          <Card key={reward.id} hoverable className="overflow-hidden">
            <div className="relative h-32 overflow-hidden">
              <img
                src={reward.image}
                alt={reward.title[language]}
                className="w-full h-full object-cover"
              />
              {reward.popular && (
                <div className="absolute top-2 right-2">
                  <Badge color="primary" size="sm">Popular</Badge>
                </div>
              )}
            </div>
            <CardContent>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-neutral-800">{reward.title[language]}</h3>
                <Badge color="primary">{reward.pointsCost} {t('common.points')}</Badge>
              </div>
              <p className="text-sm text-neutral-600 mb-4">{reward.description[language]}</p>
              <Button
                variant={userPoints >= reward.pointsCost ? 'primary' : 'outline'}
                fullWidth
                disabled={userPoints < reward.pointsCost}
              >
                {userPoints >= reward.pointsCost ? t('rewards.redeem') : t('rewards.notEnoughPoints')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RewardsList;