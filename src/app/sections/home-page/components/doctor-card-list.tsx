'use client';

import {useFetchDoctorsQuery} from '@/api/mainApi';
import {Button} from '@/components/ui/button';
import {IDoctor} from '@/types/apiTypes';
import {baseUrl} from '@/utils/config';
import Image from 'next/image';
import React from 'react';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import backIcon from '@/assets/images/doctors/prev.svg';
import forwardIcon from '@/assets/images/doctors/next.svg';
import {useWindowSize} from '@/hooks/use-window-size';

import 'swiper/css';
import 'swiper/css/pagination';
import {PuffLoader} from "react-spinners";

export const DoctorCardList = () => {
    const {data: doctors, isFetching} = useFetchDoctorsQuery({});
    const [windowWidth] = useWindowSize();

    return isFetching ? <PuffLoader className={"mx-auto"} color={"#85A080"}/> :
        <div className="relative max-md:px-[40px]">
            {(doctors && doctors[0].data) &&
                <Swiper
                    spaceBetween={20}
                    slidesPerView={windowWidth > 1024 ? 3 : windowWidth > 640 ? 2 : 1}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    loop={true}
                    pagination={{clickable: true}}
                    className={'w-[100%]'}
                    direction={'horizontal'}>
                    {doctors[0].data?.map((doctor: IDoctor) => (
                        <SwiperSlide key={doctor._id} className="flex flex-col rounded-[20px] overflow-hidden">
                            <Image
                                src={baseUrl + doctor.image}
                                width={387}
                                height={300}
                                alt={doctor.name}
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="h-[250px] bg-card-color round-bl-[20px]  p-[21px] flex flex-col">
                                <h3 className="text-doctor-name mb-[15px]">
                                    {doctor.surname}

                                    <p>
                                        {doctor.name} {doctor.middle_name}
                                    </p>
                                </h3>
                                <p className="text-normal-18 opacity-50">
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
                                <div className="mt-[auto] self-start">
                                    <Button variant={'secondary'}>Подробнее</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }

            <div
                className="flex gap-[30px] justify-center mt-[40px] max-md:absolute max-md:top-[50%] z-10 max-md:w-full max-md:justify-between max-md:m-0 max-md:left-0">
                <button className="swiper-button-prev cursor-pointer">
                    <Image src={backIcon} alt="Назад"/>
                </button>
                <button className="swiper-button-next cursor-pointer">
                    <Image src={forwardIcon} alt="Вперед"/>
                </button>
            </div>
        </div>
};
