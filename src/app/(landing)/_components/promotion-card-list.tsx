import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const PromotionCardList = () => {



// сделать PromotionCard комопонент, когда решится проблема с беком


  return (
    <ul className="grid grid-cols-3 gap-[19px]">
      <li className="flex bg-card-color min-h-[550px] p-[25px] rounded-[20px] flex-col">
        <img
          src={'https://corp.evalar.ru/upload/iblock/0f5/fl0amyodzasa8ys916jfx9d1q47cicbr.jpg'}
          alt="Узи"
          className="w-[full] object-cover h-[250px] rounded-[15px]"
        />

        <div className="mt-[25px] flex flex-col">
          <h3 className="font-bold text-[24px] leading-[30px] mb-[10px]">
            Комплексное УЗИ всего&nbsp;тела
          </h3>
          <p className="font-medium text-[16px] leading-[20px] mb-[15px]">
            Развернутое обследование всего организма за одно посещение
          </p>
          <div className="flex gap-[15px] items-center mb-[20px]">
            <span className="text-custom-green text-[24px] font-bold">7 000 ₽</span>
            <span className="line-through text-[16px] font-medium leading-[20px] opacity-50">
              14 300 ₽
            </span>
          </div>
          <Button variant={'secondary'} className="w-[181px] h-[56px] self-center">
            Подробнее
          </Button>
        </div>
      </li>
    </ul>
  );
};
