import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Map, History, HeartPulse } from 'lucide-react';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const actions = [
    {
      title: t('quickActions.safetyPoints'),
      description: t('quickActions.checkRewards'),
      icon: <Award className="h-6 w-6 text-primary-600" />,
      color: 'bg-primary-100',
      path: '/rewards',
    },
    {
      title: t('quickActions.healthCheck'),
      description: t('quickActions.viewStats'),
      icon: <HeartPulse className="h-6 w-6 text-danger-600" />,
      color: 'bg-danger-100',
      path: '/profile',
    },
    {
      title: t('quickActions.safeRoutes'),
      description: t('quickActions.exploreSafe'),
      icon: <Map className="h-6 w-6 text-success-600" />,
      color: 'bg-success-100',
      path: '/safety',
    },
    {
      title: t('quickActions.activityHistory'),
      description: t('quickActions.viewActivities'),
      icon: <History className="h-6 w-6 text-warning-600" />,
      color: 'bg-warning-100',
      path: '/profile',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => navigate(action.path)}
        >
          <div className={`${action.color} p-2 rounded-lg inline-flex mb-3`}>
            {action.icon}
          </div>
          <h3 className="font-medium text-neutral-800">{action.title}</h3>
          <p className="text-sm text-neutral-500 mt-1">{action.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;