import { useRef, useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        const previousTitle = document.title;

        if(title){
            document.title = `${title} - Tale Chronicles`;
        }
        
        return () => {
            document.title = previousTitle;
        }
    }, [title])
}

export default useTitle;