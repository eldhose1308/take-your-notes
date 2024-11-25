import { useEffect, useState } from "react";

import * as postsCategoriesService from "_services/postsCategories.service";

const usePostsCategories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchPostCategoryByName = async (categorySlug) => {
        try{
            setFetchStatus('loading');
            const categoryInfo = await postsCategoriesService.getPostsCategoryBySlug(categorySlug);
            setCategoryData(categoryInfo);
            setFetchStatus('success');
            return categoryInfo;
        }catch(error){
            setFetchStatus('failure');
        }
    }


    const fetchPostCategories = async (filters) => {
        try{
            setFetchStatus('loading');
            const categoriesData = await postsCategoriesService.getPostsCategories(filters);
            setCategories(categoriesData);
            setFetchStatus('success');
            return categoriesData;
        }catch(error){
            setFetchStatus('failure');
        }
    }


    return {
        categoryData,

        categories,
        fetchStatus,

        fetchPostCategories,
        fetchPostCategoryByName
    }
}

export default usePostsCategories;