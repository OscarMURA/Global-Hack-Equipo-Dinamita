import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../../context/LanguageContext';

interface EmergencyButtonProps {
  onRequestHelp: () => void;
}

const EmergencyButton: React.FC<EmergencyButtonProps> = ({ onRequestHelp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-20 right-4 z-30 lg:bottom-8">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-lg p-4 w-64 animate-[fadeIn_0.2s_ease]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-danger-700">{t('alert.emergency')}</h3>
            <button 
              className="text-neutral-500 hover:text-neutral-800"
              onClick={toggleExpand}
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mb-4">
            {t('alert.emergencyDesc')}
          </p>
          <Button
            variant="danger"
            fullWidth
            onClick={() => {
              onRequestHelp();
              setIsExpanded(false);
            }}
          >
            {t('alert.requestNow')}
          </Button>
        </div>
      ) : (
        <button
          className="bg-danger-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-danger-700 transition-colors animate-[pulse_3s_infinite]"
          onClick={toggleExpand}
        >
          <Phone size={24} />
        </button>
      )}
    </div>
  );
};

export default EmergencyButton;