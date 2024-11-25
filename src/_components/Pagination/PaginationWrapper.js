import React, { useState, useEffect } from "react";

const PaginationWrapper = (props) => {
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
            setData(response);
            setAllDataFetched(response.length % pageSize === 0);
            setFetchStatus('success');
        } catch (err) {
            console.error(err);
            setFetchStatus('failure');
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        fetchData(newPage);
    }


    return (
        <React.Fragment>
            {children({ data })}
            <div className="flex w-full justify-between text-sm my-4 mx-2">
            {/* <div className="my-1 items-center">
                Showing <span className="font-bold">{data.length}</span> entries
            </div> */}

            {/* <div className="pagination-controls my-1 flex items-center">

                <span className={`flex items-center mx-1 py-1 px-2 rounded-md cursor-pointer border bg-transparent ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover-accent hover-text-custom'}`} onClick={() => !(currentPage === 1) ? handlePageChange(currentPage - 1) : ()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                    <span className="ml-2">Previous</span>
                </span>

                {currentPage > 2 && <React.Fragment><span className={`flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent bg-transparents hover-accent hover-text-custom`} onClick={() => handlePageChange(1)}>
                    <span className="">1</span>
                </span>

                <span className="flex items-center mx-1 py-1 px-2 rounded-md bg-transparent " onClick={() => handlePageChange(currentPage + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </span></React.Fragment>}

                {currentPage !== 1 && <span className={`flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent bg-transparents hover-accent hover-text-custom`} onClick={() => handlePageChange(currentPage - 1)}>
                    <span className="">{currentPage - 1}</span>
                </span>}

                <span className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-accent hover-text-custom cursor-not-allowed">
                    <span className="">{currentPage}</span>
                </span>

                {!isAllDataFetched && <span className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent bg-transparent hover-accent hover-text-custom" onClick={() => handlePageChange(currentPage + 1)}>
                    <span className="">{currentPage + 1}</span>
                </span>}
                

                <span className={`flex items-center mx-1 py-1 px-2 rounded-md cursor-pointer border bg-transparent ${isAllDataFetched ? 'opacity-50 cursor-not-allowed' : 'hover-accent hover-text-custom'}`} onClick={() => !isAllDataFetched ? handlePageChange(currentPage + 1) : ()=>{}}>
                    <span className="mr-2">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </span>
            </div> */}
            </div>

        </React.Fragment>
    )
}

export default PaginationWrapper;