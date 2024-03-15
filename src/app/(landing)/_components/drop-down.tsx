'use client';

import ArrowIcon from '@/components/ui/icons/arrow-icon';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

type DropdownProps = {
  triggerText: string;
  children?: React.ReactNode;
  list?: { id: number; speciality: string; link: string }[];
  maxHeight?: number;
  triggerTextStyles?: string;
};

export const DropDown = ({
  triggerText,
  children,
  list,
  maxHeight,
  triggerTextStyles,
}: DropdownProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  console.log(maxHeight);

  return (
    <div className={`bord ${list && 'border-b-2'} border-custom-green`}>
      <span
        className={classNames(
          'flex cursor-pointer justify-between items-center',
          list && 'pb-[30px]',
        )}
        onClick={toggleMenu}>
        <span
          className={classNames(
            'font-semibold break-words text-[21px] ',
            triggerTextStyles,
            list && 'max-w-[255px]',
          )}>
          {triggerText}
        </span>
        <ArrowIcon
          width={40}
          height={20}
          color="#85A080"
          className={` ml-2 transform transition-transform duration-200 ease-in-out ${
            isMenuVisible ? 'rotate-180' : ''
          }`}
        />
      </span>
      {isMenuVisible &&
        (list ? (
          <ul
            className={classNames(
              `flex flex-col flex-wrap gap-[15px] mb-[30px] overflow-hidden border-t-2 border-custom-green pt-[20px] border-opacity-20`,
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
