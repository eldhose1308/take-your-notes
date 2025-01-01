import { useEffect } from 'react';

const useEscClose = (closeCallbackMethod, isOpen) => {

    useEffect(() => {
        
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && isOpen) {
                event.preventDefault();
                closeCallbackMethod && closeCallbackMethod();
            }
        };

        if(isOpen){
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen])

}

export default useEscClose;