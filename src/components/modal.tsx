import React, { ReactNode, useEffect } from 'react';
import CloseIcon from './ui/icons/close-icon';
import { setModalClose } from '@/store/mainSlice';
import { useAppDispatch } from '@/store/store';

export const Modal = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setModalClose());
  };
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

  return (
    <div className="fixed top-0 left-0 z-[100] w-full h-[100vh] bg-black bg-opacity-30 flex justify-center items-center">
      <div id={'modal-content'} 
      // className=""
      >
        {children}
      </div>
    </div>
  );
};
