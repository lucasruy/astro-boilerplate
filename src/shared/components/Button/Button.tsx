import React from 'react';

export interface ButtonProps {
  /**
   * Conteúdo do botão
   */
  children: React.ReactNode;
  /**
   * Variante visual do botão
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  /**
   * Tamanho do botão
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * O botão está desabilitado?
   */
  disabled?: boolean;
  /**
   * O botão está em estado de loading?
   */
  loading?: boolean;
  /**
   * Função chamada ao clicar no botão
   */
  onClick?: () => void;
  /**
   * Classes CSS adicionais
   */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const stateClasses = `
    ${disabled ? 'btn-disabled' : ''}
    ${loading ? 'loading' : ''}
  `;

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses}
        ${sizeClasses}
        ${stateClasses}
        ${className}
      `.trim()}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};