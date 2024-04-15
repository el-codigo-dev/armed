'use client'

import {Contacts} from './sections/contacts';
import {SportMedicine} from "@/app/sections/sport-medicine";
import {FullRange} from "@/app/sections/full-range";
import {HealthManagement} from "@/app/sections/health-management";
import {ManageYourLife} from "@/app/sections/manage-your-life";
import WhyChoose from "@/app/sections/why-choose";
import {FrequentQuestions} from "@/app/sections/frequent-questions";
import {Directions} from "@/app/sections/directions";
import {Reviews} from "@/app/sections/reviews";
import Slider from "@/app/sections/home-page/components/slider";
import SliderMobile from "@/app/sections/home-page/components/sliderMobile";
import {Promotions} from "@/app/sections/promotions";
import {Doctors} from "@/app/sections/doctors";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import dynamic from "next/dynamic";

const AppointmentForm = dynamic(() => import("@/components/form-appointment"))
const Modal = dynamic((() => import("@/components/modal")))


export default function Home() {
    const isModalOpen = useSelector((state: RootState) => state.main.isModalOpen)

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between bg-custom-gray text-custom-black`}>
            <Slider className={"max-desktop:hidden"}/>
            <SliderMobile className={"desktop:hidden"}/>

            <Directions/>
            <WhyChoose/>
            <Promotions/>
            <ManageYourLife/>
            <Reviews/>
            <FullRange/>
            <SportMedicine/>
            <HealthManagement/>
            <Doctors/>
            <FrequentQuestions/>
            <Contacts/>

            {isModalOpen && (
                <Modal>
                    <AppointmentForm/>
                </Modal>
            )}
        </main>
    );
}
