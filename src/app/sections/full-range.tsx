import { Button } from '@/components/ui/button';

import fullRangeImgWebp from '@/assets/images/sectionsImgs/fullRangeImg.webp';
import fullRangeImgPng from '@/assets/images/sectionsImgs/fullRangeImg.png';
import { useImageProps } from '@/hooks/use-umage-props';

export const FullRange = () => {
  const { webp, png, rest } = useImageProps(
    fullRangeImgWebp,
    fullRangeImgPng,
    'Полный спектр медицинского сопровождения',
  );

  return (
    <section className="w-full text-custom-black py-[80px] max-xl:py-[60px]">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between gap-[60px] max-xl:px-[20px] max-xl:flex-col max-xl:items-center max-xl:gap-[30px]">
        <picture>
          <source srcSet={webp} type="image/webp" />
          <source srcSet={png} />
          <img
            className="rounded-[30px] h-[766px] object-cover w-[550px] max-xl:h-[372px] max-xl:w -[335px]"
            {...rest}
          />
        </picture>

        <div className="flex flex-col max-w-[590px] text-default-16 max-xl:max-w-full">
          <h2 className="h2-text-black mb-[30px] max-xl:mb-[20px]">
            Полный спектр медицинского сопровождения
          </h2>

          <h3 className="text-custom-green text-default-32 mb-[15px] max-xl:mb-[10px]">
            Диагностика
          </h3>
          <p className="mb-[30px] max-xl:mb-[20px]">
            Составляем схемы индивидуальной диагностики для снижения риска развития заболеваний,(все
            виды клинических исследований, УЗИ)
          </p>
          <h3 className="text-custom-green text-default-32 mb-[15px] max-xl:mb-[10px]">
            Профилактика
          </h3>
          <p className="mb-[30px] max-xl:mb-[20px]">
            Под руководством врачей общей практики корректируем образ жизни пациентов, составляем
            план дальнейших действий, поддерживаем на пути изменений
          </p>

          <h3 className="text-custom-green text-default-32 mb-[15px] max-xl:mb-[10px]">Лечение</h3>
          <p className="mb-[30px]">
            Опираемся на доказательную медицину, методики, которые имеют научное подтверждение,
            проводим экспертные консилиумы для назначения эффективного лечения
          </p>

          <div className="max-xl:flex max-xl:justify-center">
            <Button variant={'primary'}>Записаться на прием</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
