import React, { useState, useEffect } from "react";

import Failure from "_components/State/Failure";
import UnAuthorised from "_components/State/UnAuthorised";
import Empty from "_components/State/Empty";


const buttonStateValues = {
    none: 'Show More',
    loading: 'Fetching data',
    failure: 'Failed to fetch',
    success: 'Show More',
}

const ShowMorePaginationWrapper = (props) => {
    const { UnauthorisedState=UnAuthorised, EmptyState=Empty, FailureState=Failure, fetchDataMethod, initialFetchStatus = 'none', pageSize = 10, isEmpty = false, currentPage = 1, isAllDataFetched = false, initialData = [], children } = props;

    // const [currentPage, setCurrentPage] = useState(initialPage);
    // const [data, setData] = useState(initialData || []);
    // const [isAllDataFetched, setAllDataFetched] = useState(false);

    const [fetchStatus, setFetchStatus] = useState(initialFetchStatus);
    // use lru for caching the results so that memory doesnt become full

    useEffect(() => {
        setFetchStatus(initialFetchStatus);
    }, [initialFetchStatus])

    const fetchData = async (newPage) => {
        setFetchStatus('loading');
        try {
            const response = await fetchDataMethod();
            // setData((previousData) => [...previousData, ...response]);
            // setAllDataFetched(response.length === 0 || response.length % pageSize !== 0);
            setFetchStatus('success');
            setTimeout(() => {
                setFetchStatus('none');
            }, 1000);
        } catch (err) {
            console.error(err);
            setFetchStatus('failure');
        }
    }

    const handleNextPage = () => {
        if(fetchStatus === 'loading'){
            return
        }
        // setCurrentPage(previousPage => (previousPage + 1));
        fetchData(currentPage + 1);
    }

    if (fetchStatus === 'unauthorised') {
        return (
            <React.Fragment>
                {UnauthorisedState && <UnauthorisedState />}
            </React.Fragment>
        )
    }

    if (fetchStatus === 'empty') {
        return (
            <React.Fragment>
                {EmptyState && <EmptyState />}
            </React.Fragment>
        )
    }

    if (fetchStatus === 'failure') {
        return (
            <React.Fragment>
                {FailureState && <FailureState />}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {children}
            {/* {children({ data, resetPagination, currentPage, pageSize })} */}
            {(!isAllDataFetched) && <div className="flex w-full justify-center text-sm my-4 mx-2">
                <span onClick={handleNextPage} className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default">
                    <span className="flex">
                        {fetchStatus === 'loading' && <svg className="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>}
                        {buttonStateValues[fetchStatus]}
                    </span>
                </span>
            </div>}

        </React.Fragment>
    )
}

export default ShowMorePaginationWrapper;