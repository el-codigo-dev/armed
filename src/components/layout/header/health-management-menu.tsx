import { cardioPrograms } from '@/utils/constants';
import Link from 'next/link';

export const HealthManagementMenu = () => {
  return (
    <div className="flex gap-[24px] text-[14.5px]">

      <div className='border-r-[1px] border-border-color border-opacity-50 pr-[35px]'>
        <h3 className="text-[16px] mb-[24px] font-semibold">
        Кардиопрограммы:
        </h3>
        <ul className={`flex flex-col flex-wrap gap-[15px] max-h-[350px]`}>
          {cardioPrograms.map((doctor) => (
            <li key={doctor.id} className="max-w-[190px]">
              <Link
                href={doctor.link}
                className="font-medium underline text-link-color first-letter:break-words">
                {doctor.speciality}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between  pr-[20px] pl-[20px] border-opacity-50">
        <h3 className="text-[16px] font-semibold mb-[24px] max-w-[100px]">Комплексные чекапы:</h3>
        <p className='max-w-[290px]'>Индивидуальные программы обследования и сопровождения под Ваши задачи</p>
      </div>
    </div>
  );
};
