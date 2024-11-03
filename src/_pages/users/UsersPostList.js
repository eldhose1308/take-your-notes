import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "_components/Loader/Loader";

import Typography from "_components/Misc/Typography/Typography";
import PostListItem from "_modules/posts/_components/list/PostListItem";

import useUsersPostNavigation from "_modules/users/_hooks/useUsersPostNavigation";
import useUserPosts from "_modules/users/_hooks/useUserPosts";

const UsersPostList = () => {
    const { id: userName } = useParams();

    const { navigateToView } = useUsersPostNavigation();
    const { usersPostList, fetchStatus } = useUserPosts({ userName });

    const handlePostView = (postId, postItem) => {
        const { postSlug } = postItem;
        navigateToView({ userName, postSlug })
    }

    const fetchingComponent = {
        loading: <Loader type='stencil' />,
        failure: <div>Failed</div>,
        success: !usersPostList.length ? (
            <div className='flex flex-col w-full items-center'>
                <Typography size='lg' type='h2'>No Blog Posts Available</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    It seems there aren't any blog posts to display right now.
                </Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    Start creating a new blog post to share your thoughts and ideas!
                </Typography>

            </div>
        ) : (
            <div className='flex content-start'>
                <React.Fragment>
                    {usersPostList.map(postItem => <PostListItem key={postItem.id} postItem={postItem} onEdit={handlePostView} hasFollowButton={true} />)}
                </React.Fragment>
            </div>
        )
    }

    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                {fetchingComponent[fetchStatus]}
            </div>
        </div>
    )
}

export default UsersPostList