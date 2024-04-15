import React from 'react';
import {DoctorCardList} from './home-page/components/doctor-card-list';
import useIntersectionObserver from "@/hooks/use-intersection-observer";

export const Doctors = () => {
    const {triggered, ref} = useIntersectionObserver(0.1);

    return (
        <section ref={ref} className="w-full text-custom-black  py-[80px] max-xl:py-[60px]">
            <div className="max-w-[1200px] w-full mx-auto flex flex-col max-xl:px-[20px]">
                <h2 className="h2-text-black mb-[15px] max-xl:mb-[5px]">Врачи</h2>
                <p className="text-custom-green text-default-32 mb-[30px] max-w-[643px]">
                    Вы можете подробно познакомиться с врачами медцентра
                </p>

                {triggered && <DoctorCardList/>}
            </div>
        </section>
    );
};
