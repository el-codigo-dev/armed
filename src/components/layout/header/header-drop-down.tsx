'use client';

import React, { useState, useEffect } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';

type DropDownProps = {
  triggerText: string;
  children?: React.ReactNode;
  align: 'start' | 'end';
};
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = PopoverPrimitive.Content;

export const HeaderDropDown = ({ triggerText, children, align }: DropDownProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);



  return (
    <Popover open={isPopoverOpen}>
      <div onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
        <PopoverTrigger>
          <span className="text-white cursor-pointer flex items-center hover:underline hover:text-text-green">
            {triggerText}

            <IoIosArrowDown
              size={20}
              className={classNames(
                isPopoverOpen ? 'rotate-180' : '',
                'transform transition-transform duration-200 ease-in-out',
              )}
            />
          </span>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={0}
          align={align}
          className={classNames(
            'flex  cursor-default  rounded-[10px] p-1 pt-[8px] border-none',
            'data-[state=open]:animate-enter data-[state=closed]:animate-out ',
          )}>
          <div className={`bg-white border border-gray-200 shadow-lg z-30 p-[37px] rounded-[23px]`}>
            {children}
          </div>
        </PopoverContent>
      </div>
    </Popover>
  );
};

