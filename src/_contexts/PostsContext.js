import React, { createContext, useState, useEffect, useMemo } from 'react';

import * as postsService from '_services/posts.service';
import * as categoriesService from '_services/postsCategories.service';
import { useToast } from './ToastProvider';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [postsList, setPostsList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { toast } = useToast()

    const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}), [postsList])

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await postsService.getAuthPosts();
            setPostsList(postsData);
        };

        const fetchCategories = async () => {
            const categoriesData = await categoriesService.getPostsCategories();
            setCategoriesList(categoriesData);
            setSelectedCategory(categoriesData.length > 0 ? categoriesData[0] : null)
        };

        fetchPosts();
        fetchCategories();
    }, []);

    return (
        <PostsContext.Provider value={{ postsList, categoriesList, selectedCategory, setSelectedCategory, setPostsList, postDetails: normalisedPosts }}>
            {children}
        </PostsContext.Provider>
    );
};
