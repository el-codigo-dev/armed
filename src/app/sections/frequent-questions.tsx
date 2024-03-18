import { Button } from '@/components/ui/button';
import Image from 'next/image';
import questions from '@/assets/images/questions.png';
import { DropDown } from './drop-down';

export const FrequentQuestions = () => {
  return (
    <section className="w-full text-white-default bg-custom-green py-[80px]">
      <div className="flex flex-col max-w-[1200px] w-full mx-auto">
        <div className="flex gap-[20px] justify-between">
          <Image
            src={questions}
            alt="Полный спектр медицинского сопровождения"
            className="rounded-[30px] h-[810px] w-[550px]"
          />

          <div className="max-w-[610px] w-full flex flex-col gap-[15px]">
            <h2 className="h2-text-white max-w-[344px] mb-[4px]">частые вопросы</h2>

            <div className="border-b-[2px] border-white-default pb-[19px]">
              <DropDown
                triggerText={'Чем Аристомед отличается от других клиник?'}
                triggerTextStyles={'text-drop-down px-[30px] py-[18px] rounded-[20px]'}
                color={'white'}>
                <div className="text-default-16 px-[30px] mt-[15px]">
                  <p className="mb-[30px]">
                    Ориентируемся на раннее выявление, профилактику развития болезней, составляем
                    схемы индивидуальной терапии.
                  </p>
                  <p className="mb-[30px]">Особое внимание уделяем диагностике. </p>
                  <p>
                    Ценим время пациентов. Стараемся организовать прием так, чтобы все обследования
                    уложить в один день. Стоять в очереди или ездить в клинику как на работу не
                    придется.
                  </p>
                </div>
              </DropDown>
            </div>

            <div className="border-b-[2px] border-white-default pb-[19px]">
              <DropDown
                triggerText={'Что такое лечение полного цикла?'}
                triggerTextStyles={'text-drop-down px-[30px] py-[18px] rounded-[20px]'}
                color={'white'}>
                <div className="text-default-16 px-[30px] mt-[15px]">
                  <p className="mb-[10px]">
                    Занимаемся состоянием пациента в целом, лечим не только конкретную болезнь.
                    Поэтому работа медицинского центра базируется на концепции личного врача —,
                    который составляет индивидуальный план по улучшению здоровья пациента. Помогаем
                    пациентам быть здоровыми: “Только работая над своим образом жизни можно прийти к
                    долгосрочному результату”, – так выглядит подход клиники.
                  </p>
                </div>
              </DropDown>
            </div>

            <div className="border-b-[2px] border-white-default pb-[19px]">
              <DropDown
                triggerText={'Что такое медориентирование?'}
                triggerTextStyles={'text-drop-down px-[30px] py-[18px] rounded-[20px]'}
                color={'white'}>
                <div className="text-default-16 px-[30px] mt-[15px]">
                  <p className="mb-[10px]">
                    Это помощь в поиске врача или организации, где помогут решить проблему со
                    здоровьем лучше всего. Человеку, далекому от медицины сложно:
                  </p>
                  <ul className='list-disc pl-[20px]'>
                    <li>
                      оценить квалификацию врача, и найти профессионала, с которым получится
                      установить хороший контакт.
                    </li>

                    <li>
                      понять, как и в какую клинику стоит обратиться за помощью в конкретном случае,
                      какой стационар выбрать.
                    </li>
                  </ul>
                </div>
              </DropDown>
            </div>
          </div>
        </div>
        <Button variant={'secondary'} className="w-[291px] h-[56px] place-self-center mt-[60px]">
          Записаться на прием
        </Button>
      </div>
    </section>
  );
};
