import { useState } from "react";

const useShowMorePagination = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [isAllDataFetched, setAllDataFetched] = useState(false);

    const incrementPagination = () => {
        setCurrentPage(previousPage => previousPage + 1)
    }

    const resetPagination = () => {
        setCurrentPage(1);
        setAllDataFetched(false);   
    }

    return {
        currentPage,
        isAllDataFetched,

        incrementPagination,
        resetPagination
    }

}

export default useShowMorePagination;