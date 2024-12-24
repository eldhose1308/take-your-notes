import React, { useState, useEffect, useMemo } from "react";

import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";
import usePostsCategories from "../_hooks/usePostsCategories";
import CategoryCreateModal from "_modules/modals/CategoryCreateModal";
import useDebounce from "_hooks/useDebounce";

const pageSize = 30;

const PostCategory = ({ category, categoryList_arg, onChange = () => { }, hasAddOption = true }) => {
    const { savePostCategory, fetchPostCategories, fetchStatus: categoryFetchStatus, isAllDataFetched, categories: categoryList } = usePostsCategories();

    const [filters, setFilters] = useState({ filters: 'explore', limit: pageSize, page: 1 });
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [data, setData] = useState([]);

    const { id, categoryName: label = 'Select a category' } = useMemo(() => selectedCategory || {}, [selectedCategory]);

    const [newCategoryModalData, setNewCategoryModalData] = useState(null);
    const debounce = useDebounce();

    const handlePostCategoryChange = (id, category) => {
        const { categorySlug='' } = category || {};
        setSelectedCategory(category);
        onChange(id, category, categorySlug);
    }

    const handleFetchPostCategories = async (newFilters = []) => {
        const usersFilter = { ...filters, ...newFilters };
        const users = await fetchPostCategories(usersFilter);
        setData((previousUsers) => [...previousUsers, ...users]);
        setFilters((previousFilters) => ({ ...previousFilters, page: previousFilters.page + 1 }));
    }

    const handleSavePostCategory = async (categoryData) => {
        const newCategoryData = await savePostCategory(categoryData);
        onChange(newCategoryData.id, newCategoryData);
    }

    const handleSearchQuery = async (value) => {
        // setFilters({ ...filters, page: 1 });
        const usersFilter = { ...filters, ...{ search: value, page: 1 } };
        const users = await fetchPostCategories(usersFilter);
        setData(users);
        setFilters((previousFilters) => ({ ...previousFilters, page: 2 }));

        // handleFetchPostCategories({ search: value, page: 1 });
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
                    options={data}
                    onChange={handlePostCategoryChange}
                    isFetching={categoryFetchStatus === 'loading'}
                    isAllDataFetched={isAllDataFetched}
                    onNewOptions={handleFetchPostCategories}
                    onSearch={debounce(handleSearchQuery, 500)}
                    renderAdd={hasAddOption ? (searchQuery) => {
                        if (!searchQuery) {
                            return;
                        }
                        return <span className="block w-full" onClick={() => handleOpenCategoryCreateModal(searchQuery)}>Create new "{searchQuery}"</span>
                    } : () => { }}
                    selectedValue={id}
                    idKey='id'
                    labelKey='categoryName'
                />
                {!!id && <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-text-destructive" onClick={() => handlePostCategoryChange('',)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg>
                </span>}
                {/* )} */}
            </Combobox>

            {!!newCategoryModalData && <CategoryCreateModal onClose={handleCloseCategoryModal} categoryModalData={newCategoryModalData} />}
        </React.Fragment>
    )
}

export default PostCategory;