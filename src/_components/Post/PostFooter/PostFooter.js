import React from "react";

const PostFooter = (props) => {

    return (
        <div className="post-footer">
            <div className="left-content">
                <button className="btn btn-sm btn-text">Like</button>
                <button className="btn btn-sm btn-text">Comment</button>
                <button className="btn btn-sm btn-text">Share</button>
            </div>
            <div className="right-content">
                <span className="">10 views</span>
                <button className="btn btn-sm btn-text">Save</button>
            </div>
        </div>
    )
}

export default PostFooter;