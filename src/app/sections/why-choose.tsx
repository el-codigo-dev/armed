import WhyChooseCard from './home-page/components/why-choose-card';
import { Button } from '@/components/ui/button';
import heal from '@/assets/images/why-choose/heal.svg';
import doctors from '@/assets/images/why-choose/doctors.svg';
import monitor from '@/assets/images/why-choose/monitor.svg';
import parking from '@/assets/images/why-choose/parking.svg';
import synergy from '@/assets/images/why-choose/synergy.svg';
import time from '@/assets/images/why-choose/time.svg';
import { butonsArray } from '@/utils/constants';

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
    ),
    img: time,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-custom-green w-full text-white-default py-[80px] max-xl:py-[60px] flex flex-col">
      <div className="max-w-[1200px] w-full mx-auto flex gap-[45px] max-xl:px-[20px] max-xl:flex-col max-xl:gap-[20px]">
        <div>
          <h2 className="h2-text-white max-w-[375px] mb-[15px] font-nextArt max-xl:max-w-full max-xl:mb-[5px]">
            почему выбирают аристомед?
          </h2>
          <p className="text-default-32 max-w-[362px] max-xl:max-w-[150px] ">
            Преимущества клиники
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-[20px] w-full max-lg:grid-cols-1 ">
          {whyChooseImg.map((item) => (
            <WhyChooseCard card={item} key={item.id} />
          ))}
        </ul>
      </div>

      <ul className="flex gap-[10px] justify-center mt-[60px] max-xl:flex-col max-xl:self-center max-xl:mt-[30px]">
        {butonsArray.map((b) => (
          <li className="flex justify-center" key={b.id}>
            <Button variant={b.type}>{b.text}</Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChoose;
