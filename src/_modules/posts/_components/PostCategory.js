import React, { useState, useEffect, useMemo } from "react";

import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";
import usePostsCategories from "../_hooks/usePostsCategories";
import CategoryCreateModal from "_modules/modals/CategoryCreateModal";

const pageSize = 30;

const PostCategory = ({ category, categoryList_arg, onChange = () => { } }) => {
    const { id, categoryName: label = 'Select a category' } = useMemo(() => category || {}, [category]);
    const { savePostCategory, fetchPostCategories, fetchStatus: categoryFetchStatus, isAllDataFetched, categories: categoryList } = usePostsCategories();

    const [filters, setFilters] = useState({ limit: pageSize, page: 1 });

    const [newCategoryModalData, setNewCategoryModalData] = useState(null);

    const handleFetchPostCategories = async (newFilters=[]) => {
        const usersFilter = { ...filters, ...newFilters };
        const users = await fetchPostCategories(usersFilter);
        setFilters((previousFilters) => ({ ...previousFilters, page: previousFilters.page + 1 }));
    }

    const handleSavePostCategory = async (categoryData) => {
        const newCategoryData = await savePostCategory(categoryData);
        onChange(newCategoryData.id, newCategoryData);
    }

    const handleSearchQuery = (value) => {
        handleFetchPostCategories({ search: value });
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
        handleFetchPostCategories();
    }, [])


    return (
        <React.Fragment>
        <Combobox key={`${id}_${label}`} >
            {/* {categoryFetchStatus === 'loading' ? (
                <span>Loading...</span>
            ) : ( */}
                <ComboboxTrigger>
                    <span className='flex mx-1 items-center text-secondary cursor-pointer'>
                        <span className=''>{label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path></svg>
                    </span>
                </ComboboxTrigger>
            {/* )} */}

            {/* {categoryFetchStatus === 'success' && ( */}
                <ComboboxContent
                    heading='Select a category'
                    options={categoryList}
                    onChange={onChange}
                    isFetching={categoryFetchStatus === 'loading'}
                    isAllDataFetched={isAllDataFetched}
                    onNewOptions={handleFetchPostCategories}
                    onSearch={handleSearchQuery}
                    renderAdd={(searchQuery) => {
                        if(!searchQuery){
                            return;
                        }
                        return <span onClick={() => handleOpenCategoryCreateModal(searchQuery)}>Create new "{searchQuery}"</span>
                    }}
                    selectedValue={id}
                    idKey='id'
                    labelKey='categoryName'
                />
            {/* )} */}
        </Combobox>

            {!!newCategoryModalData && <CategoryCreateModal onClose={handleCloseCategoryModal} categoryModalData={newCategoryModalData} />}
        </React.Fragment>
        )
}

export default PostCategory;