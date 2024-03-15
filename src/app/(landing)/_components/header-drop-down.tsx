'use client';

import React, { useState, useEffect } from 'react';
import arrow from '@/assets/images/arrow-icon.svg';
import ArrowIcon from '@/components/ui/icons/arrow-icon';

type DropDownProps = {
  triggerText: string;
  children?: React.ReactNode;
};

export const HeaderDropDown = ({ triggerText, children }: DropDownProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [isMouseOverMenu, setMouseOverMenu] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    if (!isMouseOverMenu) {
      setTimeout(() => {
        setMenuVisible(false);
      }, 3000); 
    }
  };

  const handleMouseEnter = () => {
    setMouseOverMenu(true);
  };

  const handleMouseLeave = () => {
    setMouseOverMenu(false);
    closeMenu();
  };

  const handleTextHover = () => {
    openMenu();
  };

  useEffect(() => {
    if (!isMenuVisible) {
      return; 
    }

    const timer = setTimeout(() => {
      closeMenu();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [isMenuVisible]);

  return (
    <div className="relative">
      <span
        className="text-white cursor-pointer hover:underline flex items-center"
        onMouseEnter={handleTextHover}
        onMouseLeave={closeMenu}>
        {triggerText}
        <ArrowIcon
          className={`ml-[5px] mt-[2px] transform transition-transform duration-200 ease-in-out ${
            isMenuVisible ? 'rotate-180' : ''
          }`}
        />
      </span>
      {
      isMenuVisible && 
      
      (
        <div
          className="absolute bg-white border border-gray-200 shadow-lg mt-2 z-30 p-[37px] rounded-[23px] 
          
          right-0
          
          "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {children}
        </div>
      )}
    </div>
  );
};
