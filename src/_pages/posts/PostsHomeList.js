import React, { useEffect, useState } from "react";

import PostsSuccess from "_pages/posts/states/PostsSuccess";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import PostFilters from "_modules/posts/_components/PostFilters";
import usePosts from "_modules/posts/_hooks/usePosts";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";
import { stringifyJSON } from "_utils/json";
import { usePostsCache } from "_contexts/PostsContext";

const pageSize = 50;

const PostsHomeList = (props) => {
    const { hasMultipleCategoryFilter, userPreferredFilters={} } = props;

    const { payload: initialFilters, data: preferenceData } = userPreferredFilters;

    const { cachePostsList, getCachedPostsList, getCachedFilters, setCachedFilters, getPreviousPage, setPreviousPage } = usePostsCache();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize, previousPageFromCache: getPreviousPage() });
    const { fetchStatus, fetchPostsData } = usePosts();

    const [filters, setFilters] = useState({ ...initialFilters, ...getCachedFilters() });
    const [data, setData] = useState([]);


    const handlePostsData = (posts) => {
        checkIfAllDataFetched(posts);
        setData(posts);
        cachePostsList(posts);
    }

    const handleFiltersChange = async (newFilters) => {
        const postFilters = { ...filters, ...newFilters };
        setFilters(postFilters);

        setCachedFilters(postFilters);

        setData([]);
        resetPagination();
        const postsFilter = {  page: 1, limit: pageSize, ...postFilters };
        try{
            const posts = await fetchPostsData(postsFilter);
            handlePostsData(posts);
        }catch(e){
            console.log(e);
        }
    }

    const fetchPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };

        try{

            const posts = await fetchPostsData(postsFilter);
            handlePostsData([ ...data, ...posts ]);
            incrementPagination();
            setPreviousPage(currentPage + 1);

            return posts;
        }catch(e){
            console.log(e);
            // throw e;
        }
    }


    const handleCachedData = (cachedPostData) => {
        handlePostsData(cachedPostData);
    }


    
    useEffect(() => {

        const checkOnCacheAndFetch = () => {
            const cachedPostData = getCachedPostsList();
            if(cachedPostData.length > 0){
                handleCachedData(cachedPostData);
                return;
            }
            fetchPosts();

        }

        checkOnCacheAndFetch();
    }, [])

    return (
        <React.Fragment>
            <PostFilters filters={filters} onChange={handleFiltersChange} hasMultipleCategoryFilter={hasMultipleCategoryFilter} />
            <ShowMorePaginationWrapper key={`posts_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchPosts}>
                <React.Fragment>
                    <PostsSuccess usersPostList={data} />
                </React.Fragment>
            </ShowMorePaginationWrapper>
        </React.Fragment>
    )
}

export default PostsHomeList;