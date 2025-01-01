import React, { useEffect } from "react";
import PostListItem from "./PostListItem";
import { usePostsCache } from "_contexts/PostsContext";


const PostList = (props) => {
    const { posts = [] } = props;
    const { getLastClickedPost } = usePostsCache();



    return (
        <React.Fragment>
            <div className="flex w-full">
                {posts.map(postItem => <PostListItem key={postItem.id} postItem={postItem} lastClickedPost={getLastClickedPost()} />)}
            </div>
        </React.Fragment>
    )
}

export default PostList;