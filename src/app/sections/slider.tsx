'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import firstBg from '@/assets/images/backgrounds/slider-bg-1.png';
import secondBg from '@/assets/images/backgrounds/slider-bg-3.png';
import thirdBg from '@/assets/images/backgrounds/slider-bg-4.png';

import firstMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-1.png';
import secondMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-3.png';
import thirdMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-4.png';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';
import classNames from 'classnames';
import type ISwiper from 'swiper';

const slidesData = [
  {
    content: (
      <>
        <h1 className="max-w-[600px] text-slider-header">
          Комплексный ультразвуковой <span className="text-text-green">скрининг организма</span>{' '}
        </h1>
        <p>Комплексное узи всего тела </p>
        <p className="m">
          <span className="text-text-green">Диагностика</span> сосудов шеи, щитовидной железы,
          молочных желез/мошонки, брюшной полости и почек, органов малого таза, вен нижних
          конечностей
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h1 className="max-w-[490px]  text-slider-header">
          Здоровый подход <span className="text-text-green">к спорту</span>{' '}
        </h1>
        <p className="max-w-[480px] ">Лечим профессиональные травмы бегунов, пловцов, лыжников</p>
      </>
    ),
  },
  {
    content: (
      <>
        <h1 className="max-w-[570px]   text-slider-header">Семейная медицина</h1>
        <p className="">Восстановление, поддержание и укрепление здоровья всей семьи</p>
      </>
    ),
  },
];

const slidesBackgorund = [
  {
    id: 1,
    img: firstBg,
    mobileImg: firstMobileBg,
  },
  {
    id: 2,
    img: secondBg,
    mobileImg: secondMobileBg,
  },
  {
    id: 3,
    img: thirdBg,
    mobileImg: thirdMobileBg,
  },
];

const Slider = ({}) => {
  const [swiper, setSwiper] = useState<ISwiper | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const [windowWidth] = useWindowSize();

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
  };

  const handlePaginationClick = (index: number) => {
    setCurrentSlide(index);

    swiper && swiper.slideTo(index);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalSlides; i++) {
      buttons.push(
        <button
          key={i}
          className={classNames(
            windowWidth <= 640
              ? `bg-white-default w-[10px] h-[10px] rounded-[50%] opacity-20 ${
                  currentSlide === i ? '!opacity-100' : ''
                }`
              : `bg-white-default relative w-[4px] h-[76px] bg-opacity-20  before:block before:absolute before:top-0 before:left-0 before:h-0  before:w-full before:opacity-100 before:z-[60] before:content-[' '] before:bg-white-default ease-linear  ${
                  currentSlide === i ? 'before:animate-fadeInHeight' : ''
                } `,
          )}
          onClick={() => handlePaginationClick(i)}></button>,
      );
    }
    return buttons;
  };

  return (
    <section className="w-[100%] h-[100vh] relative bg-black">
      <Swiper
        onSwiper={setSwiper}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay, A11y]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className={'w-[100%] h-[100vh]'}
        direction={windowWidth > 640 ? 'vertical' : 'horizontal'}>
        {slidesBackgorund.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={windowWidth > 640 ? img.img : img.mobileImg}
              className={'w-[100%] h-[100vh] p-0 object-cover'}
              alt="Поликлиника"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-[1200px] min-h-[358px] w-full absolute top-[33%] z-10  text-white left-[50%] translate-x-[-50%] max-xl:px-[20px] text-slider flex  max-sm:top-[50%] items-center max-sm:flex-col-reverse max-sm:items-start">
        <div className="pagination-container mr-[15px] flex flex-col gap-[19px] max-sm:mt-[68px] max-sm:flex-row max-sm:self-center">
          {renderPaginationButtons()}
        </div>
        <div className="flex flex-col gap-[15px] max-sm:gap-[10px]">
          {slidesData[currentSlide].content}

          <div className="mt-[15px]">
            <Button variant={'primary'}>Записаться на прием</Button>
          </div>
          {/* {currentSlide} */}
        </div>
      </div>
    </section>
  );
};

export default Slider;
