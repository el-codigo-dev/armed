import Image from 'next/image';
import { ReactNode } from 'react';

export const WhyChooseCard = ({ card }: { card: { id: number; text: ReactNode; img: string } }) => {
  return (
    <li className="relative flex flex-col items-center h-[308px]" key={card.id}>
      <div className="w-[144px] h-[144px] flex justify-center items-center bg-white-default rounded-[15px] z-10">
        <Image src={card.img} alt="" />
      </div>
      <div className="font-raleway flex flex-col absolute top-[44px] bg-card-color rounded-[20px] min-h-[264px] p-[30px] w-full">
        <span
          className="text-number-color font-semibold text-[36px] leading-[43px] mt-[80px]
         mb-[5px]">
          {card.id}.
        </span>
        <p className="text-custom-black text-[15px] leading-[19.2px] font-medium ">{card.text}</p>
      </div>

      {/* <Image src={card.img} alt="" className='h-[308px] w-[251px] object-center'/> */}
    </li>
  );
};

export default WhyChooseCard;
