import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import Card, { CardContent, CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { Shield, Plus, AlertTriangle, Check } from 'lucide-react';

const Insurance: React.FC = () => {
  const { user, isLoading } = useUser();
  const { t, language } = useLanguage();
  const [showAdditionalCoverage, setShowAdditionalCoverage] = useState(false);
  const [selectedCoverages, setSelectedCoverages] = useState<string[]>([]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <Shield className="h-12 w-12 text-primary-400 animate-bounce mb-4" />
          <p className="text-neutral-600">{t('common.loading')}...</p>
        </div>
      </div>
    );
  }

  if (!user || !user.policy) {
    return <div>{t('common.error')}</div>;
  }

  const additionalCoverages = [
    {
      id: 'permanent-disability',
      name: language === 'es' ? 'Incapacidad Total y Permanente' : 'Total and Permanent Disability',
      description: language === 'es' 
        ? 'Protección económica en caso de incapacidad total y permanente'
        : 'Financial protection in case of total and permanent disability',
      monthlyPrice: 250,
      maxCoverage: 500000
    },
    {
      id: 'hospitalization',
      name: language === 'es' ? 'Renta Diaria por Hospitalización' : 'Daily Hospital Income',
      description: language === 'es'
        ? 'Compensación diaria durante tu estancia hospitalaria'
        : 'Daily compensation during your hospital stay',
      monthlyPrice: 150,
      maxCoverage: 100000
    },
    {
      id: 'temporary-disability',
      name: language === 'es' ? 'Renta por Incapacidad Temporal' : 'Temporary Disability Income',
      description: language === 'es'
        ? 'Apoyo económico durante períodos de incapacidad temporal'
        : 'Financial support during periods of temporary disability',
      monthlyPrice: 200,
      maxCoverage: 300000
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'es' ? 'es-MX' : 'en-US', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const toggleCoverage = (coverageId: string) => {
    setSelectedCoverages(prev => 
      prev.includes(coverageId)
        ? prev.filter(id => id !== coverageId)
        : [...prev, coverageId]
    );
  };

  const calculateTotalCost = () => {
    const baseCost = user.policy.monthlyPremium;
    const additionalCost = selectedCoverages.reduce((total, coverageId) => {
      const coverage = additionalCoverages.find(c => c.id === coverageId);
      return total + (coverage?.monthlyPrice || 0);
    }, 0);
    return baseCost + additionalCost;
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl lg:py-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">{t('insurance.currentPolicy')}</h1>
        <p className="text-neutral-500">{t('insurance.subtitle')}</p>
      </div>

      <div className="space-y-6">
        {/* Current Plan Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="text-primary-600 h-5 w-5 mr-2" />
                <h3 className="font-semibold text-neutral-800">{t('insurance.basePlan')}</h3>
              </div>
              <Badge color={user.policy.status === 'active' ? 'success' : 'warning'}>
                {t(`insurance.status.${user.policy.status}`)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div>
                  <p className="text-sm text-neutral-500">{t('insurance.currentPlan')}</p>
                  <p className="font-medium text-neutral-800">{user.insurancePlan}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-500">{t('insurance.monthlyPremium')}</p>
                  <p className="font-medium text-primary-600">{formatCurrency(user.policy.monthlyPremium)}</p>
                </div>
              </div>

              <div className="bg-success-50 p-4 rounded-lg flex items-start">
                <Check className="text-success-600 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-success-800">{t('insurance.coverageActive')}</p>
                  <p className="text-sm text-success-600 mt-1">{t('insurance.coverageDesc')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Coverages */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-800">{t('insurance.additionalCoverages')}</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdditionalCoverage(!showAdditionalCoverage)}
                icon={showAdditionalCoverage ? <AlertTriangle size={16} /> : <Plus size={16} />}
              >
                {showAdditionalCoverage ? t('insurance.review') : t('insurance.addCoverage')}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showAdditionalCoverage ? (
              <div className="space-y-4">
                {additionalCoverages.map((coverage) => (
                  <div
                    key={coverage.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedCoverages.includes(coverage.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-200'
                    }`}
                    onClick={() => toggleCoverage(coverage.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-800">{coverage.name}</h4>
                        <p className="text-sm text-neutral-600 mt-1">{coverage.description}</p>
                        <p className="text-sm text-neutral-500 mt-2">
                          {t('insurance.maxCoverage')}: {formatCurrency(coverage.maxCoverage)}
                        </p>
                      </div>
                      <div className="ml-4">
                        <Badge color="primary" variant={selectedCoverages.includes(coverage.id) ? 'solid' : 'outline'}>
                          + {formatCurrency(coverage.monthlyPrice)} {t('insurance.perMonth')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}

                {selectedCoverages.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-neutral-700">{t('insurance.newMonthlyTotal')}</span>
                        <span className="font-semibold text-primary-600">{formatCurrency(calculateTotalCost())}</span>
                      </div>
                    </div>
                    <Button fullWidth onClick={() => console.log('Confirming coverage updates')}>
                      {t('insurance.confirmChanges')}
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="bg-neutral-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-neutral-500" />
                </div>
                <p className="text-neutral-600">{t('insurance.additionalDesc')}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insurance;