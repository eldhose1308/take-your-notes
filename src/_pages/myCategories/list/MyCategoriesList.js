import React, { useState, useEffect } from "react";

import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import PostCategoryFilters from "_modules/posts/_components/PostCategoryFilters";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import PostCategoriesListSuccess from "_pages/postsCategories/states/PostCategoriesListSuccess";
import Typography from "_components/Misc/Typography/Typography";

import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import VerifiedNonVerifiedToggler from "_modules/togglers/VerifiedNonVerifiedToggler";

import * as postsCategoriesService from "_services/postsCategories.service";
import MainCategoriesInCard from "_modules/postCategories/_components/MainCategoriesInCard";
import CategoryCreateModal from "_modules/modals/CategoryCreateModal";

const pageSize = 30;
const MyCategoriesList = () => {
    const { fetchStatus, fetchMyPostCategories, savePostCategory } = usePostsCategories();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ verified: 'verified' });
    const [data, setData] = useState([]);

    const [newCategoryModalData, setNewCategoryModalData] = useState(null);


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

    const handleSavePostCategory = async (categoryData) => {
        const newCategoryData = await savePostCategory(categoryData);
        handleFiltersChange({ verified: 'unverified' });
        // setData((previousUsers) => [...previousUsers, newCategoryData]);
    }

    const handleOpenCategoryCreateModal = (categoryNameInput) => {
        const categoryName = typeof categoryNameInput === 'string' ? categoryNameInput : '';
        const dialogData = {
            data: { categoryName },
            status: true,
            onClick: handleSavePostCategory
        }
        setNewCategoryModalData(dialogData)
    }

    const handleCloseCategoryModal = () => {
        setNewCategoryModalData(null);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <React.Fragment>
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

                                <div onClick={handleOpenCategoryCreateModal} className="flex text-sm p-2 my-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1">
                                    Create New
                                    <span className="flex items-center pl-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                    </span>
                                </div>

                                <VerifiedNonVerifiedToggler onChange={handleFiltersChange} currentMode={filters.verified} renderLabel />
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
                    <ShowMorePaginationWrapper isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                        <PostCategoriesListSuccess categoriesList={data} hasAuthActions />
                    </ShowMorePaginationWrapper>
                </div>
            </div>

            {!!newCategoryModalData && <CategoryCreateModal onClose={handleCloseCategoryModal} categoryModalData={newCategoryModalData} />}

        </React.Fragment>
    )
}

export default MyCategoriesList;