import { Button } from '@/components/ui/button';
import { ISale } from '@/types/apiTypes';
import { baseUrl } from '@/utils/config';
import Image from "next/image";

export const PromotionCard = ({ sale, }: { sale: ISale}) => {
  return (
    <li
      className="flex bg-card-color  p-[25px] rounded-[20px] flex-col h-[500px]">
      <Image
          width={337}
          height={250}
        src={baseUrl + sale.image}
        alt="Узи"
        className="w-[full] object-cover h-[250px] rounded-[15px]"
        loading={"lazy"}
      />

      <div className="mt-[25px] flex flex-col">
        <h3 className="text-promotion-header  mb-[10px]">{sale.title}</h3>
        <p className="text-default-16 mb-[15px] opacity-50">{sale.dates}</p>

        {/* <div className="flex gap-[15px] items-center mb-[20px]">
        <span className="text-custom-green text-[24px] font-bold">7 000 ₽</span>
        <span className="line-through text-[16px] font-medium leading-[20px] opacity-50">
          14 300 ₽
        </span>
      </div> */}


      </div>
      <div className='self-center mt-auto'>
      <Button variant={'secondary'}>
          Подробнее
        </Button></div>
    </li>
  );
};
