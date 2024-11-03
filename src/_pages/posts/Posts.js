import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PostForm from "_modules/posts/_components/form/PostForm";
import PostList from "_modules/posts/_components/list/PostList";

import * as posts from "_services/posts.service";
import * as postsCategories from "_services/postsCategories.service";



const Posts = ({ action='list' }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [isCreating, setIsCreating] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const [postCategoriesList, setPostCategoriesList] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}), [postsList])

    const navigateToCreate = () => {
        setSelectedPost(null);
        setIsCreating(true);
        navigate("create");
    }

    const navigateToEdit = (id, item, e) => {
        e.stopPropagation();
        setSelectedPost(id);
        setIsCreating(true);
    }

    const navigateToList = () => {
        setSelectedPost(null);
        setIsCreating(false);
    }

    const handleCreate = async (payload) => {
        const postsResponse = await posts.savePost(payload);
        const newPostListForState = [...postsList, postsResponse];
        setPostsList(newPostListForState);
        navigateToList();
    }

    const handleUpdate = async (payload, id) => {
        const postsResponse = await posts.updatePost(payload, id);
        const newPostListForState = postsList.map(item => {
            if (item.id === id) {
                return { id, ...postsResponse };
            }
            return item;
        })
        setPostsList(newPostListForState);
        navigateToList();
    }

    useEffect(() => {
        const fetchUserPosts = async () => {
            const postsData = await posts.getAuthPosts();
            setPostsList(postsData);
        }

        const fetchPostCategories = async () => {
            const postsData = await postsCategories.getPostsCategories();
            const postDataFormatted = postsData.map((postData) => {
                const { id, categoryName, categoryIcon } = postData;
                return { id, label: categoryName, value: id }
            })
            setPostCategoriesList(postDataFormatted);
        }

        fetchPostCategories();

        fetchUserPosts();
    }, [])

    return (
        <React.Fragment>
            <div className="text-default m-5">
                {action === 'list' ? (
                    <PostList postsList={postsList} categories={postCategoriesList} onCreate={navigateToCreate} onEdit={navigateToEdit} />
                    ) : (
                    <PostForm id={selectedPost} postDetails={normalisedPosts[selectedPost]} categories={postCategoriesList} onCreate={handleCreate} onUpdate={handleUpdate} onCancel={navigateToList} />
                )}
            </div>
        </React.Fragment>
    )
}

export default Posts;