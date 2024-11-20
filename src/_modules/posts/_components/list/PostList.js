import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
    const { posts=[] } = props;

    return (
        <React.Fragment>
            {posts.map(postItem => <PostListItem key={postItem.id} postItem={postItem} />)}
        </React.Fragment>
    )
}

export default PostList;