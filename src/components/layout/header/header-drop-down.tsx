'use client';

import React, { useState, useEffect } from 'react';
import arrow from '@/assets/images/arrow-icon.svg';
import ArrowIcon from '@/components/ui/icons/arrow-icon';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';

type DropDownProps = {
  triggerText: string;
  children?: React.ReactNode;
  position?: string;
};

export const HeaderDropDown = ({ triggerText, children, position }: DropDownProps) => {
  const [isMouseOverTrigger, setMouseOverTrigger] = useState(false);
  const [isMouseOverMenu, setMouseOverMenu] = useState(false);

  const openMenu = () => {
    setMouseOverTrigger(true);
  };

  const closeMenu = () => {
    if (!isMouseOverMenu) {
      setTimeout(() => {

        setMouseOverTrigger(false);
      }, 500);
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
    if (!isMouseOverTrigger || !isMouseOverMenu) {
      return;
    }
    const timer = setTimeout(() => {
      closeMenu();
    }, 500);

    return () => clearTimeout(timer);
  }, [isMouseOverTrigger, closeMenu]);

  console.log(isMouseOverTrigger);

  return (
    <div className="">
      <span
        className="text-white cursor-pointer flex items-center hover:underline hover:text-text-green"
        onMouseEnter={handleTextHover}
        onMouseLeave={closeMenu}>
        {triggerText}


        <IoIosArrowDown
          size={20}
          className={classNames(
            isMouseOverTrigger ? 'rotate-180' : '',
            'transform transition-transform duration-200 ease-in-out',
          )}
        />
      </span>
      {(isMouseOverTrigger || isMouseOverMenu) && (
        <div
          className={`absolute bg-white border border-gray-200 shadow-lg mt-2 z-30 p-[37px] rounded-[23px] 
          ${position ? `right-[${position}]` : 'right-[8%]'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {children}
        </div>
      )}
    </div>
  );
};
