import {
  analysisAndDiagnostics,
  childrensPrograms,
  medicalDireactions,
  specialistDoctors,
} from '@/utils/constants';
import Link from 'next/link';

export const MedicalCenterMenu = () => {
  return (
    <div className="flex gap-[24px] text-[14.5px]">
      <div>
        <h3 className="text-[16px] mb-[24px] font-semibold max-w-[200px]">Консультации врачей-специалистов:</h3>
        <ul className={`flex flex-col flex-wrap gap-[15px] max-h-[350px] min-w-[360px]`}>
          {specialistDoctors.map((doctor) => (
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




      <div className="flex flex-col justify-between border-r-[1px] border-l-[1px] border-border-color pr-[20px] pl-[20px] border-opacity-50">
        <div>
          <h3 className="text-[16px] font-semibold mb-[24px] max-w-[100px]">Детские программы:</h3>
          <ul className={`flex flex-col flex-wrap gap-[15px]`}>
            {childrensPrograms.map((doctor) => (
              <li key={doctor.id} className="max-w-[260px]">
                <Link
                  href={doctor.link}
                  className="font-medium underline text-link-color first-letter:break-words">
                  {doctor.speciality}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        


        <div>
          <h3 className="text-[16px] font-semibold mb-[24px] max-w-[100px]">Анализы и диагностика:</h3>
          <ul className={`flex flex-col flex-wrap gap-[15px]`}>
            {analysisAndDiagnostics.map((i) => (
              <li key={i.id} className="max-w-[140px]">
                <Link
                  href={i.link}
                  className="font-medium underline text-link-color first-letter:break-words">
                  {i.speciality}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex flex-col flex-wrap gap-[24px] font-semibold">
        {medicalDireactions.map((direction) => (
          <li className="max-w-[180px] last:mt-[auto]" key={direction.id}>
            <Link href={direction.link} className="text-[16px] text-custom-black break-words">
              {direction.speciality}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
