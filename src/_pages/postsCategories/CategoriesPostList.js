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

    const handleFiltersChange = async (newFilters) => {
        const categoryPostFilters = { ...filters, ...newFilters };
        setFilters(categoryPostFilters);
        setData([]);
        resetPagination();
        const postsFilter = { page: 1, limit: pageSize, ...categoryPostFilters };
        try{
            const posts = await fetchPostsData(postsFilter);
            checkIfAllDataFetched(posts);
            setData(posts);
        }catch(e){
            console.log(e);
        }
    }

    const fetchPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        try{
            const posts = await fetchPostsData(postsFilter);
            setData((previousPosts) => [...previousPosts, ...posts]);
            
            incrementPagination();
            checkIfAllDataFetched(posts);
            return posts;
        }catch(e){
            console.log(e);
            throw e;
        }
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <React.Fragment>
            <PostFilters onChange={handleFiltersChange} />
            <ShowMorePaginationWrapper EmptyState={EmptyUserPosts} key={`posts_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchPosts}>
                <React.Fragment>
                    <PostsSuccess usersPostList={data} />
                </React.Fragment>
            </ShowMorePaginationWrapper>
        </React.Fragment>
    )
}

export default CategoriesPostList;