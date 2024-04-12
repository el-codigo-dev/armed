import React, { ReactNode, useEffect, useState } from 'react';
import CloseIcon from './ui/icons/close-icon';
import { setModalClose } from '@/store/mainSlice';
import { useAppDispatch } from '@/store/store';
import classNames from 'classnames';

export const Modal = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      dispatch(setModalClose());
    }, 300); // Ожидаем завершения анимации перед вызовом действия закрытия
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const formElement = document.getElementById('modal-content');
      if (formElement && !formElement.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  console.log(isOpen);

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 z-[100] w-full h-full bg-black bg-opacity-30 flex overflow-hidden opacity-0 transition-opacity duration-300',
        isOpen ? '!opacity-100' : 'opacity-0',
      )}>
      <div
        id={'modal-content'}
        className="mx-[auto] py-[15%] max-sm:py-[0]         max-sm:overflow-scroll box-content">
        {children}
      </div>
    </div>
  );
};
