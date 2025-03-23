import React from 'react';
import { cn } from '@/shared/utils';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { IconName } from 'lucide-react/dynamic';

export interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'danger'
    | 'success'
    | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  onClick?: () => void;
  className?: string;
  iconName?: IconName;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  loadingMessage = 'Carregando...',
  onClick,
  className = '',
  fullWidth = false,
  iconName,
  iconPosition = 'left',
  href,
}) => {
  const baseClasses = 'rounded-lg font-medium focus:outline-none focus:ring focus:ring-opacity-50 flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    accent: 'bg-purple-500 text-white hover:bg-purple-600',
    ghost: 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100',
    link: 'bg-transparent text-blue-500 underline hover:text-blue-700',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  }[variant];

  const sizeClasses = {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
    xl: 'text-xl px-6 py-3',
  }[size];

  const stateClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transition duration-300 ease-in-out';

  const fullWidthClass = fullWidth ? 'w-full' : '';

  const classes = cn(
    baseClasses,
    variantClasses,
    sizeClasses,
    stateClasses,
    fullWidthClass,
    className
  );

  const Children = () => (
    <>
      {iconName && iconPosition === 'left' && <DynamicIcon name={iconName} className="w-5 h-5" />}
      {loading ? loadingMessage : children}
      {iconName && iconPosition === 'right' && <DynamicIcon name={iconName} className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        <Children />
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} onClick={onClick} type="button">
      <Children />
    </button>
  );
};
