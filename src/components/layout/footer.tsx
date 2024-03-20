'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import footerImg from '@/assets/images/footerLogo.svg';
import { requisites, socials } from '@/utils/constants';
import Link from 'next/link';
import { useAppSelector } from '@/store/store';

export const Footer = () => {
  const isMobileMenuOpen = useAppSelector((store) => store.main.isMobileMenuOpen);

  return (
    <footer className={`w-full py-[80px] ${isMobileMenuOpen && 'hidden'}`}>
      <div className="flex max-w-[1200px] w-full mx-auto justify-between gap-[26px]">
        <div className="w-[570px] h-[718px] bg-[#C4C4C4]"></div>
        {/* <Image
          src={healtMangementImage}
          alt="Спортивная медицина"
          className="rounded-[30px] h-[507px] w-[590px]"
        /> */}

        <div className="text-default-18 flex flex-col gap-[15px] max-w-[590px]">
          <Image src={footerImg} alt="Спортивная медицина" className=" w-[320px] mb-[50px]" />

          <div className="flex gap-[60px] text-default-16 font-normal">
            <div className=" flex flex-col gap-[30px]">
              <span className="text-footer-groups text-custom-green">Адрес</span>
              <p className=" w-full font-normal">
                Санкт-Петербург, ул. Жукова 3А{' '}
                <span className="text-custom-green">
                  (от м. Финляндский вокзал, 10 минут на машине)
                </span>
              </p>

              <span className="text-footer-groups text-custom-green font-semibold">Реквизиты</span>
              <ul>
                {requisites.map((req) => (
                  <li key={req.id} className="leading-[21px] font-normal">
                    {req.requisit}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" flex flex-col gap-[30px]">
              <span className="text-footer-groups text-custom-green">Время работы</span>
              <p className="max-w-[264px] font-normal flex flex-col">
                Мы работаем
                <span className="font-semibold">пн-сб</span>
                <span className="font-semibold"> с 9:00 до 19:00</span>
              </p>

              <span className="text-footer-groups text-custom-green font-semibold">Контакты</span>
              <div className="flex flex-col font-semibold underline">
                <Link href={'/'} className="mb-[7px] font-normal">
                  medcenter@aristomed.ru
                </Link>
                <span>+7 (812) 443-86-59</span>
                <span>+7 (931) 999-28-03</span>
                <ul className="flex gap-[10px] mt-[12px]">
                  {socials.map((social) => (
                    <li key={social.id}>
                      <Link href={social.link}>
                        <Image src={social.img} alt={social.alt} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Button variant={'tertiary'} className="w-[290px] h-[56px] rounded-[46px]">
            Заказать обратный звонок
          </Button>
          <div className="flex flex-col gap-[20px] text-[12px] leading-[16px] font-medium text-footer-info mt-[50px]">
            <p>
              Данный веб-сайт использует файлы cookie с целью улучшения качества услуг и анализа
              особенностей работы пользователей в Интернете.{' '}
            </p>

            <p>
              Если Вы продолжаете пользоваться веб-сайтом, это значит, что Вы даете Согласие на
              обработку персональных данных и принимаете нашу Политику обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
