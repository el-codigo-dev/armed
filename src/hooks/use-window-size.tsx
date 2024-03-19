import {useEffect, useState} from "react";

// Возвращает размеры окна
export const useWindowSize = (): [number, number] => {
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [windowHeight, setWindowHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);

    useEffect(() => {
        const setSize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', setSize);
            return () => {
                window.removeEventListener('resize', setSize);
            };
        }
    }, []);

    return [windowWidth, windowHeight];
};