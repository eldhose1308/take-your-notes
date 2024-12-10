import { useEffect, useRef } from 'react'

export default function useDebounce(){
    const interval = useRef(null);

    useEffect(() => () => {
        clearTimeout(interval.current);
    }, []);

    const debounce = (callbackMethod, delay = 1000) => (...args) => {
        clearTimeout(interval.current);
        interval.current = setTimeout(() => {
            callbackMethod(...args)
        }, delay)
    }

    return debounce
}