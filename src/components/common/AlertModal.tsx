import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import Button from './Button';
import { Alert } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface AlertModalProps {
  alert: Alert;
  onDismiss: (id: string) => void;
  onRequestHelp: (id: string) => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ alert, onDismiss, onRequestHelp }) => {
  const { language, t } = useLanguage();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => onDismiss(alert.id)}></div>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md z-10 overflow-hidden animate-[fadeIn_0.3s_ease]">
        <div className="bg-danger-100 p-4 flex items-start justify-between">
          <div className="flex items-center">
            <AlertTriangle className="text-danger-600 h-6 w-6 mr-2" />
            <h3 className="text-lg font-semibold text-danger-800">{t('alert.safetyAlert')}</h3>
          </div>
          <button 
            className="text-neutral-500 hover:text-neutral-800"
            onClick={() => onDismiss(alert.id)}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-5">
          <p className="text-neutral-700 mb-4">{alert.message[language]}</p>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Button 
              variant="danger" 
              fullWidth
              onClick={() => onRequestHelp(alert.id)}
            >
              {t('alert.requestHelp')}
            </Button>
            <Button 
              variant="outline" 
              fullWidth
              onClick={() => onDismiss(alert.id)}
            >
              {t('alert.imOkay')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;