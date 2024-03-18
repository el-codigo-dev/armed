import { Button } from '@/components/ui/button';
import { PromotionCardList } from './home-page/components/promotion-card-list';

export const Promotions = () => {
  return (
    <section className="w-full pt-[80px] pb-[80px]">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col">
        <h2 className="uppercase font-semibold text-custom-black text-[54px] leading-[59px] mb-[5px]">
          В ЭТОМ МЕСЯЦЕ!
        </h2>
        <p className="text-custom-green text-[32px] leading-[38px] font-medium mb-[30px]">
          Акции и специальные предложения
        </p>

        <PromotionCardList />

      </div>
    </section>
  );
};
