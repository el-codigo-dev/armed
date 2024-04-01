import {
  analysisAndDiagnostics,
  cardioPrograms,
  childrensPrograms,
  functionalExaminations,
  healthManagement,
  medicalDireactions,
  servicesedAndSpecialists,
  specialistDoctors,
  sportsPrograms,
} from '@/utils/constants';
import { DropDown } from './drop-down';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useWindowSize } from '@/hooks/use-window-size';

export const Directions = () => {
  const [windowWidth] = useWindowSize();

  return (
    <section className="max-w-[1200px] w-full mx-auto flex flex-col text-custom-black mt-[80px] max-xl:px-[20px] max-sl:mt-[60px]">
      <h2
        className="
      h2-text-black tracking-tighter mb-[30px] max-sm:mb-[15px]">
        НАПРАВЛЕНИЯ
      </h2>
      <div className="grid grid-cols-2 justify-between mb-[60px] gap-[20px] max-xl:grid-cols-1 max-xl:mb-[40px]">
        <div>
          <div className="bg-white-default flex flex-col max-w-[589px] w-full p-10 gap-[30px] rounded-[25px] max-xl:max-w-full max-sm:bg-transparent max-sm:p-0 max-sm:gap-[10px]">
            <h3 className="text-default-32 text-custom-green">Медицинский центр</h3>

            <DropDown
              triggerText={'Консультации врачей-специалистов:'}
              list={specialistDoctors}
              maxHeight={windowWidth > 640 ? 310 : 260}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />

            <DropDown
              triggerText={'Детские программы:'}
              list={childrensPrograms}
              maxHeight={windowWidth > 640 ? 300 : 200}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />
            <DropDown
              triggerText={'Анализы и диагностика:'}
              list={analysisAndDiagnostics}
              maxHeight={300}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />

            <ul className="flex flex-col flex-wrap gap-[15px] h-[123px] font-semibold max-sm:h-[auto] max-sm:gap-[10px]">
              {medicalDireactions.map((direction) => (
                <li className="max-w-[170px] max-sm:max-w-[none]" key={direction.id}>
                  <Link
                    href={direction.link}
                    className="text-trigger underline text-custom-black  max-sm:no-underline  max-sm:px-[15px] max-sm:border-[1px]  max-sm:border-custom-green max-sm:py-[10px]  max-sm:w-full max-sm:block max-sm:rounded-[40px]">
                    {direction.speciality}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[589px] w-full flex flex-col gap-[20px] max-xl:max-w-full">
          <div className="flex flex-col p-10 gap-[30px] bg-white-default rounded-[25px] pb-[30px] min-h-[445px] max-sm:p-0 max-sm:bg-transparent max-sm:gap-[10px] max-sm:min-h-[auto]">
            <h3 className="text-default-32 text-custom-green">Спортивная медицина</h3>
            <DropDown
              triggerText={'Услуги и специалисты:'}
              list={servicesedAndSpecialists}
              maxHeight={100}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />
            <DropDown
              triggerText={'Функциональные обследования:'}
              list={functionalExaminations}
              maxHeight={230}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />
            <DropDown
              triggerText={'Программы по видам спорта:'}
              list={sportsPrograms}
              maxHeight={220}
              type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
            />
          </div>
          {windowWidth > 640 ? (
            <div className="bg-white-default rounded-[25px] p-10 box-border">
              <DropDown
                triggerText={'Управление здоровьем'}
                // triggerTextStyles={'text-custom-green text-default-32'}
                type={'directionsV2'}>
                <div className="flex gap-[65px] mt-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <span className="text-[21px] text-custom-black font-semibold break-words">
                      Кардиопрограммы:
                    </span>
                    <ul className="flex flex-col gap-[15px]">
                      {cardioPrograms.map((program) => (
                        <li key={program.id} className="max-w-[240px]">
                          <Link
                            href={program.link}
                            className="font-medium text-[18px] underline text-link-color first-letter:break-words">
                            {program.speciality}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="flex flex-col gap-[20px]">
                    {healthManagement.map((m) => (
                      <li className="max-w-[200px]" key={m.id}>
                        <Link
                          href={m.link}
                          className="text-[21px] underline text-custom-black break-words font-semibold">
                          {m.speciality}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </DropDown>
            </div>
          ) : (
            <div className="flex flex-col p-10 gap-[30px] bg-white-default rounded-[25px] pb-[30px] min-h-[445px] max-sm:p-0 max-sm:bg-transparent max-sm:gap-[10px] max-sm:min-h-[auto]">
              <h3 className="text-default-32 text-custom-green">Управление здоровьем</h3>
              <DropDown
                triggerText={'Кардиопрограммы:'}
                list={cardioPrograms}
                maxHeight={100}
                type={windowWidth > 640 ? 'directions' : 'directionsMobile'}
              />

              <ul className="flex flex-col flex-wrap gap-[15px] max-h-[160px] font-semibold max-sm:max-h-[none] max-sm:gap-[10px]">
                {healthManagement.map((direction) => (
                  <li className="max-w-[170px] max-sm:max-w-[none]" key={direction.id}>
                    <Link
                      href={direction.link}
                      className="text-trigger underline text-custom-black  max-sm:no-underline  max-sm:px-[15px] max-sm:border-[1px]  max-sm:border-custom-green max-sm:py-[10px]  max-sm:w-full max-sm:block max-sm:rounded-[40px] last:max-sm:rounded-[20px]">
                      {direction.speciality}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className=" self-center">
        <Button variant={'primary'}>Записаться на прием</Button>
      </div>
      <Link
        href={'/'}
        className="self-center text-second-link-color text-trigger mt-[15px] mb-[80px] max-xl:mb-[60px] max-xl:mt-[10px]">
        Не знаю, к какому врачу нужно
      </Link>
    </section>
  );
};
