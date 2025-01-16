import React, { useState, useEffect, useMemo } from "react";

import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";
import useUsers from "../_hooks/useUsers";

import useDebounce from "_hooks/useDebounce";

const pageSize = 40;

const UsersDropdown = ({ my = true,category, onChange = () => { } }) => {
    const { fetchUsersData, fetchStatus: categoryFetchStatus, isAllDataFetched } = useUsers();
    const fetchPostCategoriesMethod = fetchUsersData;

    const [filters, setFilters] = useState({ filters: 'explore', verified: 'all', limit: pageSize, page: 1 });
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [data, setData] = useState([]);

    const { id, categorySlug, categoryName: label = 'Select a user' } = useMemo(() => selectedCategory || {}, [selectedCategory]);
    const { id: value } = useMemo(() => data.find((dataItem) => dataItem.categorySlug === categorySlug) || {}, [data, categorySlug]);

    const debounce = useDebounce();

    const handlePostCategoryChange = (id, category) => {
        const { categorySlug = '' } = category || {};
        setSelectedCategory(category);
        onChange(id, category, categorySlug);
    }

    const handleFetchPostCategories = async (newFilters = []) => {
        const usersFilter = { ...filters, ...newFilters };
        try {
            const users = await fetchPostCategoriesMethod(usersFilter);
            setData((previousUsers) => [...previousUsers, ...users]);
            setFilters((previousFilters) => ({ ...previousFilters, page: previousFilters.page + 1 }));
        } catch (err) {
            console.error(err);
            // throw err;
        }
    }


    const handleSearchQuery = async (value) => {
        // setFilters({ ...filters, page: 1 });
        const usersFilter = { ...filters, ...{ search: value, page: 1 } };
        try{

            const users = await fetchPostCategoriesMethod(usersFilter);
            setData(users);
            setFilters((previousFilters) => ({ ...previousFilters, page: 2 }));
        }catch(err){
            console.error(err);
        }

        // handleFetchPostCategories({ search: value, page: 1 });
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
                    heading='Select a user'
                    options={data}
                    onChange={handlePostCategoryChange}
                    isFetching={categoryFetchStatus === 'loading'}
                    isAllDataFetched={isAllDataFetched}
                    onNewOptions={handleFetchPostCategories}
                    onSearch={debounce(handleSearchQuery, 500)}
                    selectedValue={value}
                    idKey='userName'
                    labelKey='userName'
                    isSpecialKey='isVerified'
                />
                {!!id && <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-text-destructive" onClick={() => handlePostCategoryChange('',)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg>
                </span>}
                {/* )} */}
            </Combobox>

        </React.Fragment>
    )
}

export default UsersDropdown;