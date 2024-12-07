import React, { useState, useEffect } from "react";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import useUsers from "_modules/users/_hooks/useUsers";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import PostCategoryFilters from "_modules/posts/_components/PostCategoryFilters";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import PostCategoriesListSuccess from "./states/PostCategoriesListSuccess";
import Typography from "_components/Misc/Typography/Typography";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";

const pageSize = 30;
const PostsCategoriesListPage = () => {
    const { fetchStatus, fetchPostCategories: fetchPostCategoriesData } = usePostsCategories();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState();
    const [data, setData] = useState([]);

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        const usersFilter = { page: 1, limit: pageSize, filters: 'following', ...userFilters };
        const users = await fetchPostCategoriesData(usersFilter);
        resetPagination();
        setData(users);
    }


    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, filters: 'following', ...filters };
        const users = await fetchPostCategoriesData(usersFilter);
        setData((previousUsers) => [...previousUsers, ...users]);

        incrementPagination();
        checkIfAllDataFetched(users);
        return users;
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="text-default m-5">
            <div className="flex justify-between mx-8">
                <Typography size='lg' type='h2'>Categories</Typography>
                <div className="flex">
                <div className="content-center mx-2">
                        <FollowUnfollowToggler onChange={handleFiltersChange} currentMode='following' renderLabel />
                    </div>
                    <PostCategoryFilters onChange={handleFiltersChange} />
                    <span>Search</span>
                </div>
            </div>
            <div className="flex my-2">
                <ShowMorePaginationWrapper key={`users_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                    <PostCategoriesListSuccess categoriesList={data} />
                </ShowMorePaginationWrapper>
            </div>
        </div>
    )
}

export default PostsCategoriesListPage;