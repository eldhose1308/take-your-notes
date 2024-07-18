import React from "react";

const PostContent = (props) => {
    const { heading, content } = props;

    return (
        <div className="post-content">
            {heading && <h3 className="post-content-heading">{heading}</h3> }
            {content && <p className="post-content-text">{content}</p> }
        </div>
    )
}

export default PostContent;