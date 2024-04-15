import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (
    threshold = 0
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasRendered, setHasRendered] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting && !hasRendered) {
                    setTriggered(true)

                    if (count > 1) setHasRendered(true);
                    else setCount((prevCount) => ++prevCount);
                }
            },
            { threshold }
        );

        const element = ref.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, hasRendered, count]);

    return {isInView: isIntersecting || hasRendered, triggered, ref};
};

export default useIntersectionObserver;
