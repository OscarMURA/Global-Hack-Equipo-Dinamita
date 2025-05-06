import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import Card, { CardContent, CardHeader } from '../components/common/Card';
import RiskIndicator from '../components/common/RiskIndicator';
import Badge from '../components/common/Badge';
import { MapPin, Info, AlertTriangle, Bell } from 'lucide-react';
import { Alert as AlertType } from '../types';

const Safety: React.FC = () => {
  const { alerts, wearableData, locationData, isLoading } = useUser();
  const { t, language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<'alerts' | 'map'>('alerts');
  
  if (isLoading || !wearableData || !locationData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <AlertTriangle className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
          <p className="text-neutral-600">{t('common.loading')}...</p>
        </div>
      </div>
    );
  }

  const formatAlertTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getSeverityColor = (severity: AlertType['severity']) => {
    switch (severity) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'primary';
      default: return 'neutral';
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl lg:py-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">{t('safety.title')}</h1>
        <p className="text-neutral-500">{t('safety.subtitle')}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden mb-6">
        <div className="flex border-b border-neutral-200">
          <button
            className={`flex-1 py-3 text-center font-medium ${
              selectedTab === 'alerts'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setSelectedTab('alerts')}
          >
            <Bell className="h-4 w-4 inline-block mr-1" />
            {t('safety.alerts')}
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              selectedTab === 'map'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setSelectedTab('map')}
          >
            <MapPin className="h-4 w-4 inline-block mr-1" />
            {t('safety.riskMap')}
          </button>
        </div>
        
        <div className="p-4">
          {selectedTab === 'alerts' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-800">{t('safety.recentAlerts')}</h3>
                <Badge color="primary" variant="outline" size="sm">{alerts.length}</Badge>
              </div>
              
              {alerts.length > 0 ? (
                <div className="space-y-3">
                  {alerts.map(alert => (
                    <div 
                      key={alert.id} 
                      className={`p-3 rounded-lg border ${
                        alert.resolved 
                          ? 'border-neutral-200 bg-neutral-50' 
                          : `border-${getSeverityColor(alert.severity)}-200 bg-${getSeverityColor(alert.severity)}-50`
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full bg-${getSeverityColor(alert.severity)}-100 mr-3`}>
                          <AlertTriangle className={`h-5 w-5 text-${getSeverityColor(alert.severity)}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className={`font-medium ${alert.resolved ? 'text-neutral-500' : 'text-neutral-800'}`}>
                              {alert.message[language]}
                            </p>
                            <span className="text-xs text-neutral-500 ml-2">
                              {formatAlertTime(alert.timestamp)}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Badge 
                              color={getSeverityColor(alert.severity)} 
                              size="sm"
                              variant={alert.resolved ? 'outline' : 'solid'}
                            >
                              {alert.severity} {t('stats.riskLevel')}
                            </Badge>
                            {alert.resolved && (
                              <span className="text-xs text-neutral-500 ml-2">{t('common.resolved')}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex justify-center items-center bg-neutral-100 p-3 rounded-full mb-3">
                    <Info className="h-6 w-6 text-neutral-400" />
                  </div>
                  <h3 className="font-medium text-neutral-700 mb-1">{t('safety.noAlerts')}</h3>
                  <p className="text-sm text-neutral-500">
                    {t('safety.noAlertsDesc')}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-neutral-800 mb-2">{t('stats.currentArea')}</h3>
                <div className="flex items-center justify-between bg-neutral-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="text-neutral-500 h-5 w-5 mr-2" />
                    <span className="text-neutral-700">{locationData.areaName}</span>
                  </div>
                  <RiskIndicator riskLevel={locationData.riskLevel} />
                </div>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31813.545858785077!2d-74.0507975428627!3d4.648697750867492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f909e88bf0583%3A0xcee402e0b005bc73!2sChapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1746498399065!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-success-500 mr-2"></div>
                  <span className="text-sm text-neutral-700">{t('safety.risk.low')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-warning-500 mr-2"></div>
                  <span className="text-sm text-neutral-700">{t('safety.risk.medium')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-danger-500 mr-2"></div>
                  <span className="text-sm text-neutral-700">{t('safety.risk.high')}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-neutral-800">{t('safety.tips')}</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary-100 p-2 rounded-lg mr-3 flex-shrink-0">
                <Info className="text-primary-600 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">{t('safety.tips.vitals')}</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  {t('safety.tips.vitalsDesc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-success-100 p-2 rounded-lg mr-3 flex-shrink-0">
                <MapPin className="text-success-600 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">{t('safety.tips.routes')}</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  {t('safety.tips.routesDesc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-warning-100 p-2 rounded-lg mr-3 flex-shrink-0">
                <AlertTriangle className="text-warning-600 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">{t('safety.tips.alerts')}</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  {t('safety.tips.alertsDesc')}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Safety;