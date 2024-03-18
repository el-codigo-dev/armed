'use client';

import { useFetchDoctorsQuery } from '@/api/mainApi';
import { Button } from '@/components/ui/button';
import { IDoctor } from '@/types/apiTypes';
import { baseUrl } from '@/utils/config';
import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import backIcon from '@/assets/images/doctors/prev.svg';
import forwardIcon from '@/assets/images/doctors/next.svg';

export const DoctorCardList = () => {
  const { data: doctors } = useFetchDoctorsQuery('');

  console.log(doctors);

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        // slidesPerGroup={1}

        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        pagination={{ clickable: true }}
        // onSlideChange={(swiper) => handleSlideChange(swiper)}
        className={'w-[100%]'}
        direction={'horizontal'}>
        {doctors &&
          doctors[0] &&
          doctors[0]?.data?.map((doctor: IDoctor) => (
            <SwiperSlide key={doctor._id} className="flex flex-col rounded-[20px] overflow-hidden">
              <Image
                src={baseUrl + doctor.image}
                width={387}
                height={300}
                alt={doctor.name}
                className="w-[387px] h-[300px] object-cover"
              />
              <div className="h-[250px] bg-card-color round-bl-[20px]  p-[21px] flex flex-col">
                <h3 className="text-doctor-name mb-[15px]">
                  {doctor.name}
                  <p>
                    {doctor.surname} {doctor.middle_name}
                  </p>
                </h3>
                <p className="text-normal-18">
                  {doctor.post ||
                    doctor.medicine_directions
                      .map((dir, index) =>
                        index === 0
                          ? dir.doctorDirectionName
                          : dir.doctorDirectionName.toLowerCase(),
                      )
                      .join(', ')}
                  .
                </p>
                <Button variant={'secondary'} className="w-[181px] h-[56px] mt-[auto] self-start">
                  Подробнее
                </Button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex gap-[30px] justify-center mt-[40px]">
        <div className="swiper-button-prev cursor-pointer">
          <Image src={backIcon} alt="Назад" />
        </div>
        <div className="swiper-button-next cursor-pointer">
          <Image src={forwardIcon} alt="Вперед" />
        </div>
      </div>
    </>
  );
};
