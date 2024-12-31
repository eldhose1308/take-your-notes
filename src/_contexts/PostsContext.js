import React, { createContext, useState, useEffect, useMemo, useContext, useRef } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [postsList, setPostsList] = useState({});
    const [filters, setFilters] = useState([]);
    const clickedPost = useRef({});
    const previousPage = useRef({});

    const [usersPostsList, setUsersPostsList] = useState([]);
    const [usersPostFilters, setUsersPostFilters] = useState([]);



    const cachePostsList = (newPostsList) => {
        console.log('@cachePostsList', newPostsList);
        setPostsList((previousPostCache) => ({ ...previousPostCache, [window.location.href]: newPostsList }));
    }

    const cacheUsersPostsList = (newPostsList, newFilters) => {
        setUsersPostsList(newPostsList);
        setUsersPostFilters(newFilters)
    }

    const getLastClickedPost = () => {
        // return '';
        return clickedPost.current[window.location.href] || '';
    }

    const setLastClickedPost = (postSlug) => {
        clickedPost.current[window.location.href] = postSlug;
    }


    const getCachedPostsList = () => {
        console.log('@postsList', postsList, previousPage.current);
        return postsList[window.location.href] || [];
    }

    const getCachedFilters = () => {
        return filters[window.location.href] || [];
    }

    const setCachedFilters = (newFilters) => {
        setPostsList([]);
        setFilters((previousFiltersCache) => ({ ...previousFiltersCache, [window.location.href]: newFilters }));
    }

    const getPreviousPage = () => {
        return previousPage.current[window.location.href] || 0;
    }

    const setPreviousPage = (page) => {
        previousPage.current[window.location.href] = page;
    }

    // const setCachedPostsList = (newPostsList) => {
    //     setPostsList(newPostsList);
    // }

    const usersPostCache = {
        cachedUsersPostList: usersPostsList,
        cachedUsersPostFilters: usersPostFilters,
        cacheUsersPostsList
    }

    const lastClickedPOJO = {
        setLastClickedPost,
        getLastClickedPost
    }

    const postsCache = {
        getCachedPostsList,

        getCachedFilters,
        setCachedFilters,

        getPreviousPage,
        setPreviousPage
        // setCachedPostsList,
    }

    return (
        <PostsContext.Provider value={{ ...usersPostCache, ...lastClickedPOJO, ...postsCache, cachePostsList, clickedPost, cachedFilters: filters, cachedPostsList: postsList, setPostsList }}>
            {children}
        </PostsContext.Provider>
    );
};



const usePostsCache = () => {
    const context = useContext(PostsContext)

    if (!context) {
        throw new Error('usePostsCache must be used within PostsContext')
    }

    return context
}

export { usePostsCache };

