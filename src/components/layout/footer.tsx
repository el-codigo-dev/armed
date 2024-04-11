'use client';

import { useAppSelector } from '@/store/store';
import Image from 'next/image';

import footerLogo from '../../assets/images/footer/footerLogo.png';
import Link from 'next/link';
import phone from '@/assets/images/footer/phone.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsFillGeoAltFill } from 'react-icons/bs';

export const Footer = () => {
  const isMobileMenuOpen = useAppSelector((store) => store.main.isMobileMenuOpen);

  return (
    <footer
      className={`w-full py-[45px] ${
        isMobileMenuOpen && 'hidden'
      } max-xl:pb-[60px] max-xl:pt-[100px] relative bg-footerBg bg-custom-green text-white max-lg:py-[45px]`}>
      <div className="flex max-w-[1200px] w-full mx-auto max-sm:px-[20px] max-sm:flex-col max-xl:px-[20px] justify-between gap-[15px] pt-[50px] max-lg:flex-col max-lg:py-0">
        <div className="text-footer-req flex flex-col gap-[25px]">
          <Image src={footerLogo} width={280} height={78} alt="Лого" className="h-[78px]" />
          <div className="">
            <p>ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ,</p>
            <p>НЕОБХОДИМА КОНСУЛЬТАЦИЯ</p>
            <p>СПЕЦИАЛИСТА</p>
          </div>

          <Link
            className="mt-[25px] font-semibold max-lg:mt-0 max-lg:mb-[35px]"
            href={'/files/license.pdf'}>
            Лицензия
          </Link>
        </div>

        <span className="w-[1px] bg-white max-lg:h-[1px] max-lg:w-full" />

        <div className="flex flex-col  w-full max-w-[600px] max-lg:max-w-none max-lg:pt-[20px]">
          <h3 className="text-[26px] leading-[60px] font-semibold font-nextArt mb-[20px] max-lg:hidden">
            Контакты
          </h3>

          <div className="flex gap-[110px] mb-[20px] text-[16px]  max-lg:justify-between max-lg:gap-[10px]">
            <Link
              href={'tel:+78124438659'}
              className="flex gap-2 items-center h-[20px] hover:text-text-green transition-colors duration-300 max-lg:h-[auto]">
              <FaPhoneAlt size={20} />
              <p>+7 (812) 443-86-59</p>
            </Link>
            <span className="flex gap-2 items-center h-[20px] max-lg:h-[auto]">
              <BsFillGeoAltFill size={20} />
              <p>Санкт-Петербург, ул. Жукова, д. 3А</p>
            </span>
          </div>
          <Link
            href={'mailto:medcenter@aristomed.ru'}
            className="flex gap-2 items-center  h-[20px] hover:text-text-green max-lg:h-[auto]">
            <IoMdMail size={20} />
            <p>medcenter@aristomed.ru</p>
          </Link>
          <span className="self-end mt-auto font-semibold max-lg:self-start max-lg:mt-[20px] ">© Aristomed 2024</span>
        </div>
      </div>
    </footer>
  );
};
