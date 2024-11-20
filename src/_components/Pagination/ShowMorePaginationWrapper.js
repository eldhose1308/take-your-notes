import React, { useState, useEffect } from "react";


const buttonStateValues = {
    none: 'Show More', 
    loading: 'Fetching data', 
    failure: 'Failed to fetch', 
    completed: 'Wait a sec', 
}

const ShowMorePaginationWrapper = (props) => {
    const { fetchDataMethod, pageSize = 20, initialPage = 1, initialData = [], children } = props;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [data, setData] = useState(initialData);
    const [isAllDataFetched, setAllDataFetched] = useState(false);

    const [fetchStatus, setFetchStatus] = useState('none');
    // use lru for caching the results so that memory doesnt become full


    const fetchData = async (newPage) => {
        setFetchStatus('loading');
        try {
            const response = await fetchDataMethod({ page: newPage, limit: pageSize });
            setData((previousData) => [...previousData, ...response]);
            setAllDataFetched(response.length % pageSize === 0);
            setFetchStatus('completed');
            setTimeout(() => {
                setFetchStatus('none');
            }, 1000);
        } catch (err) {
            console.error(err);
            setFetchStatus('failure');
        }
    }

    const handleNextPage = () => {
        setCurrentPage(previousPage => (previousPage + 1));
        fetchData(currentPage + 1);
    }


    return (
        <React.Fragment>
            {children({ data })}
            <div className="flex w-full justify-center text-sm my-4 mx-2">
                <span onClick={handleNextPage} className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default">
                    <span className="flex">
                        {fetchStatus === 'loading' && <svg className="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>}
                        {buttonStateValues[fetchStatus]}
                    </span>
                </span>
            </div>

        </React.Fragment>
    )
}

export default ShowMorePaginationWrapper;