import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border border-gray-200',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
        ghost: 'text-gray-900 hover:bg-gray-100 active:bg-gray-200',
        danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
        success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm gap-2',
        md: 'px-4 py-2 text-sm gap-2',
        lg: 'px-6 py-3 text-base gap-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={clsx(buttonVariants({ variant, size, className }))} {...props} />
  )
);

Button.displayName = 'Button';
export default Button;
