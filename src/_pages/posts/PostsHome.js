import React from "react";

import Loader from "_components/Loader/Loader";

import PostListItem from "_modules/posts/_components/list/PostListItem";
import usePosts from "_modules/posts/_hooks/usePosts";
import { Stencil } from "_components/Loader";

const PostsHome = () => {

    const { postsList, fetchStatus } = usePosts();

    const fetchingPostsComponent = {
        loading: <React.Fragment>
            <Stencil />
            <Stencil />
            <Stencil />
        </React.Fragment>,
        failure: <div>Failed</div>,
        success: <React.Fragment>
            {/* <div className='flex content-start'> */}
            {postsList.map(postItem => <PostListItem key={postItem.id} postItem={postItem} />)}
            {/* </div> */}
        </React.Fragment>
    }

    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                <div className='flex content-start w-full'>
                    {fetchingPostsComponent[fetchStatus]}
                </div>
            </div>
        </div>
    )
}

export default PostsHome;