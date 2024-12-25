import React, { useState, useEffect } from "react";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import CategoryFollowingsUnAuthorised from "_components/DisplayStates/Error/CategoryFollowingsUnAuthorised";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import PostCategoryFilters from "_modules/posts/_components/PostCategoryFilters";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import PostCategoriesListSuccess from "_pages/postsCategories/states/PostCategoriesListSuccess";
import Typography from "_components/Misc/Typography/Typography";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";

import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import { Stencil } from "_components/Loader";
import EmptyFollowingCategories from "_components/DisplayStates/Empty/EmptyFollowingCategories";
import useComponentFetchState from "_hooks/useComponentFetchState";
import VerifiedNonVerifiedToggler from "_modules/togglers/VerifiedNonVerifiedToggler";

const pageSize = 30;
const MyCategoriesList = () => {
    const { fetchStatus, fetchMyPostCategories } = usePostsCategories();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ verified: 'verified' });
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
        try {
            const users = await fetchMyPostCategories(usersFilter);
            checkIfAllDataFetched(users);
            setData(users);
        } catch (err) {
            console.error(err);
        }
    }


    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        try {

            const users = await fetchMyPostCategories(usersFilter) || [];
            setData((previousUsers) => [...previousUsers, ...users]);

            incrementPagination();
            checkIfAllDataFetched(users);
            return users;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }


    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="text-default m-5">
            <div className="flex">

                <div className="flex justify-between w-full">
                    <div className="flex flex-col mx-2 my-2">
                        <Typography size='lg' type='h2'>Your Categories</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>
                            List of all the categories published by you (Verified/Pending/Rejected)
                        </Typography>
                    </div>
                    <div className="flex">
                        <div className="content-center mx-2">
                            <VerifiedNonVerifiedToggler onChange={handleFiltersChange} currentMode='following' renderLabel />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between w-full my-2">
                    {authorisedForListing && (
                        <React.Fragment>
                            <PostCategoryFilters onChange={handleFiltersChange} />
                        </React.Fragment>
                    )}
                </div>

            </div>
            <div className="flex my-2">
                {/* {authorisedForListing ? ( */}
                <ShowMorePaginationWrapper isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                    {/* <PostCategoriesListSuccess categoriesList={data} /> */}
                    {/* {CategoriesComponentState} */}
                    <PostCategoriesListSuccess categoriesList={data} />
                </ShowMorePaginationWrapper>
                {/* ) : (
                    <CategoryFollowingsUnAuthorised />
                )} */}
            </div>
        </div>
    )
}

export default MyCategoriesList;