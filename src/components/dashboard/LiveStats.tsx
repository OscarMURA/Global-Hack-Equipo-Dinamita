import React from 'react';
import { Heart, MapPin, Footprints, Gauge, Moon } from 'lucide-react';
import Card, { CardContent } from '../common/Card';
import { WearableData, LocationData } from '../../types';
import RiskIndicator from '../common/RiskIndicator';
import { useLanguage } from '../../context/LanguageContext';

interface LiveStatsProps {
  wearableData: WearableData;
  locationData: LocationData;
}

const LiveStats: React.FC<LiveStatsProps> = ({ wearableData, locationData }) => {
  const { t } = useLanguage();

  const getTimeFromNow = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return t('common.updated');
    if (diffInMinutes === 1) return '1 minute ago';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours === 1) return '1 hour ago';
    return `${diffInHours} hours ago`;
  };

  const getHeartRateColor = (rate: number) => {
    if (rate < 60) return 'text-blue-500';
    if (rate > 100) return 'text-danger-500';
    return 'text-success-500';
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-neutral-800">{t('stats.healthStats')}</h3>
            <span className="text-xs text-neutral-500">
              {getTimeFromNow(wearableData.lastUpdated)}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="bg-primary-100 p-2 rounded-lg mr-3">
                <Heart className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('stats.heartRate')}</p>
                <p className={`text-lg font-semibold ${getHeartRateColor(wearableData.heartRate)}`}>
                  {wearableData.heartRate} <span className="text-xs font-normal">BPM</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-success-100 p-2 rounded-lg mr-3">
                <Footprints className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('stats.steps')}</p>
                <p className="text-lg font-semibold text-neutral-800">
                  {wearableData.steps.toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-warning-100 p-2 rounded-lg mr-3">
                <Gauge className="h-5 w-5 text-warning-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('stats.acceleration')}</p>
                <p className="text-lg font-semibold text-neutral-800">
                  {wearableData.acceleration} <span className="text-xs font-normal">km/h</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-neutral-100 p-2 rounded-lg mr-3">
                <Moon className="h-5 w-5 text-neutral-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('stats.sleep')}</p>
                <p className="text-lg font-semibold text-neutral-800">
                  {wearableData.sleep} <span className="text-xs font-normal">{t('common.hrs')}</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-neutral-800">{t('stats.locationStatus')}</h3>
            <span className="text-xs text-neutral-500">
              {getTimeFromNow(locationData.lastUpdated)}
            </span>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="bg-neutral-100 p-2 rounded-lg mr-3">
              <MapPin className="h-5 w-5 text-neutral-600" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">{t('stats.currentArea')}</p>
              <p className="text-lg font-semibold text-neutral-800">
                {locationData.areaName}
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-3 rounded-lg flex items-center justify-between">
            <RiskIndicator 
              riskLevel={locationData.riskLevel} 
              size="md" 
              showLabel={true}
              showIcon={true}
              pulseAnimation={true}
            />
            <span className="text-sm text-neutral-500">
              {locationData.riskLevel === 'low' 
                ? t('stats.safeArea')
                : locationData.riskLevel === 'medium' 
                ? t('stats.useCaution')
                : t('stats.takeExtraCare')}
            </span>
          </div>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31813.545858785077!2d-74.0507975428627!3d4.648697750867492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f909e88bf0583%3A0xcee402e0b005bc73!2sChapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1746498399065!5m2!1ses-419!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveStats;