import { useState, useEffect, useContext, useCallback, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from "react-router-dom";

import * as posts from "_services/posts.service";
import * as postsCategories from "_services/postsCategories.service";
import postFormReducer, { initialState } from "./usePostsReducer";
import { PostsContext } from "_contexts/PostsContext";
import { POST_ACTIONS } from "../_constants/postReducerActionTypes";
import { useToast } from "_contexts/ToastProvider";

const useMyPosts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id: postId } = useParams();
    const { postDetails, postsList, categoriesList: postsCategoriesList, selectedCategory, setSelectedCategory, setPostsList } = useContext(PostsContext);
    const { toast } = useToast()

    // const selectedCategory = searchParams.get('category');
    const [postFormState, postFormDispatcher] = useReducer(postFormReducer, { ...initialState, postCategory: selectedCategory });

    const createPost = useCallback(async (payload) => {
        try{
            const postsResponse = await posts.savePost(payload);
            const newPostListForState = [...postsList, postsResponse];
            setPostsList(newPostListForState);
            toast({
                heading: 'Post created successfully!',
                description: 'Your post has been successfully published!',
                options: { position: 'top-right' }
            }).success()
            return postsResponse;
        }catch(error){
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
        try{
            const postsResponse = await posts.updatePost(payload, id);
            const newPostListForState = postsList.map(item => {
                if (item.id === id) {
                    return { id, ...postsResponse };
                }
                return item;
            });
            setPostsList(newPostListForState);
            toast({
                heading: 'Post updated successfully!',
                description: 'Your post has been successfully updated!',
                options: { position: 'top-right' }
            }).success()
            return postsResponse;
        }catch(error){
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


    const savePost = async () => {
        const { postTags, currentVisibilityMode, postCategory, postTitle, markdownContent } = postFormState;

        // validate
        
        const postPayload = {
            category: postCategory.id,
            content: markdownContent,
            post_title: postTitle
        }
        return postId ? updatePost(postPayload, postId) : createPost(postPayload);
    }


    useEffect(() => {
        if (!postId) {
            return
        }

        if (postDetails && postDetails[postId]) {
            const { category, content, postTitle, postSlug } = postDetails[postId] || {};
            const { categoryId, categoryName } = category;

            const payload = { markdownContent: content, postTitle, postCategory: { id: categoryId, categoryName, value: postId } };

            postFormDispatcher({ type: POST_ACTIONS.SET_FIELDS, payload });
        }
    }, [postId, postDetails])

    return {
        postDetails,
        selectedCategory,
        setSelectedCategory,
        posts: postsList,
        categories: postsCategoriesList,
        savePost,
        deletePost,
        postFormState,
        postFormDispatcher,
    };
}

export default useMyPosts;