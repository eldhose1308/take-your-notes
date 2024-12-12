import React, { useEffect, useState } from "react";

import PostsSuccess from "_pages/posts/states/PostsSuccess";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import PostFilters from "_modules/posts/_components/PostFilters";
import EmptyUserPosts from "_components/DisplayStates/Empty/EmptyUserPosts";

import usePosts from "_modules/posts/_hooks/usePosts";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";

const pageSize = 30;

const CategoriesPostList = (props) => {
    const { categoryName } = props;

    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });
    const { fetchPostsData, fetchStatus } = usePosts();

    const [filters, setFilters] = useState({ category: categoryName });
    const [data, setData] = useState([]);


    const handleFiltersChange = async (filters) => {
        setFilters(filters);
        setData([]);
        resetPagination();
        const postsFilter = { page: 1, limit: pageSize, ...filters };
        const posts = await fetchPostsData(postsFilter);
        setData(posts);
    }

    const fetchPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        const posts = await fetchPostsData(postsFilter);
        setData((previousPosts) => [...previousPosts, ...posts]);

        incrementPagination();
        checkIfAllDataFetched(posts);
        return posts;
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <React.Fragment>
            <PostFilters onChange={handleFiltersChange} />
            <ShowMorePaginationWrapper key={`posts_${categoryName}_${stringifyJSON(filters)}`} isEmpty={fetchStatus === 'empty'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchPosts}>
                <React.Fragment>
                    {fetchStatus !== 'empty' ? (
                        <PostsSuccess usersPostList={data} />
                    ) : (
                        <EmptyUserPosts />
                    )}
                </React.Fragment>
            </ShowMorePaginationWrapper>
        </React.Fragment>
    )
}

export default CategoriesPostList;