import React from "react";
import PostListItem from "./PostListItem";


const PostList = (props) => {
    const { posts = [] } = props;

    return (
        <React.Fragment>
            <div className="flex w-full">
                {posts.map(postItem => <PostListItem key={postItem.id} postItem={postItem} />)}
            </div>
        </React.Fragment>
    )
}

export default PostList;