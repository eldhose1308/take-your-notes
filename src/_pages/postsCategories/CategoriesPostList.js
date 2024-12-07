import React, { useEffect, useState } from "react";

import PostsSuccess from "_pages/posts/states/PostsSuccess";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import PostFilters from "_modules/posts/_components/PostFilters";
import usePosts from "_modules/posts/_hooks/usePosts";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";
import useUserPosts from "_modules/users/_hooks/useUserPosts";
import { stringifyJSON } from "_utils/json";
import EmptyUserPosts from "_components/DisplayStates/Empty/EmptyUserPosts";


const CategoriesPostList = (props) => {
    const { pageSize = 10, initialPage = 0, initialData = [], userName, categoryName } = props;

    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });
    const { fetchPostsData, fetchStatus } = usePosts();

    const [filters, setFilters] = useState({ category: categoryName });
    const [data, setData] = useState([]);
    console.log('@data',data)


    const handleFiltersChange = async (filters) => {
        setFilters(filters);
        setData([]);
        const postsFilter = { page: 1, limit: pageSize, ...filters };
        const posts = await fetchPostsData(postsFilter);
        resetPagination();
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