import { HeaderDropDown } from './header-drop-down';

import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AboutCenterMenu from './about-center-menu';
import { MedicalCenterMenu } from './medical-center-menu';
import { SportsMedicineMenu } from './sports-medicine-menu';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-custom-green min-h-[170px] pt-[62px] text-[16px] font-medium leading-[21px] z-20 bg-opacity-90 font-monserat">
      <div className="w-[1200px] mx-auto flex justify-between">
        <Image src={logo} width={300} height={38} alt="Логотип" />

        <div className="flex flex-col gap-[15px] items-end">
          <div className="flex gap-[30px] items-center">


            <HeaderDropDown triggerText={'О центре'} >
              <AboutCenterMenu />
            </HeaderDropDown>


            <Link
              className="text-text-green hover:underline"
              href="https://yandex.ru/maps/org/aristomed/135703313008/?ll=30.402001%2C59.963379&z=13">
              Жукова 3А
            </Link>

            <Link
              className="text-text-green hover:underline"
              href="https://yandex.ru/maps/org/aristomed/135703313008/?ll=30.402001%2C59.963379&z=13">
              8 812 999 28 05
            </Link>
            <Button variant={'tertiary'} className="rounded-[30px] w-[244px] h-[40px] bg-opacity-75 text-[16px]">
              Записаться на прием
            </Button>
          </div>
          <div className="flex gap-[30px]">

            <HeaderDropDown triggerText={'МЕДИЦИНСКИЙ ЦЕНТР'}>
              <MedicalCenterMenu />
            </HeaderDropDown>


             <HeaderDropDown triggerText={'СПОРТИВНАЯ МЕДИЦИНА'}>
              <SportsMedicineMenu />
             </HeaderDropDown>



            <HeaderDropDown triggerText={'УПРАВЛЕНИЕ ЗДОРОВЬЕМ(-)'} /> 
          </div>
        </div>
      </div>
    </header>
  );
};
