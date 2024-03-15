import { complexPropgramms, functionalExaminations, servicesedAndSpecialists, sportsPrograms } from '@/utils/constants';
import Link from 'next/link';

export const SportsMedicineMenu = () => {
  return (
    <div className="flex gap-[25px]">
      <div className='pr-[25px] border-r-[1px] border-border-color border-opacity-50'>
        <h3 className="font-semibold mb-[24px] ">Услуги и&nbsp;специалисты:</h3>

        <ul className={`flex flex-col flex-wrap gap-[15px]`}>
          {servicesedAndSpecialists.map((i) => (
            <li key={i.id} className="max-w-[130px]">
              <Link
                href={i.link}
                className="font-medium underline text-link-color first-letter:break-words">
                {i.speciality}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='pr-[25px] border-r-[1px] border-border-color border-opacity-50'>
        <h3 className="font-semibold mb-[24px]">Функциональные обследования:</h3>

        <ul className={`flex flex-col flex-wrap gap-[15px]`}>
          {functionalExaminations.map((i) => (
            <li key={i.id} className="max-w-[190px]">
              <Link
                href={i.link}
                className="font-medium underline text-link-color first-letter:break-words">
                {i.speciality}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='pr-[25px] border-r-[1px] border-border-color border-opacity-50'>
        <h3 className="font-semibold mb-[24px]">Программы по&nbsp;видам&nbsp;спорта:</h3>

        <ul className={`flex flex-col flex-wrap gap-[15px]`}>
          {sportsPrograms.map((i) => (
            <li key={i.id} className="max-w-[150px]">
              <Link
                href={i.link}
                className="font-medium underline text-link-color first-letter:break-words">
                {i.speciality}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col'>
        <h3 className="font-semibold mb-[24px]">Комплексные программы:</h3>

        <ul className={`flex flex-col flex-wrap gap-[15px]`}>
          {complexPropgramms.map((i) => (
            <li key={i.id} className="max-w-[150px]">
              <Link
                href={i.link}
                className="font-medium underline text-link-color first-letter:break-words">
                {i.speciality}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={'/'} className='font-semibold text-[14.5px] mt-[auto] max-w-[150px] leading-[19px]'>Не знаю, к какому врачу нужно</Link>
      </div>
    </div>
  );
};
