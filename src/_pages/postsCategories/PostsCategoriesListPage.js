import React, { useState, useEffect } from "react";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import PostCategoryFilters from "_modules/posts/_components/PostCategoryFilters";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import PostCategoriesListSuccess from "./states/PostCategoriesListSuccess";
import Typography from "_components/Misc/Typography/Typography";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";
import SearchBar from "_components/UI/SearchBar/SearchBar";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import FollowersUnAuthorised from "_components/DisplayStates/Error/FollowersUnAuthorised";

const pageSize = 30;
const PostsCategoriesListPage = () => {
    const { fetchStatus, fetchPostCategories: fetchPostCategoriesData } = usePostsCategories();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ filters: 'following' });
    const [data, setData] = useState([]);

    const { userName } = getUserDetailsOfCurrentUser();
    const unAuthorisedForListing = !(filters.filters === 'following' && !userName);

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        resetPagination();
        const usersFilter = { page: 1, limit: pageSize, filters: 'following', ...userFilters };
        const users = await fetchPostCategoriesData(usersFilter);
        checkIfAllDataFetched(users);
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

    const handleSearchUsers = (searchQuery) => {
        handleFiltersChange({ search: searchQuery });
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="text-default m-5">
            <div className="flex mx-8">

                <div className="flex justify-between w-full mx-4">
                    <Typography size='lg' type='h2'>Categories</Typography>
                    <div className="flex">
                        <div className="content-center mx-2">
                            <FollowUnfollowToggler onChange={handleFiltersChange} currentMode='following' renderLabel />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between w-full my-2">
                    {unAuthorisedForListing && (
                        <React.Fragment>
                            <PostCategoryFilters onChange={handleFiltersChange} />
                            <SearchBar size='sm' textBoxProps={{
                                placeholder: 'Search Users',
                                placeholderFocus: 'default',
                                isFocused: true
                            }}
                                buttonProps={{
                                    size: 'xs'
                                }}
                                hasSearchIcon={false}
                                onSearch={handleSearchUsers}
                            />
                        </React.Fragment>
                    )}
                </div>

            </div>
            <div className="flex my-2">
                {unAuthorisedForListing ? (
                    <ShowMorePaginationWrapper key={`postCategories_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                        <PostCategoriesListSuccess categoriesList={data} />
                    </ShowMorePaginationWrapper>
                ) : (
                    <FollowersUnAuthorised />
                )}
            </div>
        </div>
    )
}

export default PostsCategoriesListPage;