import React from 'react';
import { Bell, Share2, LogOut } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent, CardHeader, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { User } from '../../types';

interface SettingsProps {
  settings: User['settings'];
  onUpdateSettings: (settings: Partial<User['settings']>) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdateSettings }) => {
  const { t } = useLanguage();

  const toggleSetting = (key: keyof User['settings']) => {
    onUpdateSettings({
      [key]: !settings[key]
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-neutral-800">{t('settings.title')}</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center">
              <Bell className="text-neutral-600 h-5 w-5 mr-3" />
              <div>
                <p className="font-medium text-neutral-700">{t('settings.notifications')}</p>
                <p className="text-sm text-neutral-500">{t('settings.notificationsDesc')}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={settings.notifications}
                onChange={() => toggleSetting('notifications')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-1 border-t border-neutral-100 pt-4">
            <div className="flex items-center">
              <Share2 className="text-neutral-600 h-5 w-5 mr-3" />
              <div>
                <p className="font-medium text-neutral-700">{t('settings.dataSharing')}</p>
                <p className="text-sm text-neutral-500">{t('settings.dataSharingDesc')}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={settings.dataSharing}
                onChange={() => toggleSetting('dataSharing')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-1 border-t border-neutral-100 pt-4">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/2599247/pexels-photo-2599247.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Google Fit"
                className="h-5 w-5 mr-3 rounded-sm"
              />
              <div>
                <p className="font-medium text-neutral-700">{t('settings.googleFit')}</p>
                <p className="text-sm text-neutral-500">{t('settings.googleFitDesc')}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={settings.googleFitSync}
                onChange={() => toggleSetting('googleFitSync')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-1 border-t border-neutral-100 pt-4">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/9069485/pexels-photo-9069485.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Apple Health"
                className="h-5 w-5 mr-3 rounded-sm"
              />
              <div>
                <p className="font-medium text-neutral-700">{t('settings.appleHealth')}</p>
                <p className="text-sm text-neutral-500">{t('settings.appleHealthDesc')}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={settings.appleHealthSync}
                onChange={() => toggleSetting('appleHealthSync')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="py-4">
          <Button variant="outline" fullWidth className="text-neutral-700">
            <LogOut size={18} className="mr-2" />
            {t('settings.signOut')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;