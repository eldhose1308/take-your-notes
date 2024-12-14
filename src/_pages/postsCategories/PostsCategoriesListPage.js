import React, { useState, useEffect } from "react";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import CategoryFollowingsUnAuthorised from "_components/DisplayStates/Error/CategoryFollowingsUnAuthorised";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import PostCategoryFilters from "_modules/posts/_components/PostCategoryFilters";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import PostCategoriesListSuccess from "./states/PostCategoriesListSuccess";
import Typography from "_components/Misc/Typography/Typography";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";
import SearchBar from "_components/UI/SearchBar/SearchBar";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import { Stencil } from "_components/Loader";
import EmptyFollowingCategories from "_components/DisplayStates/Empty/EmptyFollowingCategories";
import useComponentFetchState from "_hooks/useComponentFetchState";

const pageSize = 30;
const PostsCategoriesListPage = () => {
    const { fetchStatus, fetchPostCategories: fetchPostCategoriesData } = usePostsCategories();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ filters: 'explore' });
    const [data, setData] = useState([]);

    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        empty: <EmptyFollowingCategories />,
        unauthorised: <CategoryFollowingsUnAuthorised />,
        success: <PostCategoriesListSuccess categoriesList={data} />
    });

    const { userName } = getUserDetailsOfCurrentUser();
    const authorisedForListing = !(filters.filters === 'following' && !userName) && fetchStatus !== 'unauthorised';

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        resetPagination();
        const usersFilter = { page: 1, limit: pageSize, ...userFilters };
        try{

            const users = await fetchPostCategoriesData(usersFilter);
            checkIfAllDataFetched(users);
            setData(users);
        }catch(err){        
            console.error(err);
        }
    }


    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        try{

            const users = await fetchPostCategoriesData(usersFilter);
            setData((previousUsers) => [...previousUsers, ...users]);
            
            incrementPagination();
            checkIfAllDataFetched(users);
            return users;
        }catch(err){
            console.error(err);
        }
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
                    {authorisedForListing && (
                        <React.Fragment>
                            <PostCategoryFilters onChange={handleFiltersChange} />
                            <SearchBar size='sm' textBoxProps={{
                                placeholder: 'Search Categories',
                                placeholderFocus: 'default',
                                // isFocused: true
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
                {/* {authorisedForListing ? ( */}
                    <ShowMorePaginationWrapper key={`postCategories_${stringifyJSON(filters)}`} isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                        {/* <PostCategoriesListSuccess categoriesList={data} /> */}
                        {CategoriesComponentState}
                    </ShowMorePaginationWrapper>
                {/* ) : (
                    <CategoryFollowingsUnAuthorised />
                )} */}
            </div>
        </div>
    )
}

export default PostsCategoriesListPage;