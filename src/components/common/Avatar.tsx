import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  size = 'md',
  className = '',
  fallback,
}) => {
  const sizeStyles = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const baseStyles = 'rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden';
  
  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) {
      // Get first letter of each word, max 2 letters
      return alt
        .split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    return 'U';
  };

  return (
    <div className={`${baseStyles} ${sizeStyles[size]} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Hide image on error
            (e.target as HTMLImageElement).style.display = 'none';
          }} 
        />
      ) : (
        <span className="font-medium text-neutral-600">{getFallbackText()}</span>
      )}
    </div>
  );
};

export default Avatar;