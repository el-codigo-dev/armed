import { PromotionCardList } from './home-page/components/promotion-card-list';

export const Promotions = () => {
  return (
    <section className="w-full py-[80px] max-xl:py-[60px]">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col max-xl:px-[20px] ">
        <h2 className=" text-custom-black h2-text-black mb-[5px]">
          В ЭТОМ МЕСЯЦЕ!
        </h2>
        <p className="text-custom-green text-default-32 mb-[30px]">
          Акции и специальные предложения
        </p>

        <PromotionCardList />

      </div>
    </section>
  );
};
