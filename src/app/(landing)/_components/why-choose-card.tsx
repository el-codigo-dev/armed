import Image from 'next/image';

export const WhyChooseCard = ({ card }: { card: { id: number; text: string; img: string } }) => {
  return (
    <li className="relative flex flex-col items-center min-h-[308px]" key={card.id}>
      <div className="w-[144px] h-[144px] flex justify-center items-center bg-white-default rounded-[15px] z-10">
        <Image src={card.img} alt="" />
      </div>
      <div className="flex flex-col absolute top-[44px] bg-card-color rounded-[20px] min-h-[264px] p-[30px]">
        <span className='text-number-color font-semibold text-[36px] leading-[43px] 

        mt-[60px]

         mb-[5px]'>{card.id}.</span>
        <p dangerouslySetInnerHTML={{ __html: card.text }} className="text-custom-black text-[16px] leading-[19.2px] font-medium "></p>
      </div>
    </li>
  );
};

export default WhyChooseCard;
