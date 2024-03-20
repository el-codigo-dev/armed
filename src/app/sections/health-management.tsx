import { Button } from '@/components/ui/button';
import Image from 'next/image';

import healtMangementImage from '@/assets/images/health-managment.png';

export const HealthManagement = () => {
  return (
    <section className="w-full text-custom-black  py-[80px]">
      <div className="flex max-w-[1200px] w-full mx-auto justify-between gap-[20px]">
        <Image
          src={healtMangementImage}
          alt="Спортивная медицина"
          className="rounded-[30px] h-[507px] w-[590px]"
        />

        <div className="text-default-18 flex flex-col gap-[15px] max-w-[590px]">
          <h2 className="h2-text-black max-w-[590px] mb-[15px]">Управление здоровьем</h2>
          <p className="text-custom-green">
            Благодаря профилактическим процедурам и персонализированной медицине, возможно добиться
            управления здоровьем.
          </p>
          <p className="text-custom-green">
            Для контроля за развитием заболеваний или отслеживанием состояния пациента используются:
          </p>

          <ul className="flex flex-col gap-[15px] list-disc pl-[20px] text-default-16">
            <li>
              индивидуальные программы обследования, которые разрабатываются личным врачом под
              задачи пациента,
            </li>

            <li>
              комплексные обследования организма с применением современных лабораторных,
              функциональных и инструментальных методов 
            </li>
          </ul>
          <div className="mt-auto">
            <Button variant={'primary'}>Записаться на прием</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
