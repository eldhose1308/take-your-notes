import React from "react";

import usePosts from "_modules/posts/_hooks/usePosts";
import CardStencil from "_components/Loader/CardStencil";

import useComponentFetchState from "_hooks/useComponentFetchState";
import UsersPostEmpty from "_pages/users/states/UsersPostEmpty";
import PostsSuccess from "_pages/posts/states/PostsSuccess";
import PaginationWrapper from "_components/Pagination/PaginationWrapper";

const PostsHome = () => {

    const { fetchStatus, postsList, fetchPostsData } = usePosts();
    const UsersPostComponentState = useComponentFetchState({ 
        fetchStatus, 
        loading: <CardStencil count='3' />,
        empty: <UsersPostEmpty />, 
        success: <PaginationWrapper initialData={postsList} fetchDataMethod={fetchPostsData} >{({ data }) => <PostsSuccess usersPostList={data} />}</PaginationWrapper> 
    });


    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                <div className='flex content-start w-full'>
                    {UsersPostComponentState}
                </div>
            </div>
        </div>
    )
}

export default PostsHome;