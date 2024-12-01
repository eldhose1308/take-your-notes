import React, { useEffect, useState } from "react";

import PostsSuccess from "_pages/posts/states/PostsSuccess";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import PostFilters from "_modules/posts/_components/PostFilters";
import usePosts from "_modules/posts/_hooks/usePosts";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";
import useUserPosts from "_modules/users/_hooks/useUserPosts";
import { stringifyJSON } from "_utils/json";


const UsersPostList = (props) => {
    const { pageSize = 10, initialPage = 0, initialData = [], userName } = props;

    const { currentPage, incrementPagination, resetPagination } = useShowMorePagination();
    const { fetchUsersPost, usersPostList, fetchStatus } = useUserPosts({ userName });
    // const { fetchStatus, postsList, fetchPostsData, setPostsList } = usePosts();

    const [filters, setFilters] = useState();
    const [data, setData] = useState(initialData || []);


    const handleFiltersChange = async (filters) => {
        setFilters(filters);
        setData([]);
        const postsFilter = { page: 1, limit: pageSize, ...filters };
        const posts = await fetchUsersPost(postsFilter);
        resetPagination();
        setData(posts);
    }

    const fetchPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        const posts = await fetchUsersPost(postsFilter);
        setData((previousPosts) => [...previousPosts, ...posts]);

        incrementPagination();
        return posts;
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <React.Fragment>
            <ShowMorePaginationWrapper key={`posts_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} fetchDataMethod={fetchPosts}>
                    <PostFilters onChange={handleFiltersChange} />
                <React.Fragment>
                    <PostsSuccess usersPostList={data} />
                </React.Fragment>
            </ShowMorePaginationWrapper>
        </React.Fragment>
    )
}

export default UsersPostList;