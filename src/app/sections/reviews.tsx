import {useEffect, useState} from 'react';
import useIntersectionObserver from "@/hooks/use-intersection-observer";

export const Reviews = () => {
    const {isInView, ref} = useIntersectionObserver(0.1);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (isInView && !hasLoaded) {
            const script = document.createElement('script');
            script.src = 'https://res.smartwidgets.ru/app.js';
            script.async = true;
            document.body.appendChild(script);
            setHasLoaded(true)

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isInView, hasLoaded]);

  return (
    <section ref={ref} className="py-[80px] max-xl:py-[60px] w-full">
      <div className="max-w-[1200px] w-full mx-auto max-xl:px-[20px] overflow-hidden">
      <h2 className=" text-custom-black h2-text-black mb-[30px]">
          ОТЗЫВЫ
        </h2>

        <div className="sw-app" data-app="5257104ace6545c1f3e1bd47970ed91e" />
      </div>
    </section>
  );
};
