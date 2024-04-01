import Head from 'next/head';
import { useEffect } from 'react';

export const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://res.smartwidgets.ru/app.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-[80px] max-xl:py-[60px] w-full">
      <div className="max-w-[1200px] w-full mx-auto max-xl:px-[20px] overflow-hidden">
      <h2 className=" text-custom-black h2-text-black mb-[30px]">
          ОТЗЫВЫ
        </h2>

        <div className="sw-app" data-app="5257104ace6545c1f3e1bd47970ed91e" />
      </div>
    </section>
  );
};
