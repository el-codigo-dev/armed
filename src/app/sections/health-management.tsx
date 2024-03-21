import { Button } from '@/components/ui/button';
import Image from 'next/image';

import healtMangementImage from '@/assets/images/health-managment.png';

export const HealthManagement = () => {
  return (
    <section className="w-full text-custom-black py-[80px] max-xl:py-[60px]">
      <div className="flex max-w-[1200px] w-full mx-auto justify-between gap-[20px] max-xl:flex-col max-xl:px-[20px] max-xl:gap-[30px]">
        <Image
          src={healtMangementImage}
          alt="Спортивная медицина"
          className="rounded-[30px] h-[507px] w-[590px] object-cover max-sm:h-[372px] mx-auto"
        />

        <div className="text-default-18 flex flex-col gap-[15px] text-default-18 max-w-[590px] max-xl:gap-[20px]">
          <h2 className="h2-text-black max-w-[590px] mb-[15px] max-xl:mb-0">Управление здоровьем</h2>
          <p className="text-custom-green">
            Благодаря профилактическим процедурам и персонализированной медицине, возможно добиться
            управления здоровьем.
          </p>
          <p className="text-custom-green">
            Для контроля за развитием заболеваний или отслеживанием состояния пациента используются:
          </p>

          <ul className="flex flex-col gap-[15px] list-disc pl-[20px] font-medium  text-[16px] leading-[19px]">
            <li>
              индивидуальные программы обследования, которые разрабатываются личным врачом под
              задачи пациента,
            </li>

            <li>
              комплексные обследования организма с применением современных лабораторных,
              функциональных и инструментальных методов 
            </li>
          </ul>
          <div className="mt-auto max-sm:self-center">
            <Button variant={'primary'}>Записаться на прием</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
