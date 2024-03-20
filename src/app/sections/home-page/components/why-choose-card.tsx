import Image from 'next/image';
import { ReactNode } from 'react';

// max-lg

export const WhyChooseCard = ({ card }: { card: { id: number; text: ReactNode; img: string } }) => {
  return (
    <li
      className="relative flex flex-col items-center h-[308px] max-lg:h-[auto] max-lg:flex-row-reverse max-lg:bg-white-default max-lg:rounded-[15px] max-lg:justify-between max-lg:pl-[20px] max-lg:pr-[25px] max-lg:py-[24px]  max-lg:gap-[19px]"
      key={card.id}>
      <div className="w-[144px] h-[144px] flex justify-center items-center bg-white-default rounded-[15px] z-10 max-lg:w-[60px] max-lg:h-[60px] max-lg:bg-transparent">
        <Image src={card.img} alt="" />
      </div>

      <div className="font-raleway flex flex-col absolute top-[44px] bg-card-color rounded-[20px] min-h-[264px] p-[30px] w-full    max-lg:bg-transparent max-lg:static  max-lg:min-h-full max-lg:flex-row    max-lg:w-[auto] 
       max-lg:p-0  max-lg:gap-[15px]
      ">
        <span
          className="text-number-color  text-numbered   mt-[80px]
         mb-[5px]   max-lg:mt-0  ">
          {card.id}.
        </span>
        <p className="text-custom-black text-[15px] leading-[19.2px] font-medium max-lg:max-w-[220px]">{card.text}</p>
      </div>

      {/* <Image src={card.img} alt="" className='h-[308px] w-[251px] object-center'/> */}
    </li>
  );
};

export default WhyChooseCard;
