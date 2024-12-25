import { useEffect, useState } from "react";

import * as postsCategoriesService from "_services/postsCategories.service";
import { useToast } from "_contexts/ToastProvider";
import useAuth from "_hooks/useAuth";

const usePostsCategories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');
    const [isAllDataFetched, setAllDataFetched] = useState(false);

    const { toast } = useToast()
    const { logout } = useAuth();

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
        const { limit } = filters || {};
        try{
            setFetchStatus('loading');
            const categoriesData = await postsCategoriesService.getPostsCategories(filters);
            // setCategories((previousData) => [...previousData, ...categoriesData]);
            checkIfAllDataFetched(categoriesData, limit);
            if(categoriesData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
                setTimeout(() => {
                    // setFetchStatus('none');
                }, 1000);
            }
            return categoriesData;
        }catch(error){
            const { statusCode } = error || {};
            if(statusCode === 401){
                setFetchStatus('unauthorised');
            }else{
                setFetchStatus('failure');
            }
        }
    }


    const fetchMyPostCategories = async (filters) => {
        const { limit } = filters || {};
        try{
            setFetchStatus('loading');
            const categoriesData = await postsCategoriesService.getAuthPostsCategories(filters);
            // setCategories((previousData) => [...previousData, ...categoriesData]);
            checkIfAllDataFetched(categoriesData, limit);
            if(categoriesData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
                setTimeout(() => {
                    // setFetchStatus('none');
                }, 1000);
            }
            return categoriesData;
        }catch(error){
            const { statusCode } = error || {};
            if(statusCode === 401){
                logout()
            }
            setFetchStatus('failure');
        }
    }

    const checkIfAllDataFetched = (data, pageSize) => {
        if(pageSize){
            setAllDataFetched(data.length === 0 || data.length % pageSize !== 0);
        }
    }

    const createPostCategory = async (payload) => {
        try {
            const postsResponse = await postsCategoriesService.savePostCategory(payload);
            // const newPostListForState = [...postsList, postsResponse];
            // setPostsList(newPostListForState);
            toast({
                heading: 'Post Category created successfully!',
                description: 'Your post Category is now in review, but will be approved by admin soon!',
                options: { position: 'top-right' }
            }).success()
            // setCategories((previousData) => [postsResponse, ...previousData]);
            return postsResponse;
        } catch (error) {
            const { message='Something went wrong' } = error || {};
            throw message;
        }
    };

    const savePostCategory = async (categoryName) => {
        const postCategoryPayload = {
            category_name: categoryName
        }
        return createPostCategory(postCategoryPayload);
    }

    return {
        categoryData,
        isAllDataFetched,

        categories,
        fetchStatus,

        fetchMyPostCategories,
        fetchPostCategories,
        fetchPostCategoryByName,
        savePostCategory
    }
}

export default usePostsCategories;