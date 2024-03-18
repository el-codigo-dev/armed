'use client';

import { HeaderDropDown } from './header-drop-down';

import phoneImg from '@/assets/images/messengers/phone.svg';
import telegram from '@/assets/images/messengers/tg.svg';
import viber from '@/assets/images/messengers/viber.svg';

import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AboutCenterMenu from './about-center-menu';
import { MedicalCenterMenu } from './medical-center-menu';
import { SportsMedicineMenu } from './sports-medicine-menu';
import useScrollHandler from '@/hooks/use-scroll-handler';
import classNames from 'classnames';
import { HealthManagementMenu } from './health-management-menu';

export const Header = () => {
  const scrolled = useScrollHandler();

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 w-full bg-transparent min-h-[132px] pt-[62px] text-[16px] font-medium leading-[21px] z-20 transition-all duration-500 ',
        scrolled && '!pt-[32px] !bg-custom-green !bg-opacity-90  shadow-xl',
      )}>
      <div className="max-w-[1240px] w-full mx-auto flex justify-between px-[20px]">
        <Image src={logo} width={300} height={38} alt="Логотип" className="h-[38px]" />

        <div className="flex flex-col  items-end gap-[15px] relative">
          <div className="flex gap-[30px] items-center">
            {/* <div className="relative group">
              <span className="text-white cursor-pointer hover:underline flex items-center group">
                О центре
                <ArrowIcon className="ml-[5px] mt-[2px] transform transition-transform duration-200 ease-in-out group-hover:rotate-180" />
              </span>

              <div className="group-hover:opacity-100 transition-opacity duration-300 absolute top-10 left-0 opacity-0 bg-white px-4 py-2  border border-gray-200 shadow-lg mt-2 z-30 p-[37px] rounded-[23px] right-0">
                <AboutCenterMenu />
              </div>
            </div> */}

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
      </div>
    </header>
  );
};
