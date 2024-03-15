import { whyChooseImg } from '@/utils/constants';
import WhyChooseCard from '../why-choose-card';
import { Button } from '@/components/ui/button';

const WhyChoose = () => {
  return (
    <section className="bg-custom-green w-full text-white-default pt-[80px] pb-[80px]">
      <div className="max-w-[1200px] w-full mx-auto flex gap-[45px]">
        <div>
          <h2 className="uppercase text-[54px] leading-[65px] font-semibold max-w-[362px] mb-[15px]">
            почему выбирают аристомед?
          </h2>
          <p className="text-[32px] leading-[38px] font-medium max-w-[362px]">
            Преимущества клиники
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-[20px] w-full">
          {whyChooseImg.map((item) => (
            <WhyChooseCard card={item} key={1}/>
          ))}
        </ul>
      </div>

      <div className="flex gap-[10px] justify-center mt-[60px]">
        <Button variant={'primary'} className='w-[291px] h-[56px]'>Записаться на прием</Button>
        <Button variant={'secondary'} className='w-[234px] h-[56px]'>Заказать звонок</Button>
        <Button variant={'secondary'} className='w-[214px] h-[56px]'>Задать вопрос</Button>
        <Button variant={'secondary'} className='w-[221px] h-[56px]'>Доктор онлайн</Button>
      </div>
    </section>
  );
};

export default WhyChoose;
