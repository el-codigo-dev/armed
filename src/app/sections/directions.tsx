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

export const Directions = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto flex flex-col text-custom-black mt-[80px] max-xl:px-[20px]">
      <h2 className="font-semibold text-[54px] leading-tight tracking-tighter mb-[30px]">
        НАПРАВЛЕНИЯ
      </h2>
      <div className="grid grid-cols-2 justify-between mb-[60px] gap-[20px] max-xl:grid-cols-1">
        <div>
          <div className="bg-white-default flex flex-col max-w-[589px] w-full p-10 gap-[27px] rounded-[25px] max-xl:max-w-full">
            <h3 className="text-[32px] font-medium text-custom-green">Медицинский центр</h3>

            <DropDown
              triggerText={'Консультации врачей-специалистов:'}
              list={specialistDoctors}
              maxHeight={310}
              triggerTextStyles="font-semibold text-[21px] leading-[25px] pb-[30px]"
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />

            <DropDown
              triggerText={'Детские программы:'}
              triggerTextStyles="font-semibold text-[21px] leading-[25px] pb-[30px]"
              list={childrensPrograms}
              maxHeight={300}
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />
            <DropDown
              triggerText={'Анализы и диагностика:'}
              list={analysisAndDiagnostics}
              maxHeight={300}
              triggerTextStyles="font-semibold text-[21px] leading-[25px] pb-[30px]"
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />

            <ul className="flex flex-col flex-wrap gap-[15px] max-h-[160px] font-semibold">
              {medicalDireactions.map((direction) => (
                <li className="max-w-[170px]" key={direction.id}>
                  <Link
                    href={direction.link}
                    className="text-[21px] underline text-custom-black break-words leading-[25px]">
                    {direction.speciality}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[589px] w-full min-h-[640px] flex flex-col gap-[20px] max-xl:max-w-full">
          <div className="flex flex-col p-10 gap-[25px] bg-white-default rounded-[25px] pb-[30px]">
            <h3 className="text-[32px] font-medium text-custom-green">Спортивная медицина</h3>
            <DropDown
              triggerText={'Услуги и специалисты:'}
              list={servicesedAndSpecialists}
              maxHeight={100}
              triggerTextStyles="font-semibold text-[21px] leading-[25px] pb-[30px]"
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />
            <DropDown
              triggerText={'Функциональные обследования:'}
              triggerTextStyles="mt-[5px] font-semibold text-[21px] leading-[25px] pb-[30px]"
              list={functionalExaminations}
              maxHeight={230}
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />
            <DropDown
              triggerText={'Программы по видам спорта:'}
              triggerTextStyles="mt-[5px] font-semibold text-[21px] leading-[25px] pb-[30px]"
              list={sportsPrograms}
              maxHeight={220}
              hasMainBorder
              listStyles={'border-t-2 border-custom-green pt-[20px]'}

            />
          </div>
          <div className="bg-white-default rounded-[25px] p-10 box-border">
            <DropDown
              triggerText={'Управление здоровьем'}
              triggerTextStyles={'text-custom-green text-[32px] font-medium'}>
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
        </div>
      </div>

      <Button variant={'primary'} className="rounded-[40px] w-[290px] h-[56px] self-center">
        Записаться на прием
      </Button>
      <Link
        href={'/'}
        className="self-center text-second-link-color text-[21px] leading-[25px] font-semibold mt-[15px] mb-[80px]">
        Не знаю, к какому врачу нужно
      </Link>
    </section>
  );
};
