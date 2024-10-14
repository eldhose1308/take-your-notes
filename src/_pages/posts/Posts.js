import React, { useState, useEffect, useMemo } from "react";

import PostForm from "_modules/posts/_components/form/PostForm";
import PostList from "_modules/posts/_components/list/PostList";

import * as posts from "_services/posts.service";



const Posts = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const [postsList, setPostsList] = useState([]);
    const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}))

    const navigateToCreate = () => {
        setSelectedPost(null);
        setIsCreating(true);
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

        fetchUserPosts();
    }, [])

    return (
        <React.Fragment>
            <div className="text-default m-5">
                {isCreating ? (
                    <PostForm id={selectedPost} postDetails={normalisedPosts[selectedPost]} onCreate={handleCreate} onUpdate={handleUpdate} onCancel={navigateToList} />
                ) : (
                    <PostList postsList={postsList} onCreate={navigateToCreate} onEdit={navigateToEdit} />
                )}
            </div>
        </React.Fragment>
    )
}

export default Posts;