import { useState, useEffect, useRef } from 'react';

const useDelay = (ms: number) => {
    const timerRef = useRef<NodeJS.Timeout>();
    const [delayEnded, setDelayEnded] = useState(false);
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setDelayEnded(true);
        }, ms);

        return () => {
            clearTimeout(timerRef.current as any);
        };
    }, []);

    return delayEnded;
}

export default useDelay;