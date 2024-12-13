import { useState } from "react";

const useShowMorePagination = (props) => {
    const { pageSize=10 } = props || {};

    const [currentPage, setCurrentPage] = useState(0);
    const [isAllDataFetched, setAllDataFetched] = useState(false);

    const incrementPagination = () => {
        setCurrentPage(previousPage => previousPage + 1)
    }

    const resetPagination = () => {
        setCurrentPage(1);
        setAllDataFetched(false);   
    }

    const checkIfAllDataFetched = (data) => {
        setAllDataFetched(data.length === 0 || data.length % pageSize !== 0);
    }

    return {
        currentPage,
        isAllDataFetched,

        incrementPagination,
        resetPagination,
        checkIfAllDataFetched
    }

}

export default useShowMorePagination;