'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import secondBg from '@/assets/images/slider-bg-1.jpg';
import firstBg from '@/assets/images/slider-bg-2.jpg';
import thirdBg from '@/assets/images/slider-bg-3.jpg';
import fourBg from '@/assets/images/slider-bg-4.jpg';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Slider = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
  };
  console.log(currentSlide);

  return (
    <section className="w-[100%] h-[100vh] relative bg-black">
      <Swiper
        // spaceBetween={40}
        // slidesPerView={1}
        // slidesPerGroup={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay, A11y]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className={'w-[100%] h-[100vh]'}
        direction={'vertical'}>
        <SwiperSlide className="bg-slider-bg-1 flex justify-center items-center w-[100%] h-[100vh]">
          <Image
            src={firstBg}
            className={'w-[100%] h-[100vh] p-0 object-cover absolute top-0 left-0'}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={secondBg} className={'w-[100%] h-[100vh] p-0 object-cover'} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-slider-bg-1">
          <Image src={thirdBg} className={'w-[100%] h-[100vh] p-0 object-cover'} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-slider-bg-1">
          <Image src={fourBg} className={'w-[100%] h-[100vh] p-0 object-cover'} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="max-w-[1200px] min-h-[358px] w-full absolute  top-[33%] z-10 font-semibold text-[20px] text-white left-[50%] translate-x-[-50%]">
        {currentSlide === 0 && (
          <>
            <p>Управляйте своим здоровьем!</p>
            <p>Живите долгой полноценной жизнью!</p>

            <h1 className="max-w-[880px] text-[44px] uppercase leading-[48px] mt-[40px]">
              Профессиональные врачи, Осознанный подход,{' '}
              <span className="text-text-green">Крепкое здоровье на годы</span>{' '}
            </h1>
          </>
        )}
        {currentSlide === 1 && (
          <>
            <h1 className="max-w-[880px] text-[44px] uppercase leading-[48px] mt-[40px] mb-[15px]">
              Комплексный ультразвуковой <span className="text-text-green">скрининг организма</span>{' '}
            </h1>

            <p>Комплексное узи всего тела </p>
            <p className="mt-[15px]">
              <span className="text-text-green">Диагностика</span> сосудов шеи, щитовидной железы,
              молочных желез/мошонки, брюшной полости и почек, органов малого таза, вен нижних
              конечностей
            </p>
          </>
        )}
        {currentSlide === 2 && (
          <>
            <h1 className="max-w-[880px] text-[44px] uppercase leading-[48px] mt-[40px] mb-[30px]">
              Здоровый подход <span className="text-text-green">к спорту</span>{' '}
            </h1>
            <p className='max-w-[480px]'>Лечим профессиональные травмы бегунов, пловцов, лыжников</p>
          </>
        )}
        {currentSlide === 3 && (
          <>
            <h1 className="max-w-[880px] text-[44px] uppercase leading-[48px] mt-[40px] mb-[15px]">
              Семейная медицина
            </h1>
            <p>Восстановление, поддержание и укрепление здоровья всей семьи</p>
          </>
        )}
        <Button
          variant={'primary'}
          className="w-[290px] h-[56px] rounded-[40px] font-semibold text-[21px] mt-[30px]">
          Записаться на прием
        </Button>
      </div>
    </section>
  );
};

export default Slider;
