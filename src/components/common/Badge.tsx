import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium';
  
  const variantStyles = {
    solid: {
      primary: 'bg-primary-100 text-primary-800',
      success: 'bg-success-100 text-success-800',
      warning: 'bg-warning-100 text-warning-800',
      danger: 'bg-danger-100 text-danger-800',
      neutral: 'bg-neutral-100 text-neutral-800',
    },
    outline: {
      primary: 'bg-transparent border border-primary-500 text-primary-700',
      success: 'bg-transparent border border-success-500 text-success-700',
      warning: 'bg-transparent border border-warning-500 text-warning-700',
      danger: 'bg-transparent border border-danger-500 text-danger-700',
      neutral: 'bg-transparent border border-neutral-500 text-neutral-700',
    },
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant][color]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;