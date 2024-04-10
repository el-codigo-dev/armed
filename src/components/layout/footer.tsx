'use client';

import { useAppSelector } from '@/store/store';
import Image from 'next/image';

import footerLogo from '../../assets/images/footer/footerLogo.png';
import Link from 'next/link';

export const Footer = () => {
  const isMobileMenuOpen = useAppSelector((store) => store.main.isMobileMenuOpen);

  return (
    <footer
      className={`w-full py-[45px] ${
        isMobileMenuOpen && 'hidden'
      } max-xl:pb-[60px] max-xl:pt-[100px] relative bg-footerBg bg-custom-green text-white`}>
      <div className="flex max-w-[1200px] w-full mx-auto max-sm:px-[20px] max-sm:flex-col max-xl:px-[20px] justify-between gap-[15px]">
        <div className="text-footer-req flex flex-col gap-[25px]  pt-[50px] ">
          <Image src={footerLogo} width={280} height={78} alt="Лого" className="h-[78px]" />
          <div className="">
            <p>ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ,</p>
            <p>НЕОБХОДИМА КОНСУЛЬТАЦИЯ</p>
            <p>СПЕЦИАЛИСТА</p>
          </div>

          <Link className="mt-[25px]" href={'/files/license.pdf'}>
            Лицензия
          </Link>
        </div>

        <span className="w-[1px] bg-white" />

        <div className="flex flex-col  pt-[50px] w-full max-w-[600px] ">
          <h3 className="text-[26px] leading-[60px] font-semibold font-nextArt mb-[20px]">
            Контакты
          </h3>

          <div className="flex gap-[110px] mb-[20px] text-[16px] leading-[38px] ">
            <Link href={'tel:+78124438659"'}>+7 (812) 443-86-59</Link>
            <span>Санкт-Петербург, ул. Жукова, д. 3А</span>
          </div>
          <Link href={'mailto:medcenter@aristomed.ru'}>medcenter@aristomed.ru</Link>
          <span className="self-end mt-auto">© Aristomed 2024</span>
        </div>
      </div>
    </footer>
  );
};
