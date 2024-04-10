'use client';

import Image from 'next/image';
import contacntsImg from '@/assets/images/contacts/contactsLogo.svg';
import { requisites, socials } from '@/utils/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Contacts = () => {
  return (
    <section className={`w-full py-[80px]  max-xl:pb-[60px] max-xl:pt-[100px] relative`}>
      <div className="flex max-w-[1200px] w-full mx-auto justify-between gap-[26px] max-xl:px-[20px] max-xl:flex-col ">
        <div className="w-[570px] h-[718px] bg-[#C4C4C4] rounded-[25px] mx-auto max-xl:h-[372px]  max-sm:h-[200px] max-sm:w-[335px]" />

        <div className="text-default-18 flex flex-col  max-w-[590px] max-xl:max-w-full">
          <Image
            src={contacntsImg}
            alt="Логотип"
            className=" w-[320px] mb-[50px] max-xl:w-[157px]  max-xl:h-[40px] max-xl:absolute max-xl:top-[40px]"
          />

          <div className="flex gap-[60px] text-default-16 font-normal max-xl:gap-[20px] max-xl:justify-between">
            <div className=" flex flex-col gap-[30px] max-xl:gap-[15px] ">
              <span className="text-footer-groups text-custom-green">Адрес</span>
              <p className=" w-full font-normal">
                Санкт-Петербург, ул. Жукова 3А{' '}
                <span className="text-custom-green">
                  (от м. Финляндский вокзал, 10 минут на машине)
                </span>
              </p>

              <span className="text-footer-groups text-custom-green font-semibold">Реквизиты</span>
              <ul className="text-footer-req">
                {requisites.map((req) => (
                  <li key={req.id} className="">
                    {req.requisit}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" flex flex-col gap-[30px] max-xl:gap-[15px]">
              <span className="text-footer-groups text-custom-green">Время работы</span>
              <p className="max-w-[264px] font-normal flex flex-col">
                Мы работаем
                <span className="font-semibold">пн-сб</span>
                <span className="font-semibold"> с 9:00 до 19:00</span>
              </p>

              <span className="text-footer-groups text-custom-green font-semibold">Контакты</span>
              <div className="flex flex-col font-semibold underline">
                <Link
                  href={'/'}
                  className="mb-[7px] font-normal text-[16px] leading-[20px] max-lg:text-[12px] max-lg:leading-[21px]">
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
          <div className="flex max-sm:mt-[30px] max-sm:justify-center">
            <Button variant={'primary'}>Заказать обратный звонок</Button>
          </div>
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
        {/* </div> */}
      </div>
    </section>
  );
};
