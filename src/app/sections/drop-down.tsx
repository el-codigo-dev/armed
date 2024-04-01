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
  type:
    | 'header'
    | 'questions'
    | 'directions'
    | 'directionsV2'
    | 'headerV2'
    | 'directionsMobile'
    | 'directionsV2Mobile';
};

export const DropDown = ({
  triggerText,
  children,
  list,
  maxHeight,
  color,
  borderStyles,
  type,
}: DropdownProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const dropDownStyles = {
    headerV2: {
      container: '',
      trigerFrame: '',
      text: 'text-[16px] font-normal leading-[19px] underline pb-[15px]',
      arrow: {
        default: '#85A080',
        opened: '#85A080',
      },
      list: 'pl-[17px] font-normal text-[14px] leading-[17px] mb-[15px]',
      link: 'max-w-[260px]',
    },
    header: {
      container: 'rounded-[0]',
      trigerFrame: 'border-b-[1px] border-custom-green pb-[5px]',
      text: 'text-header-drop ',
      arrow: {
        default: '#85A080',
        opened: '#85A080',
      },
      list: '',
      link: 'max-w-[260px]',
    },

    questions: {
      container: 'pb-[15px]',
      trigerFrame: `rounded-[20px] pr-[20px] pl-[30px] py-[18px] max-sm:py-[15px] max-sm:pr-[10px] max-sm:pl-[9px] ${
        isMenuVisible && 'bg-white-default '
      } `,
      text: `text-drop-down rounded-[20px] ${
        isMenuVisible && 'text-custom-green'
      } max-sm:max-w-[200px]`,
      arrow: {
        default: 'white',
        opened: '#85A080',
      },
      list: '',
      link: 'max-w-[260px] ',
    },

    directions: {
      container: 'border-b-2 border-custom-green last:border-none',
      trigerFrame: ' pb-[30px]',
      text: 'text-trigger max-sm:py-[10px] max-sm:px-[15px] max-w-[255px] break-word',
      arrow: {
        default: '#85A080',
        opened: '#85A080',
      },
      list: 'border-t-2 border-custom-green pt-[20px] mb-[30px] ',
      link: 'max-w-[260px]',
    },
    directionsV2: {
      container: '',
      trigerFrame: '',
      text: 'text-custom-green text-default-32',
      arrow: {
        default: '#85A080',
        opened: '#85A080',
      },
      list: 'mb-[30px] ',
      link: 'max-w-[260px]',
    },

    directionsV2Mobile: {
      container: '',
      trigerFrame: '',
      text: 'text-custom-green text-default-32',
      arrow: {
        default: '',
        opened: '',
      },
      list: 'mb-[30px] ',
      link: 'max-w-[260px]',
    },

    directionsMobile: {
      container: 'relative bg-white-default rounded-[40px]',
      trigerFrame: `rounded-[40px] px-[15px] py-[10px] text-trigger  ${
        isMenuVisible && 'bg-secondary-button-color absolute top-0 w-full  '
      } `,
      text: `  ${isMenuVisible && 'text-white-default'} `,
      arrow: {
        default: '#85A080',
        opened: 'white',
      },
      list: 'pt-[50px] pb-[20px] px-[15px] rounded-[20px] bg-white-default box-content text-list',
      link: 'max-w-[160px]',
    },
  };

  return (
    <div className={dropDownStyles[type]?.container}>
      <span
        className={classNames(
          'flex cursor-pointer justify-between items-center gap-[8px]',
          borderStyles,
          color && 'rounded-[20px]',
          color && isMenuVisible && `bg-${color}`,

          dropDownStyles[type]?.trigerFrame,
        )}
        onClick={toggleMenu}>
        <span className={classNames(dropDownStyles[type]?.text)}>{triggerText}</span>
        <ArrowIcon
          width={
            // windowWidth > 1280 ?
            40
            //  : 20
          }
          height={
            // windowWidth > 1280 ?
            20
            // : 10
          }
          color={
            isMenuVisible ? dropDownStyles[type]?.arrow.opened : dropDownStyles[type]?.arrow.default
          }
          className={`transform transition-transform duration-200 ease-in-out ${
            isMenuVisible ? 'rotate-180 ' : ''
          }`}
        />
      </span>
      {isMenuVisible &&
        (list ? (
          <ul
            className={classNames(
              `flex flex-col flex-wrap gap-[15px] overflow-hidden border-opacity-20`,
              dropDownStyles[type]?.list,
            )}
            style={{ maxHeight: maxHeight && `${maxHeight}px` }}>
            {list?.map((item) => (
              <li key={item.id} className={dropDownStyles[type]?.link}>
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
