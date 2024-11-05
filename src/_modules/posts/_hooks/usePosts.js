import { useState, useEffect } from "react";

import * as postsService from "_services/posts.service";

const usePosts = () => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await postsService.getPosts();
            setPostsList(postsData);
        };


        fetchPosts();
    }, [])

    return {
        postsList
    }
}

export default usePosts;