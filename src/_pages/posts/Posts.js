import React, { useState, useEffect } from "react";

import PostForm from "_modules/posts/_components/form/PostForm";
import PostList from "_modules/posts/_components/list/PostList";
import { AccessAPI } from "_utils";
import { BASE_URL } from "_constants";


const Posts = () => {
    const [isCreating, setIsCreating] = useState(false);

    const navigateToCreate = () => {
        setIsCreating(true);
    }

    const navigateToEdit = () => {
        setIsCreating(true);
    }

    const navigateToList = () => {
        setIsCreating(false);
    }

    useEffect(() => {
        const abcd = new AccessAPI(BASE_URL + 'posts/my').get()
            .then((res) => {
                alert(33)
                return res
            }).catch((err) => {
                // throw err.response
            })
    }, [])

    return (
        <React.Fragment>
            <div className="text-default m-5">
                {isCreating ? (
                    <PostForm onCancel={navigateToList} />
                ) : (
                    <PostList onCreate={navigateToCreate} onEdit={navigateToEdit} />
                )}
            </div>
        </React.Fragment>
    )
}

export default Posts;