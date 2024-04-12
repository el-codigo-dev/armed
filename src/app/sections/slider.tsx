// 'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import firstBg from '@/assets/images/backgrounds/slider-bg-1.png';
import secondBg from '@/assets/images/backgrounds/slider-bg-2.png';
import thirdBg from '@/assets/images/backgrounds/slider-bg-3.png';

import firstBgWebp from '@/assets/images/backgrounds/slider-bg-1.webp';
import secondBgWebp from '@/assets/images/backgrounds/slider-bg-2.webp';
import thirdBgWebp from '@/assets/images/backgrounds/slider-bg-3.webp';

import firstMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-1.png';
import secondMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-2.png';
import thirdMobileBg from '@/assets/images/backgrounds/slider-bg-mobile-3.png';

import firstMobileBgWebp from '@/assets/images/backgrounds/slider-bg-mobile-1.webp';
import secondMobileBgWebp from '@/assets/images/backgrounds/slider-bg-mobile-2.webp';
import thirdMobileBgWebp from '@/assets/images/backgrounds/slider-bg-mobile-3.png';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';
import classNames from 'classnames';
import type ISwiper from 'swiper';
import { useImageProps } from '@/hooks/use-umage-props';

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

const Slider = ({}) => {
  const [windowWidth] = useWindowSize();

  const {
    webp: slide1Webp,
    png: slide1Png,
    rest: slide1Rest,
  } = useImageProps(
    windowWidth > 1280 ? firstBg : firstMobileBg,
    windowWidth > 1280 ? firstBgWebp : firstMobileBgWebp,
    'Слайд 1',
  );

  const {
    webp: slide2Webp,
    png: slide2Png,
    rest: slide2Rest,
  } = useImageProps(
    windowWidth > 1280 ? secondBg : secondMobileBg,
    windowWidth > 1280 ? secondBgWebp : secondMobileBgWebp,
    'Слайд 2',
  );

  const {
    webp: slide3Webp,
    png: slide3Png,
    rest: slide3Rest,
  } = useImageProps(
    windowWidth > 1280 ? thirdBg : thirdMobileBg,
    windowWidth > 1280 ? thirdBgWebp : thirdMobileBgWebp,
    'Слайд 3',
  );

  const slidesBackgorund = [
    {
      id: 1,
      img: firstBg,
      webp: slide1Webp,
      png: slide1Png,
      rest: slide1Rest,
    },
    {
      id: 2,
      img: secondBg,
      webp: slide2Webp,
      png: slide2Png,
      rest: slide2Rest,
    },
    {
      id: 3,
      img: thirdBg,
      webp: slide3Webp,
      png: slide3Png,
      rest: slide3Rest,
    },
  ];

  const [swiper, setSwiper] = useState<ISwiper | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalSlides; i++) {
      buttons.push(
        <button
          key={i}
          className={classNames(
            windowWidth <= 1280
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

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
  };

  const handlePaginationClick = (index: number) => {
    setCurrentSlide(index);

    swiper && swiper.slideTo(index);
  };

  return (
    <section className="w-[100%] h-[100vh] relative bg-black">
      <Swiper
        onSwiper={setSwiper}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay, A11y]}
        draggable={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className={'w-[100%] h-[100vh]'}
        // grabCursor={true}
        direction={windowWidth > 1280 ? 'vertical' : 'horizontal'}>
        {slidesBackgorund.map((img) => (
          <SwiperSlide key={img.id}>
            <picture>
              <source srcSet={img.webp} type="image/webp" />
              <source srcSet={img.png} />
              <img className={' p-0 object-cover w-[100%] h-[100vh]'} {...img.rest} />
            </picture>

            {/* 
            <Image
              src={windowWidth > 1280 ? img.img : img.mobileImg}
              className={' p-0 object-cover'}
              fill
              alt="Поликлиника"
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-[1200px] min-h-[358px] top-[33%] w-full absolute z-10  text-white left-[50%] translate-x-[-50%] max-xl:px-[20px] text-slider flex  max-xl:bottom-[60px] items-center max-xl:flex-col-reverse max-xl:items-start max-xl:top-[initial] max-xl:max-h-[400px]">
        <div className="pagination-container mr-[15px] flex flex-col gap-[19px] max-xl:mt-[68px] max-xl:flex-row max-xl:self-center">
          {renderPaginationButtons()}
        </div>
        <div className="flex flex-col gap-[15px] max-xl:gap-[10px]">
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
