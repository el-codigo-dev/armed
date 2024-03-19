import classNames from 'classnames';
import React from 'react';

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant, onClick, children, className}: IButtonProps) => {
  const buttonClasses = classNames(
    'text-white',
    {
      'bg-button-color hover:bg-opacity-50 rounded-[40px] text-[21px] font-semibold': variant === 'primary',
      'bg-secondary-button-color hover:bg-opacity-50 rounded-[40px] text-[21px] font-semibold': variant === 'secondary',
      'bg-button-color hover:bg-opacity-50 text-[16px]': variant === 'tertiary',
      'bg-transparent': variant === 'transparent'
    },
    className, 
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

