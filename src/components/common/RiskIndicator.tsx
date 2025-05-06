import React from 'react';
import { RiskLevel } from '../../types';
import { Activity, AlertTriangle, ShieldCheck } from 'lucide-react';

interface RiskIndicatorProps {
  riskLevel: RiskLevel;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showIcon?: boolean;
  pulseAnimation?: boolean;
  className?: string;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({
  riskLevel,
  size = 'md',
  showLabel = true,
  showIcon = true,
  pulseAnimation = true,
  className = '',
}) => {
  const riskColors = {
    low: 'bg-success-500',
    medium: 'bg-warning-500',
    high: 'bg-danger-500',
  };

  const riskLabels = {
    low: 'Low Risk',
    medium: 'Medium Risk',
    high: 'High Risk',
  };

  const iconSize = size === 'sm' ? 16 : size === 'md' ? 20 : 24;

  const riskIcons = {
    low: <ShieldCheck size={iconSize} className="text-success-500" />,
    medium: <Activity size={iconSize} className="text-warning-500" />,
    high: <AlertTriangle size={iconSize} className="text-danger-500" />,
  };

  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  const labelSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  const animationClass = pulseAnimation 
    ? riskLevel === 'high' 
      ? 'animate-pulse' 
      : riskLevel === 'medium' 
        ? 'animate-pulse-slow' 
        : ''
    : '';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`rounded-full ${sizeClasses[size]} ${riskColors[riskLevel]} ${animationClass} mr-2`}></div>
      {showIcon && <span className="mr-1.5">{riskIcons[riskLevel]}</span>}
      {showLabel && <span className={`${labelSizes[size]} font-medium`}>{riskLabels[riskLevel]}</span>}
    </div>
  );
};

export default RiskIndicator;