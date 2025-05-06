import React from 'react';
import { Shield, Plus, Car } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { InsurancePolicy, Coverage } from '../../types';
import Card, { CardContent, CardHeader } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

interface PolicyOverviewProps {
  policy: InsurancePolicy;
  onAddCoverage: () => void;
}

const PolicyOverview: React.FC<PolicyOverviewProps> = ({ policy, onAddCoverage }) => {
  const { t, language } = useLanguage();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'es' ? 'es-MX' : 'en-US', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'es' ? 'es-MX' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const getStatusColor = (status: InsurancePolicy['status']): 'success' | 'warning' | 'danger' => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'expired':
        return 'danger';
    }
  };

  const renderCoverage = (coverage: Coverage) => (
    <div
      key={coverage.id}
      className={`p-4 rounded-lg border ${
        coverage.included
          ? 'border-primary-200 bg-primary-50'
          : 'border-neutral-200 bg-white'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-neutral-800">{coverage.name[language]}</h4>
          <p className="text-sm text-neutral-600 mt-1">{coverage.description[language]}</p>
        </div>
        <Badge color={coverage.included ? 'primary' : 'neutral'} variant="outline">
          {formatCurrency(coverage.monthlyPrice)}
        </Badge>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-neutral-500">
          {t('insurance.maxCoverage')}: {formatCurrency(coverage.maxCoverage)}
        </span>
        {coverage.type === 'additional' && !coverage.included && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddCoverage()}
            icon={<Plus size={16} />}
          >
            {t('insurance.add')}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="text-primary-600 h-5 w-5 mr-2" />
              <h3 className="font-semibold text-neutral-800">{t('insurance.currentPolicy')}</h3>
            </div>
            <Badge color={getStatusColor(policy.status)}>
              {t(`insurance.status.${policy.status}`)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
              <div>
                <p className="text-sm text-neutral-500">{t('insurance.policyPeriod')}</p>
                <p className="font-medium text-neutral-800">
                  {formatDate(policy.startDate)} - {formatDate(policy.endDate)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-neutral-500">{t('insurance.monthlyPremium')}</p>
                <p className="font-medium text-primary-600">{formatCurrency(policy.monthlyPremium)}</p>
              </div>
            </div>

            {policy.vehicleId && (
              <div className="flex items-center bg-neutral-50 p-3 rounded-lg">
                <Car className="text-neutral-600 h-5 w-5 mr-2" />
                <span className="text-sm text-neutral-600">{t('insurance.vehicleProtected')}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="font-semibold text-neutral-800 mb-4">{t('insurance.coverages')}</h3>
        <div className="space-y-3">
          {policy.coverages.map(renderCoverage)}
        </div>
      </div>
    </div>
  );
};

export default PolicyOverview;