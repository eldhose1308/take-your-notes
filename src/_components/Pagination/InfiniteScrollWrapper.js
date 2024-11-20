import React, { useState, useRef, useEffect } from "react";

const InfiniteScrollWrapper = (props) => {
    const { fetchDataMethod, pageSize = 20, initialPage = 1, initialData = [], children } = props;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [data, setData] = useState(initialData);
    const [isAllDataFetched, setAllDataFetched] = useState(false);

    const [fetchStatus, setFetchStatus] = useState('none');

    const scrollContainerRef = useRef(null);

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

    const handleScroll = (e) => {
        if (fetchStatus === 'loading' || !isAllDataFetched) return;

        // Check if user scrolled to the bottom
        // const scrollHeight = document.documentElement.scrollHeight;
        // const scrollTop = document.documentElement.scrollTop;
        // const clientHeight = document.documentElement.clientHeight;

        // if (scrollHeight - scrollTop <= clientHeight + 50) {
        //     fetchData();
        // }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [fetchStatus, isAllDataFetched]);

    return (
        <React.Fragment>
            <div ref={scrollContainerRef}>
                {children({ data })}
            </div>
            <div className="flex w-full justify-center text-sm">
            </div>
        </React.Fragment>
    )
}

export default InfiniteScrollWrapper;