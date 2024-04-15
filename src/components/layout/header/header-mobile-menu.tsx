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
} from '@/utils/constants';
import { DropDown } from '@/app/sections/drop-down';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/store/store';
import { toggleMobileMenuOpen } from '@/store/mainSlice';

export const HeaderMobileMenu = ({toggle} : {toggle: () => void}) => {
  const handleOpenModal = () => {
    // dispatch(toggleMobileMenuOpen());
    toggle()
  };

  return (
    <div
      className="fixed w-full bg-custom-gray top-0 left-0 pt-[40px] overflow-scroll h-full"
      // tabIndex={-1}
      // ref={menuRef}
    >
      <div className="max-w-[1200px] w-full mx-auto px-[20px] flex flex-col h-full">
        <div className="flex justify-between ">
          <Link href={'/'} className="flex items-center">
            <Image src={logo} width={140} height={18} alt="Логотип" className="h-[18px]" />
          </Link>
          <button onClick={handleOpenModal}>
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
          <DropDown triggerText={'Медицинский центр'} type={'header'}>
            <div className="flex flex-col my-[10px]">
              <DropDown
                triggerText={'Консультации врачей-специалистов:'}
                list={specialistDoctors}
                type={'headerV2'}
              />

              <DropDown
                triggerText={'Детские программы:'}
                list={childrensPrograms}
                type={'headerV2'}
              />
              <DropDown
                triggerText={'Анализы и диагностика:'}
                list={analysisAndDiagnostics}
                type={'headerV2'}
              />

              <ul className="flex flex-col flex-wrap gap-[15px] font-semibold">
                {medicalDireactions.map((direction) => (
                  <li className="" key={direction.id}>
                    <Link href={direction.link} className="text-[16px] font-normal leading-[19px]">
                      {direction.speciality}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </DropDown>

          <DropDown triggerText={'Спортивная медицина'} type={'header'}>
            <div className="flex flex-col my-[10px]">
              <DropDown
                triggerText={'Услуги и специалисты:'}
                list={servicesedAndSpecialists}
                type={'headerV2'}
              />

              <DropDown
                triggerText={'Функциональные обследования:'}
                list={functionalExaminations}
                type={'headerV2'}
              />

              <Link href={'/'} className="text-[16px] font-normal leading-[19px] pb-[15px]">
                Комплексные программы
              </Link>
            </div>
          </DropDown>

          <DropDown triggerText={'Управление здоровьем'} type={'header'}>
            <div className="flex flex-col my-[10px]">
              <DropDown
                triggerText={'Комплексные программы'}
                list={cardioPrograms}
                type={'headerV2'}
              />
            </div>
          </DropDown>

          <div>
            <Button variant={'transparent'}>Записаться на прием</Button>
          </div>
        </div>

        <ul className="flex flex-col gap-[10px] mt-[auto] pb-[99px] text-[16px] leading-[19px] font-medium text-header-links pt-[20px]">
          <li>
            <Link href={'/'}>О центре</Link>
          </li>
          <li>
            <Link href={'/'}>Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
