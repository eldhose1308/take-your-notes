import React, { useState, useEffect } from "react";

import './Comments.css'

const Comments = (props) => {
    const { postId } = props;

    const [ comments, setComments ] = useState({})
    const [ activeCommentId, setActiveCommentId ] = useState(null)

    const openComment = (commentId) => {
        // load the subComments of the given commentId and add it to the comments state
    }

    const likeComment = (commentId) => {
        // like the comment of given Id
    }

    const toggleReplyToComment = (commentId) => {
        // toggle editor to reply to the given commentId
    }

    const replyToComment = (commentId) => {
        // save reply as subComment of the given commentId
    }

    useEffect(() => {
        // loadComments of the postId and save it to state.
        // then render the state array.
    },[])

    return (
        <React.Fragment>
            <p>Comments</p>
        </React.Fragment>
    )
}

export default Comments;