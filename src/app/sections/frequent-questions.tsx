import { Button } from '@/components/ui/button';
import questions from '@/assets/images/sectionsImgs/questions.png';
import questionsWebp from '@/assets/images/sectionsImgs/questions.webp';

import { DropDown } from './drop-down';
import { useImageProps } from '@/hooks/use-umage-props';

export const FrequentQuestions = () => {
  const { webp, png, rest } = useImageProps(questionsWebp, questions, 'Частые вопросы');

  return (
    <section className="w-full text-white-default bg-custom-green py-[80px] max-xl:py-[60px]">
      <div className="flex flex-col max-w-[1200px] w-full mx-auto max-xl:px-[20px] ">
        <div className="flex gap-[20px] justify-between max-xl:flex-col max-xl:gap-[30px]">
          <picture className="rounded-[30px] flex-shrink-0 h-[810px] w-[550px] object-cover max-xl:h-[372px] mx-auto max-xl:object-top	max-xl:w-[335px]">
            <source srcSet={webp} type="image/webp" />
            <source srcSet={png} />
            <img
              className="rounded-[30px] flex-shrink-0 h-[810px] w-[550px] object-cover max-xl:h-[372px] mx-auto max-xl:object-top	max-xl:w-[335px]"
              {...rest}
            />
          </picture>

          {/* <Image
            src={questions}
            alt="Полный спектр медицинского сопровождения"
            className="rounded-[30px] h-[810px] w-[550px] object-cover max-xl:h-[372px] mx-auto max-xl:object-top	max-xl:w-[335px]"
          /> */}


          <div className="w-full flex flex-col gap-[15px]">
            <h2 className="h2-text-white max-w-[344px] mb-[4px] max-xl:max-w-[150px]">
              частые вопросы
            </h2>

            <div className="border-b-[2px] border-white-default">
              <DropDown
                triggerText={'Чем Аристомед отличается от других клиник?'}
                type={'questions'}>
                <div className="text-default-16 px-[30px] mt-[15px] pb-[15px]">
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

            <div className="border-b-[2px] border-white-default">
              <DropDown triggerText={'Что такое лечение полного цикла?'} type={'questions'}>
                <div className="text-default-16 px-[30px] mt-[15px]  pb-[15px]">
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

            <div className="">
              <DropDown triggerText={'Что такое медориентирование?'} type={'questions'}>
                <div className="text-default-16 px-[30px] mt-[15px]  pb-[15px]">
                  <p className="mb-[10px]">
                    Это помощь в поиске врача или организации, где помогут решить проблему со
                    здоровьем лучше всего. Человеку, далекому от медицины сложно:
                  </p>
                  <ul className="list-disc pl-[20px]">
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
        <div className="place-self-center mt-[60px] max-xl:mt-[30px]">
          <Button variant={'secondary'}>Задать вопрос</Button>
        </div>
      </div>
    </section>
  );
};





// import { Button } from '@/components/ui/button';
// import questions from '@/assets/images/sectionsImgs/questions.png';
// import questionsWebp from '@/assets/images/sectionsImgs/questions.webp';

// import { DropDown } from './drop-down';
// import { useImageProps } from '@/hooks/use-umage-props';

// export const FrequentQuestions = () => {
//   const { webp, png, rest } = useImageProps(questionsWebp, questions, 'Частые вопросы');

//   return (
//     <section className="w-full text-white-default bg-custom-green py-[80px] max-xl:py-[60px]">
//       <div className="flex flex-col max-w-[1200px] w-full mx-auto max-xl:px-[20px] ">
//         <div className="flex gap-[20px] justify-between max-xl:flex-col max-xl:gap-[30px]">
//           <picture>
//             <source srcSet={webp} type="image/webp" />
//             <source srcSet={png} type="image/png" />
//             <img
//               className="rounded-[30px] h-[810px] w-[550px] object-cover max-xl:h-[372px] mx-auto max-xl:object-top	max-xl:w-[335px]"
//               {...rest}
//             />
//           </picture>

//           <div className="w-full flex flex-col gap-[15px]">
//             <h2 className="h2-text-white max-w-[344px] mb-[4px] max-xl:max-w-[150px]">
//               частые вопросы
//             </h2>

//             <div className="border-b-[2px] border-white-default">
//               <DropDown
//                 triggerText={'Чем Аристомед отличается от других клиник?'}
//                 type={'questions'}>
//                 <div className="text-default-16 px-[30px] mt-[15px] pb-[15px]">
//                   <p className="mb-[30px]">
//                     Ориентируемся на раннее выявление, профилактику развития болезней, составляем
//                     схемы индивидуальной терапии.
//                   </p>
//                   <p className="mb-[30px]">Особое внимание уделяем диагностике. </p>
//                   <p>
//                     Ценим время пациентов. Стараемся организовать прием так, чтобы все обследования
//                     уложить в один день. Стоять в очереди или ездить в клинику как на работу не
//                     придется.
//                   </p>
//                 </div>
//               </DropDown>
//             </div>

//             <div className="border-b-[2px] border-white-default">
//               <DropDown triggerText={'Что такое лечение полного цикла?'} type={'questions'}>
//                 <div className="text-default-16 px-[30px] mt-[15px]  pb-[15px]">
//                   <p className="mb-[10px]">
//                     Занимаемся состоянием пациента в целом, лечим не только конкретную болезнь.
//                     Поэтому работа медицинского центра базируется на концепции личного врача —,
//                     который составляет индивидуальный план по улучшению здоровья пациента. Помогаем
//                     пациентам быть здоровыми: “Только работая над своим образом жизни можно прийти к
//                     долгосрочному результату”, – так выглядит подход клиники.
//                   </p>
//                 </div>
//               </DropDown>
//             </div>

//             <div className="">
//               <DropDown triggerText={'Что такое медориентирование?'} type={'questions'}>
//                 <div className="text-default-16 px-[30px] mt-[15px]  pb-[15px]">
//                   <p className="mb-[10px]">
//                     Это помощь в поиске врача или организации, где помогут решить проблему со
//                     здоровьем лучше всего. Человеку, далекому от медицины сложно:
//                   </p>
//                   <ul className="list-disc pl-[20px]">
//                     <li>
//                       оценить квалификацию врача, и найти профессионала, с которым получится
//                       установить хороший контакт.
//                     </li>

//                     <li>
//                       понять, как и в какую клинику стоит обратиться за помощью в конкретном случае,
//                       какой стационар выбрать.
//                     </li>
//                   </ul>
//                 </div>
//               </DropDown>
//             </div>
//           </div>
//         </div>
//         <div className="place-self-center mt-[60px] max-xl:mt-[30px]">
//           <Button variant={'secondary'}>Задать вопрос</Button>
//         </div>
//       </div>
//     </section>
//   );
// };
