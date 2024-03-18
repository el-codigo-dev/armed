import { Button } from '@/components/ui/button';
import { ISale } from '@/types/apiTypes';
import { baseUrl } from '@/utils/config';

export const PromotionCard = ({ sale, }: { sale: ISale}) => {
  return (
    <li
      className="flex bg-card-color  p-[25px] rounded-[20px] flex-col
    
    
    ">
      <img
        src={baseUrl + sale.image}
        alt="Узи"
        className="w-[full] object-cover h-[250px] rounded-[15px]"
      />

      <div className="mt-[25px] flex flex-col">
        <h3 className="font-bold text-[20px] leading-[30px] mb-[10px]">{sale.title}</h3>
        <p className="font-medium text-[16px] leading-[20px] mb-[15px] opacity-50">{sale.dates}</p>

        {/* <div className="flex gap-[15px] items-center mb-[20px]">
        <span className="text-custom-green text-[24px] font-bold">7 000 ₽</span>
        <span className="line-through text-[16px] font-medium leading-[20px] opacity-50">
          14 300 ₽
        </span>
      </div> */}


      </div>
      <Button variant={'secondary'} className="w-[181px] h-[56px] self-center mt-auto">
          Подробнее
        </Button>
    </li>
  );
};
