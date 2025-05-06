import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  bordered = true,
}) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  const borderStyles = bordered ? 'border border-neutral-200' : '';
  const shadowStyles = 'shadow-sm';
  const hoverStyles = hoverable ? 'transition-all duration-200 hover:shadow-md' : '';
  const cursorStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`
        ${baseStyles}
        ${borderStyles}
        ${shadowStyles}
        ${hoverStyles}
        ${cursorStyles}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`px-4 py-3 border-b border-neutral-200 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`px-4 py-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`px-4 py-3 border-t border-neutral-200 ${className}`}>
    {children}
  </div>
);

export default Card;