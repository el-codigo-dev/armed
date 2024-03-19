import Link from 'next/link';
import logo from '@/assets/images/header/greenHeaderMenu.svg';
import close from '@/assets/images/header/close.svg';

import Image from 'next/image';
import {
  analysisAndDiagnostics,
  cardioPrograms,
  childrensPrograms,
  functionalExaminations,
  medicalDireactions,
  servicesedAndSpecialists,
  socials,
  specialistDoctors,
  sportsPrograms,
} from '@/utils/constants';
import { DropDown } from '@/app/sections/drop-down';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

export const HeaderMobileMenu = ({ handleClose }: { handleClose: () => void }) => {






    // useEffect(() => {
    //     // Блокировка скролла на основной странице при открытом мобильном меню
    //     document.body.style.overflow = 'hidden';
    //     return () => {
    //       // Восстановление скролла на основной странице при закрытии мобильного меню
    //       document.body.style.overflow = 'unset';
    //     };
    //   }, []);

    // const menuRef = useRef(null);

    // useEffect(() => {
    //   if (menuRef.current) {
    //     menuRef.current.focus();
    //   }
    // }, []);


  return (
    <div className="fixed w-full bg-white-default top-0 left-0 pt-[40px]      overflow-y-scroll min-h-[100vh]"
    // tabIndex={-1}
    // ref={menuRef}
    >
      <div className="max-w-[1200px] w-full mx-auto px-[20px] h-full overflow-y-scroll">




        <div className="flex justify-between ">
          <Link href={'/'} className='flex items-center'>
            <Image src={logo} width={140} height={18} alt="Логотип" className="h-[18px]" />
          </Link>
          <button onClick={handleClose}>
            <Image src={close} alt="Закрыть" />
          </button>
        </div>

        <ul className="flex gap-[10px] mt-[25px] mb-[10px]">
          {socials.map((social) => (
            <li key={social.id}>
              <Link href={social.link}>
                <Image src={social.img} alt={social.alt} />
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-[20px] leading-[21px] text-custom-green font-medium">
          8 812 999 28 05
        </span>

        <div className="mt-[94px] flex flex-col gap-[10px]">
          <DropDown
            triggerText={'Медицинский центр'}
            triggerTextStyles={'text-[20px] font-medium leading-[24px]'}
            borderStyles={'border-b-[1px] border-custom-green rounded-[0] pb-[5px]'}>
            <div className="flex flex-col my-[10px]">
              <DropDown
                triggerText={'Консультации врачей-специалистов:'}
                list={specialistDoctors}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />

              <DropDown
                triggerText={'Детские программы:'}
                list={childrensPrograms}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />
              <DropDown
                triggerText={'Анализы и диагностика:'}
                list={analysisAndDiagnostics}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />

              <ul className="flex flex-col flex-wrap gap-[15px] font-semibold">
                {medicalDireactions.map((direction) => (
                  <li className="" key={direction.id}>
                    <Link
                      href={direction.link}
                      className="text-[16px] font-normal leading-[19px] pb-[15px]">
                      {direction.speciality}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </DropDown>

          <DropDown
            triggerText={'Спортивная медицина'}
            triggerTextStyles={'text-[20px] font-medium leading-[24px]'}
            borderStyles={'border-b-[1px] border-custom-green rounded-[0] pb-[5px]'}>
            <div className="flex flex-col my-[10px]">
              <DropDown
                triggerText={'Услуги и специалисты:'}
                list={servicesedAndSpecialists}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />

              <DropDown
                triggerText={'Функциональные обследования:'}
                list={functionalExaminations}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />

              <Link href={'/'} className="text-[16px] font-normal leading-[19px] pb-[15px]">
                Комплексные программы
              </Link>
            </div>
          </DropDown>

          <DropDown
            triggerText={'Управление здоровьем'}
            triggerTextStyles={'text-[20px] font-medium leading-[24px]'}
            borderStyles={'border-b-[1px] border-custom-green rounded-[0] pb-[5px]'}>
            <div className="flex flex-col my-[10px]">


              <DropDown
                triggerText={'Комплексные программы'}
                list={cardioPrograms}
                triggerTextStyles={'text-[16px] font-normal leading-[19px] underline pb-[15px]'}
                listStyles={'pl-[17px] font-normal text-[14px] leading-[17px]'}
              />

</div>

          </DropDown>


          <Button className='text-button-color w-[226px] h-[24px] font-medium text-[20px] leading-[24px]' variant={'transparent'}>Записаться на прием</Button>
        </div>
      </div>
    </div>
  );
};
