'use client';

import { useFetchSalesQuery } from '@/api/mainApi';
import { PromotionCard } from '@/app/sections/home-page/components/promotion-card';
import { Button } from '@/components/ui/button';
import { ISale } from '@/types/apiTypes';
import Image from 'next/image';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import backIcon from '@/assets/images/doctors/prev.svg';
import forwardIcon from '@/assets/images/doctors/next.svg';
import { Navigation } from 'swiper/modules';
import { useWindowSize } from '@/hooks/use-window-size';

export const PromotionCardList = () => {
  const { data } = useFetchSalesQuery('');

  const [windowWidth] = useWindowSize()
  // max-md


  return (
    <div className='relative max-md:px-[40px]'>
      <Swiper
        spaceBetween={20}
        slidesPerView={ windowWidth > 1024 ? 3 : windowWidth > 768 ? 2 : 1 }
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        pagination={{ clickable: true }}
        className={'w-[100%]'}
        direction={'horizontal'}>
        {data?.map((promo: ISale) => (
          <SwiperSlide key={promo._id} className="h-full">
            <PromotionCard sale={promo} key={promo._id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-[30px] justify-center mt-[40px] max-md:absolute max-md:top-[50%] z-10 max-md:w-full max-md:justify-between max-md:m-0 max-md:left-0">
        <button className="swiper-button-prev cursor-pointer">
          <Image src={backIcon} alt="Назад" />
        </button>
        <button className="swiper-button-next cursor-pointer">
          <Image src={forwardIcon} alt="Вперед" />
        </button>
      </div>
    </div>
  );
};
