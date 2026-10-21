import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, ...props }, ref) => {
    const baseClass = 'rounded-xl transition-all duration-200';
    const variantClass = {
      default: 'bg-white border border-gray-200 shadow-sm',
      glass: 'liquid-glass',
      outline: 'bg-white border border-blue-200',
    }[variant];
    const hoverClass = hover ? 'hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5' : '';
    
    return (
      <div
        ref={ref}
        className={`${baseClass} ${variantClass} ${hoverClass} ${className || ''}`}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
export default Card;
