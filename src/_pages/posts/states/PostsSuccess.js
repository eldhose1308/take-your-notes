import PostListItem from "_modules/posts/_components/list/PostListItem";
import React, { useEffect } from "react";

const PostsSuccess = (props) => {
    const { usersPostList = [] } = props;

    return (
        <div className='flex content-start w-full'>
            <React.Fragment>
                {usersPostList.map(postItem => <PostListItem key={postItem.id} postItem={postItem} />)}
            </React.Fragment>
        </div>
    )
}

export default PostsSuccess;