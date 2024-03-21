import Image from 'next/image';
import fullRangeImg from '@/assets/images/motobikes.png';
import { Button } from '@/components/ui/button';

export const SportMedicine = () => {
  return (
    <section className="w-full text-custom-black bg-custom-green py-[80px] max-xl:py-[60px]">
      <div className="flex max-w-[1200px] w-full mx-auto justify-between gap-[20px] max-xl:px-[20px] max-xl:flex-col-reverse">
        <div className="text-default-18 flex flex-col gap-[15px] text-white-default max-xl:gap-[10px]">
          <h2 className="h2-text-white max-w-[590px] mb-[15px]">Спортивная медицина</h2>
          <p className=" text-text-green">
            Врачи-спортсмены, с опытом работы и лечения профессиональных спортсменов
          </p>
          <p className="">Оборудование для специализированной диагностики</p>
          <p className=" text-text-green">
            Комплексные программы диагностики, лечения и сопровождения спортсменов для достижения
            лучших результатов
          </p>
          <p className="">Опыт работы со спортсменами более 20 лет</p>
          <div className=" mt-auto max-xl:mt-[20px] max-xl:mx-auto">
            <Button variant={'primary'}>Записаться на прием</Button>
          </div>
        </div>

        <Image
          src={fullRangeImg}
          alt="Полный спектр медицинского сопровождения"
          className="rounded-[30px] h-[444px] w-[590px] object-cover max-sm:h-[372px] mx-auto"
        />
      </div>
    </section>
  );
};
