import PostListItem from "_modules/posts/_components/list/PostListItem";
import usePosts from "_modules/posts/_hooks/usePosts";
import React from "react";

const PostsHome = () => {

    const { postsList } = usePosts();

    return (
        <div className="text-default m-5">
            <div className='flex content-start'>
            <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                <React.Fragment>
                    {postsList.map(postItem => <PostListItem key={postItem.id} postItem={postItem} />)}
                </React.Fragment>
            </div>
            </div>
        </div>
    )
}

export default PostsHome;