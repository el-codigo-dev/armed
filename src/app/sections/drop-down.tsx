'use client';

import ArrowIcon from '@/components/ui/icons/arrow-icon';
import { useWindowSize } from '@/hooks/use-window-size';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

type DropdownProps = {
  triggerText: string;
  children?: React.ReactNode;
  list?: { id: number; speciality: string; link: string }[];
  maxHeight?: number;
  triggerTextStyles?: string;
  color?: string;
  borderStyles?: string;
  hasMainBorder?: boolean;
  listStyles?: string;
};

export const DropDown = ({
  triggerText,
  children,
  list,
  maxHeight,
  triggerTextStyles,
  color,
  borderStyles,
  hasMainBorder,
  listStyles
}: DropdownProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [windowWidth] = useWindowSize();




  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  // console.log(maxHeight);

  return (
    <div className={`${hasMainBorder && 'border-b-2 border-custom-green'} `}>
      <span
        className={classNames(
          'flex cursor-pointer justify-between items-center',
          // list && 'pb-[30px]',
          borderStyles,
          color && 'rounded-[20px]',
          color && isMenuVisible && `bg-${color}`
        )}
        onClick={toggleMenu}>
        <span
          className={classNames(
            'break-words',
            triggerTextStyles,
            list && 'max-w-[255px]',
            color && isMenuVisible &&'text-custom-green'
          )}>
          {triggerText}
        </span>
        <ArrowIcon
          width={windowWidth > 1280 ? 40 : 20}
          height={windowWidth > 1280 ? 20 : 10}
          color={!isMenuVisible && color || "#85A080"}
          className={` ml-2 transform transition-transform duration-200 ease-in-out ${
            isMenuVisible ? 'rotate-180' : ''
          }`}
        />
      </span>
      {isMenuVisible &&
        (list ? (
          <ul
            className={classNames(
              `flex flex-col flex-wrap gap-[15px] overflow-hidden mb-[30px]  border-opacity-20`, 
              listStyles
            )}
            style={{ maxHeight: maxHeight && `${maxHeight}px` }}>
            {list?.map((item) => (
              <li key={item.id} className="max-w-[260px]">
                <Link
                  href={item.link}
                  className="font-medium underline text-link-color first-letter:break-words">
                  {item.speciality}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          children
        ))}
    </div>
  );
};
