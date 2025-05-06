import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  animate?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = 'primary',
  size = 'md',
  showLabel = false,
  className = '',
  animate = false,
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const baseStyles = 'w-full bg-neutral-200 rounded-full overflow-hidden';

  const colorStyles = {
    primary: 'bg-primary-600',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
  };

  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const animationStyles = animate 
    ? 'transition-all duration-500 ease-in-out' 
    : 'transition-none';

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm text-neutral-600">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`${baseStyles} ${sizeStyles[size]}`}>
        <div
          className={`${colorStyles[color]} ${animationStyles}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;