import classNames from 'classnames';
import React from 'react';

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}



export const Button = ({ variant, onClick, children, className }: IButtonProps) => {
  const defaultStyles =
    'rounded-[40px] transform:transition hover:transform hover:scale-105 transition duration-300 block min-w-[auto] content-box text-white-default';

  const buttonStyles = {
    primary:
      'px-[25px] py-[15px] bg-button-color   text-button  max-sm:px-[15px] max-sm:py-[10px]   max-sm:text-[16px] max-sm:leading-[19px]',
    secondary:
      'px-[25px] py-[15px] bg-secondary-button-color text-button max-sm:px-[15px] max-sm:py-[10px]',
    tertiary:
      'px-[30px] py-[10px] bg-button-color text-[16px] !rounded-[30px] bg-opacity-75 ',
    transparent: 'bg-transparent !text-button-color',
  };

  const buttonClasses = classNames(defaultStyles, buttonStyles[variant], className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
