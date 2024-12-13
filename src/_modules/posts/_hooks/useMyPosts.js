import { useState, useEffect, useContext, useCallback, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from "react-router-dom";

import * as posts from "_services/posts.service";
import * as postsService from '_services/posts.service';
import * as categoriesService from '_services/postsCategories.service';

import postFormReducer, { initialState } from "./usePostsReducer";
import { PostsContext } from "_contexts/PostsContext";
import { POST_ACTIONS } from "../_constants/postReducerActionTypes";
import { useToast } from "_contexts/ToastProvider";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";

const useMyPosts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id: postSlug } = useParams();
    // const { postDetails, postsList, categoriesList: postsCategoriesList, selectedCategory, setSelectedCategory, setPostsList } = useContext(PostsContext);
    const { toast } = useToast()

    // const selectedCategory = searchParams.get('category');
    const [postFormState, postFormDispatcher] = useReducer(postFormReducer, { ...initialState });
    // const [postFormState, postFormDispatcher] = useReducer(postFormReducer, { ...initialState, postCategory: selectedCategory });
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchMyPostsData = async (filters) => {
        try{
            setFetchStatus('loading');
            const postsData = await postsService.getAuthPosts(filters);
            if(postsData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
                setTimeout(() => {
                    setFetchStatus('none');
                }, 1000);
            }
            return postsData;
        }catch(error){
            setFetchStatus('failure');
            throw error;
        }
    }

    const fetchCategoriesData = async (filters) => {
        try{
            setFetchStatus('loading');
            const categoriesData = await categoriesService.getPostsCategories();
            setFetchStatus('success');
            setTimeout(() => {
                setFetchStatus('none');
            }, 1000);
            return categoriesData;
        }catch(error){
            setFetchStatus('failure');
        }
    };


    const createPost = useCallback(async (payload) => {
        try {
            const postsResponse = await posts.savePost(payload);
            // const newPostListForState = [...postsList, postsResponse];
            // setPostsList(newPostListForState);
            toast({
                heading: 'Post created successfully!',
                description: 'Your post has been successfully published!',
                options: { position: 'top-right' }
            }).success()
            return postsResponse;
        } catch (error) {
            const { message } = error;
            toast({
                heading: 'Oops! There was an error creating your post.',
                description: message,
                options: { position: 'top-right' }
            }).error()
            return false;
        }
    }, []);

    const updatePost = useCallback(async (payload, id) => {
        try {
            const postsResponse = await posts.updatePost(payload, id);
            // const newPostListForState = postsList.map(item => {
            //     if (item.id === id) {
            //         return { id, ...postsResponse };
            //     }
            //     return item;
            // });
            // setPostsList(newPostListForState);
            toast({
                heading: 'Post updated successfully!',
                description: 'Your post has been successfully updated!',
                options: { position: 'top-right' }
            }).success()
            return postsResponse;
        } catch (error) {
            const { message } = error;
            toast({
                heading: 'Oops! There was an error updating your post.',
                description: message,
                options: { position: 'top-right' }
            }).error()
            return false;
        }
    }, []);

    const deletePost = useCallback(async (id) => {
        // yet to implement
    }, []);


    const validatePostForm = (postPayload) => {
        const { postTags, currentVisibilityMode, postCategory, postTitle, markdownContent } = postPayload;
        if (!postCategory) {
            return [true, 'Category is missing'];
        }
        if (!currentVisibilityMode) {
            return [true, 'Post Visibility Mode is missing'];
        }
        if (!postTitle) {
            return [true, 'Post Title is missing'];
        }
        if (!markdownContent) {
            return [true, 'Post content is missing'];
        }

        return [false, ''];
    }


    const savePost = async () => {
        const [error, message] = validatePostForm(postFormState);
        if(error){
            toast({
                heading: 'Oops! Please verify the changes.',
                description: message,
                options: { position: 'top-right' }
            }).error()
            return;
        }

        const { postId, postTags, currentVisibilityMode, postCategory, postTitle, markdownContent } = postFormState;

        // validate

        const postPayload = {
            category: postCategory.id,
            content: markdownContent,
            post_title: postTitle,
            visibility: currentVisibilityMode
        }
        return postSlug ? updatePost(postPayload, postId) : createPost(postPayload);
    }


    useEffect(() => {
        if (!postSlug) {
            return
        }

        const fetchUsersPostItem = async () => {
            const { userName } = getUserDetailsOfCurrentUser();
            try {

                setFetchStatus('loading');
                const usersPostData = await postsService.getPostBySlug({ userName, postSlug });
                const { id: postId, category, content, postTitle, user } = usersPostData || {};
                const { categoryId, categoryName } = category || {};
                const { fullName, avatar } = user || {};

                const payload = { postId, markdownContent: content, postTitle, postCategory: { id: categoryId, categoryName, value: categoryId } };

                postFormDispatcher({ type: POST_ACTIONS.SET_FIELDS, payload });

                setFetchStatus('success');
            } catch (error) {
                setFetchStatus('failure');
            }
        }

        fetchUsersPostItem();
    }, [postSlug])

    return {
        // postDetails,
        // selectedCategory,
        // setSelectedCategory,
        // posts: postsList,
        // categories: postsCategoriesList,
        fetchCategoriesData,
        fetchMyPostsData,

        savePost,
        deletePost,
        
        postFormState,
        postFormDispatcher,
        fetchStatus
    };
}

export default useMyPosts;