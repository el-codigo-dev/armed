import { setModalOpen } from '@/store/mainSlice';
import { useAppDispatch } from '@/store/store';
import classNames from 'classnames';
import React from 'react';

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'formButton';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
}

export const Button = ({ variant, onClick, children, type, isDisabled }: IButtonProps) => {
  const dispatch = useAppDispatch();

  const defaultStyles =
    'rounded-[40px] transform:transition hover:transform hover:scale-105 transition duration-300 block min-w-[auto] content-box text-white-default';

  const buttonStyles = {
    primary:
      'px-[25px] py-[15px] bg-button-color   text-button  max-sm:px-[15px] max-sm:py-[10px]   max-sm:text-[16px] max-sm:leading-[19px]',
    secondary:
      'px-[25px] py-[15px] bg-secondary-button-color text-button max-sm:px-[15px] max-sm:py-[10px]',
    tertiary: 'px-[30px] py-[10px] bg-button-color text-[16px] !rounded-[30px] bg-opacity-75 ',
    transparent: 'bg-transparent !text-button-color text-[20px] leading-[24px] font-medium',
    formButton:
      'px-[25] py-[15px] text-button bg-button-color w-full disabled:bg-border-color  disabled:pointer-events-none  max-sm:px-[15px] max-sm:py-[10px]',
  };

  const buttonClasses = classNames(defaultStyles, buttonStyles[variant]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (type !== 'submit') dispatch(setModalOpen());
  }; // potom peredelat

  return (
    <button
      disabled={isDisabled}
      className={buttonClasses}
      onClick={handleClick}
      type={type ? type : 'button'}>
      {children}
    </button>
  );
};
