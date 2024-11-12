import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PostForm from "_modules/posts/_components/form/PostForm";
import PostList from "_modules/posts/_components/list/PostList";

import * as posts from "_services/posts.service";
import * as postsCategories from "_services/postsCategories.service";
import { PostsContext } from "_contexts/PostsContext";



const Posts = ({ action='list' }) => {
    const navigate = useNavigate();
    const { postsList, setPostsList, categoriesList: postCategoriesList } = useContext(PostsContext);

    const [selectedPost, setSelectedPost] = useState(null);

    const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}), [postsList])

    const navigateToCreate = () => {
        setSelectedPost(null);
        navigate("create");
    }

    const navigateToEdit = (id, item, e) => {
        e.stopPropagation();
        setSelectedPost(id);
    }

    const navigateToList = () => {
        setSelectedPost(null);
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