import motobikesPng from '@/assets/images/sectionsImgs/motobikes.png';
import motobikesWebp from '@/assets/images/sectionsImgs/motobikes.webp';

import { Button } from '@/components/ui/button';
import { useImageProps } from '@/hooks/use-umage-props';

export const SportMedicine = () => {
  const { webp, png, rest } = useImageProps(
    motobikesWebp,
    motobikesPng,
    'Полный спектр медицинского сопровождения',
  );

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

        <picture>
          <source srcSet={webp} type="image/webp" />
          <source srcSet={png} type="image/jpeg" />
          <img
            className="rounded-[30px] h-[444px] w-[590px] object-cover max-sm:h-[372px] mx-auto"
            {...rest}
          />
        </picture>
      </div>
    </section>
  );
};
