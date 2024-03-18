import WhyChooseCard from './home-page/components/why-choose-card';
import { Button } from '@/components/ui/button';
import heal from '@/assets/images/why-choose/heal.svg';
import doctors from '@/assets/images/why-choose/doctors.svg';
import monitor from '@/assets/images/why-choose/monitor.svg';
import parking from '@/assets/images/why-choose/parking.svg';
import synergy from '@/assets/images/why-choose/synergy.svg';
import time from '@/assets/images/why-choose/time.svg';

export const whyChooseImg = [
  {
    id: 1,
    text: (
      <span>
        Лечение <span className="text-custom-green font-bold">полного</span> цикла и{' '}
        <span className="text-custom-green font-bold">сопровождение пациента </span>на всех этапах
        лечения
      </span>
    ),
    img: heal,
  },
  {
    id: 2,
    text: (
      <span>
        <span className="text-custom-green font-bold">Врачи</span> высшей категории и кандидаты
        медицинских наук
      </span>
    ),
    img: doctors,
  },
  {
    id: 3,
    text: (
      <span>
        Оборудование <span className="text-custom-green font-bold">экспертного класса</span>
      </span>
    ),
    img: monitor,
  },
  {
    id: 4,
    text: (
      <span>
        <span className="text-custom-green font-bold">Синергия </span>доказательной и традиционной
        медицины
      </span>
    ),
    img: parking,
  },
  {
    id: 5,
    text: (
      <span>
        <span className="text-custom-green font-bold">Экономия времени</span> и 
        <span className="text-custom-green font-bold"> оптимизация процесса </span>лечения за счет
        сопровождения пациента
      </span>
    ),
    img: synergy,
  },
  {
    id: 6,
    text: (
      <span>
        <span className="text-custom-green font-bold">Бесплатная парковка </span>для пациентов
      </span>
    ),    img: time,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-custom-green w-full text-white-default pt-[80px] pb-[80px]">
      <div className="max-w-[1200px] w-full mx-auto flex gap-[45px]">
        <div>
          <h2 className="uppercase text-[54px] leading-[65px] font-semibold max-w-[375px] mb-[15px] font-nextArt">
            почему выбирают аристомед?
          </h2>
          <p className="text-[32px] leading-[38px] font-medium max-w-[362px]">
            Преимущества клиники
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-[20px] w-full">
          {whyChooseImg.map((item) => (
            <WhyChooseCard card={item} key={item.id} />
          ))}
        </ul>
      </div>

      <div className="flex gap-[10px] justify-center mt-[60px]">
        <Button variant={'primary'} className="w-[291px] h-[56px]">
          Записаться на прием
        </Button>
        <Button variant={'secondary'} className="w-[234px] h-[56px]">
          Заказать звонок
        </Button>
        <Button variant={'secondary'} className="w-[214px] h-[56px]">
          Задать вопрос
        </Button>
        <Button variant={'secondary'} className="w-[221px] h-[56px]">
          Доктор онлайн
        </Button>
      </div>
    </section>
  );
};

export default WhyChoose;
