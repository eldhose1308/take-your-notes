import React, { useEffect, useState } from "react";

import PostsSuccess from "_pages/posts/states/PostsSuccess";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import PostFilters from "_modules/posts/_components/PostFilters";
import usePosts from "_modules/posts/_hooks/usePosts";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";


const PostsHomeList = (props) => {
    const { pageSize = 10, initialPage = 0, initialData = [], initialFilters=[] } = props;

    const { currentPage, incrementPagination, resetPagination } = useShowMorePagination();
    const { fetchStatus, postsList, fetchPostsData, setPostsList } = usePosts();

    const [filters, setFilters] = useState(initialFilters);
    const [data, setData] = useState(initialData || []);


    const handleFiltersChange = async (newFilters) => {
        const postFilters = {...filters, ...newFilters};
        setFilters(postFilters);
        setData([]);
        const postsFilter = { page: 1, limit: pageSize, ...postFilters };
        const posts = await fetchPostsData(postsFilter);
        resetPagination();
        setData(posts);
    }

    const fetchPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        const posts = await fetchPostsData(postsFilter);
        setData((previousPosts) => [...previousPosts, ...posts]);

        incrementPagination();
        return posts;
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <React.Fragment>
            <ShowMorePaginationWrapper initialFetchStatus={fetchStatus} currentPage={currentPage} fetchDataMethod={fetchPosts}>
                <React.Fragment>
                    <PostFilters onChange={handleFiltersChange} />
                    <PostsSuccess usersPostList={data} />
                </React.Fragment>
            </ShowMorePaginationWrapper>
        </React.Fragment>
    )
}

export default PostsHomeList;