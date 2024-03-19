'use client';

import { HeaderDropDown } from './header-drop-down';

import phoneImg from '@/assets/images/messengers/phone.svg';
import telegram from '@/assets/images/messengers/tg.svg';
import viber from '@/assets/images/messengers/viber.svg';

import logo from '@/assets/images/logo.svg';
import menu from '@/assets/images/header/headerMenu.svg';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AboutCenterMenu from './about-center-menu';
import { MedicalCenterMenu } from './medical-center-menu';
import { SportsMedicineMenu } from './sports-medicine-menu';
import useScrollHandler from '@/hooks/use-scroll-handler';
import classNames from 'classnames';
import { HealthManagementMenu } from './health-management-menu';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState } from 'react';
import { HeaderMobileMenu } from './header-mobile-menu';

export const Header = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrolled = useScrollHandler();
  const [windowWidth] = useWindowSize();



  return (
    <header
      className={classNames(
        'fixed top-0 left-0 w-full bg-transparent min-h-[132px] pt-[62px] text-[16px] font-medium leading-[21px] z-20 transition-all duration-500  max-xl:pt-[40px] max-xl:min-h-[auto]',
        scrolled &&
          'pt-[32px] !bg-custom-green !bg-opacity-90  shadow-xl max-xl:pt-[20px]  max-xl:pb-[20px]',
      )}>
      <div className="max-w-[1200px] w-full mx-auto flex justify-between max-xl:px-[20px] max-xl:items-center">
        {windowWidth > 1280 ? (
          <>
            <Link href={'/'}>
              <Image src={logo} width={300} height={38} alt="Логотип" className="h-[38px]" />
            </Link>
            <div className="flex flex-col  items-end gap-[15px] relative">
              <div className="flex gap-[30px] items-center">
                <HeaderDropDown triggerText={'О центре'} position="40%">
                  <AboutCenterMenu />
                </HeaderDropDown>

                <Link
                  className="text-text-green hover:underline"
                  href="https://yandex.ru/maps/org/aristomed/135703313008/?ll=30.402001%2C59.963379&z=13">
                  Жукова 3А
                </Link>

                <Link
                  className="flex gap-[3px] text-text-green hover:underline"
                  href="https://yandex.ru/maps/org/aristomed/135703313008/?ll=30.402001%2C59.963379&z=13">
                  <Image src={phoneImg} alt="Телефон" />8 812 999 28 05
                </Link>
                <Button
                  variant={'tertiary'}
                  className="rounded-[30px] w-[244px] h-[40px] bg-opacity-75 text-[16px]">
                  Записаться на прием
                </Button>
              </div>

              <div className="flex gap-[6px] justify-center absolute top-[35px] right-[47%]">
                <Link href={'/'}>
                  <Image src={telegram} alt="Телеграмм" />
                </Link>
                <Link href={'/'}>
                  <Image src={viber} alt="Вайбер" />
                </Link>
              </div>

              <div className="flex gap-[30px]">
                <HeaderDropDown triggerText={'МЕДИЦИНСКИЙ ЦЕНТР'}>
                  <MedicalCenterMenu />
                </HeaderDropDown>

                <HeaderDropDown triggerText={'СПОРТИВНАЯ МЕДИЦИНА'}>
                  <SportsMedicineMenu />
                </HeaderDropDown>

                <HeaderDropDown triggerText={'УПРАВЛЕНИЕ ЗДОРОВЬЕМ'}>
                  <HealthManagementMenu />
                </HeaderDropDown>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link href={'/'}>
              <Image src={logo} width={140} height={18} alt="Логотип" className="h-[18px]" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Image src={menu} alt='Меню'/>
            </button>


          </>
        )}
      </div>
      {isMobileMenuOpen && <HeaderMobileMenu handleClose={() => setIsMobileMenuOpen(false)} />}

    </header>


  );
};
